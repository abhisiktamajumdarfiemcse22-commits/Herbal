import { useEffect, useRef, useState } from 'react'
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("../src/components/MapComponent"), {
  ssr: false,
});
import Head from 'next/head'
import Link from 'next/link'
const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",
    background: 'linear-gradient(135deg, #f0fbf7 0%, #ffffff 60%)',
    color: '#0f172a'
  },
  header: {
    padding: '18px 28px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent',
    borderBottom: '1px solid rgba(15,23,42,0.04)'
  },
  main: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px 40px',
    gap: 24
  },
  chatWindow: {
    width: 760,
    maxWidth: 'calc(100% - 48px)',
    height: '78vh',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 16,
    boxShadow: '0 18px 40px rgba(2,6,23,0.08)',
    overflow: 'visible',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(250,255,252,0.7))',
    backdropFilter: 'blur(8px)',
    marginTop: -28,
    transform: 'translateY(-10px)'
    ,position: 'relative'
  },
  messages: {
    flex: 1,
    padding: 28,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    overflowY: 'auto'
  },
  composer: {
    display: 'flex',
    gap: 12,
    padding: '16px 20px',
    borderTop: '1px solid rgba(15,23,42,0.05)',
    alignItems: 'center',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.5))'
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    borderRadius: 12,
    border: '1px solid rgba(15,23,42,0.06)',
    outline: 'none',
    background: 'rgba(255,255,255,0.9)',
    fontSize: 14
  },
  sendBtn: {
    padding: '10px 16px',
    borderRadius: 12,
    background: '#0f766e',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600
  },
  side: {
    width: 220,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  },
  
  sideCard: {
    padding: 16,
    borderRadius: 12,
    background: '#fff',
    boxShadow: '0 4px 14px rgba(2,6,23,0.06)'
  },
  preset: {
    padding: 10,
    borderRadius: 10,
    background: 'transparent',
    border: '1px solid rgba(15,23,42,0.06)',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: 13
  },
  userBubble: {
    alignSelf: 'flex-end',
    background: '#0f766e',
    color: '#fff',
    padding: '12px 14px',
    borderRadius: 14,
    maxWidth: '70%',
    boxShadow: '0 6px 18px rgba(15,23,42,0.06)'
  },
  assistantBubble: {
    alignSelf: 'flex-start',
    background: '#f8fafc',
    color: '#0f172a',
    padding: '12px 14px',
    borderRadius: 14,
    maxWidth: '70%',
    border: '1px solid rgba(15,23,42,0.03)'
  },
  systemBubble: {
    alignSelf: 'center',
    background: '#fff9f0',
    color: '#7c2d12',
    padding: '8px 10px',
    borderRadius: 10,
    border: '1px solid rgba(252,211,77,0.3)',
    maxWidth: '68%'
  }
}

export default function ChatPage(){
  // Keep only user-visible assistant greeting in client state.
  // The strict system prompt is enforced server-side in pages/api/gemini.js
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello — I can help with herbal and ayurvedic remedies, seasonal suggestions, and wellness/diet options. Ask me about a disease, a remedy, or a wellness goal.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [typingDots, setTypingDots] = useState('')
  const [customPrompt, setCustomPrompt] = useState('')
  const [showMap, setShowMap] = useState(false);
  const bottomRef = useRef(null)

  useEffect(()=>{ if(bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  useEffect(()=>{
    if(!loading){ setTypingDots(''); return }
    let i = 0
    const iv = setInterval(()=>{
      i = (i + 1) % 4
      setTypingDots('.'.repeat(i))
    }, 350)
    return ()=> clearInterval(iv)
  }, [loading])

  async function send(){
    const text = input.trim()
    if(!text) return
    const userMsg = { role: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)
    try{
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      })
      const data = await res.json()
      const assistantText = data?.reply || 'Sorry, no reply available.'
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          text: assistantText,
          hasMapButton: true
        }
      ]);
    }catch(err){
      setMessages(prev => [...prev, { role: 'assistant', text: 'There was an error contacting the assistant. Try again later.' }])
    }finally{ setLoading(false) }
  }

 return (

      <div style={styles.page}>
        <Head>
          <title>Herbal/Ayurveda Chat</title>
        </Head>

    <header style={styles.header}>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <Link href="/">← Home</Link>
        <h1 style={{margin:0,fontSize:18}}>Herbal / Ayurvedic Chat</h1>
      </div>
      <div style={{fontSize:12,color:'#666'}}>
        Scope: herbal & ayurvedic suggestions only
      </div>
    </header>

    <main style={styles.main}>
      <section style={styles.chatWindow}>

        <div style={styles.messages}>
          {messages.map((m, i) => (
            m.role === 'system' ? null : (
              <div key={i} style={m.role==='user' ? styles.userBubble : styles.assistantBubble}>

                <div style={{whiteSpace:'pre-wrap'}}>
                  {m.text}
                </div>

                {m.hasMapButton && (
                  <button
                    onClick={() => setShowMap(true)}
                    style={{
                      marginTop: 8,
                      padding: "6px 10px",
                      background: "#0f766e",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "12px"
                    }}
                  >
                    🌿 Find Ayurvedic Shops
                  </button>
                )}

              </div>
            )
          ))}

          {loading && (
            <div style={styles.assistantBubble}>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div>Thinking{typingDots}</div>
              </div>
            </div>
          )}

        <div ref={bottomRef} />
        </div>

        <div style={styles.composer}>
          <input
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            onKeyDown={(e)=>{ if(e.key==='Enter') send() }}
            placeholder="Ask about a disease, remedy, or wellness plan"
            style={styles.input}
          />
          <button onClick={send} disabled={loading} style={styles.sendBtn}>
            {loading ? 'Thinking…' : 'Send'}
          </button>
        </div>

      </section>

      <aside style={styles.side}>
        <div style={styles.sideCard}>
          <h3>Quick prompts</h3>

          {[
            "Herbal remedies for mild cough",
            "Ayurvedic remedy for tension headache",
            "Natural treatment for insomnia",
            "Diet for better digestion",
            "Daily routine (Dinacharya)",
            "Summer (Pitta) health tips",
            "Winter (Vata) care tips",
            "Monsoon health precautions"
          ].map((text, i) => (
            <button
              key={i}
              style={styles.preset}
              onClick={() => setInput(text)}
            >
              {text}
            </button>
          ))}
        </div>
      </aside>
    </main>

    {showMap && (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}>
        <div style={{
          width: "80%",
          height: "70%",
          background: "#fff",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          pointerEvents: "auto",
        }}>
          <button
            onClick={() => setShowMap(false)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 1001,
              background: "#0f766e",
              color: "#fff",
              border: "none",
              padding: "6px 10px",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Close ✖
          </button>

          <MapComponent />
        </div>
      </div>
    )}

      </div>
 );
}
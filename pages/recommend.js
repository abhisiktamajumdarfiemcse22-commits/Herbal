import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function RecommendPage(){
  const sections = ['Seasonal', 'Disease', 'Wellness & Diet']
  const [active, setActive] = useState('Seasonal')
  const [input, setInput] = useState('')
  const [customDisease, setCustomDisease] = useState('')
  const [savedDiseases, setSavedDiseases] = useState([])
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [messages, setMessages] = useState([])
  const containerRef = useRef(null)

  useEffect(()=>{ if(containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight }, [response])

  function addDisease(){ if(!customDisease.trim()) return; setSavedDiseases(s=>[customDisease.trim(), ...s]); setCustomDisease('') }
  function useSaved(d){ setInput(d) }

  async function ask(){
    const q = input.trim()
    if(!q) return
    setLoading(true)
    setResponse('')
    setMessages(prev=>[...prev, {role:'user', text:q}])
    try{
      const res = await fetch('/api/gemini', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ messages:[{role:'user', text: `${active} recommendation: ${q}`} ] }) })
      const j = await res.json()
      const reply = j?.reply || j?.candidates?.[0]?.output || j?.text || JSON.stringify(j)
      setResponse(reply)
      setMessages(prev=>[...prev, {role:'assistant', text: reply}])
    }catch(err){
      setResponse('Error getting recommendation — check server logs.')
    }finally{ setLoading(false) }
  }

  return (
    <div style={styles.page}>
      <Head><title>Recommendations — Herbal / Ayurveda</title></Head>
      <header style={styles.header}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Link href="/">← Home</Link>
          <h1 style={{margin:0,fontSize:18}}>Recommendations</h1>
        </div>
        <div style={{fontSize:12,color:'#666'}}>Herbal & Ayurvedic recommendations</div>
      </header>

      <main style={styles.main}>
        <nav style={styles.leftNav}>
          {sections.map(s=> (
            <button key={s} onClick={()=>setActive(s)} style={{...styles.navBtn, ...(active===s?styles.navBtnActive:{})}}>{s}</button>
          ))}

          <div style={{marginTop:18}}>
            <h4 style={{margin:'6px 0'}}>Saved diseases</h4>
            {savedDiseases.length===0 ? <div style={{color:'#667'}}>- none -</div> : (
              <div style={{display:'flex',flexDirection:'column',gap:8}}>
                {savedDiseases.map((d,i)=> (
                  <div key={i} style={{display:'flex',gap:8,alignItems:'center'}}>
                    <button onClick={()=>useSaved(d)} style={styles.smallPill}>{d}</button>
                    <button onClick={()=>setSavedDiseases(s=>s.filter(x=>x!==d))} style={styles.xBtn}>✕</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        <section style={styles.center}>
          <div style={styles.card}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <h2 style={{margin:0,fontSize:16}}>{active} Recommendations</h2>
              <div style={{fontSize:12,color:'#4b6'}}>{loading ? 'Fetching…' : 'Ready'}</div>
            </div>

            <div style={{marginTop:14,display:'flex',gap:8}}>
              <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={active==='Disease' ? 'Enter disease name (e.g., mild cough)' : active==='Seasonal' ? 'Describe season or concern (e.g., summer Pitta)' : 'Enter wellness goal (e.g., improve digestion)'} style={styles.input} />
              <button onClick={ask} style={styles.cta} disabled={loading}>{loading ? 'Thinking…' : 'Get'}</button>
            </div>

            <div ref={containerRef} style={styles.resultArea}>
              {messages.map((m,i)=> (
                <div key={i} style={m.role==='user' ? styles.qBubble : styles.aBubble}><div style={{whiteSpace:'pre-wrap'}}>{m.text}</div></div>
              ))}

              {response && (
                <div style={styles.aBubble}><div style={{whiteSpace:'pre-wrap'}}>{response}</div></div>
              )}
            </div>

            <div style={{marginTop:12,display:'flex',gap:8,alignItems:'center'}}>
              <input value={customDisease} onChange={(e)=>setCustomDisease(e.target.value)} placeholder='Save disease for quick use' style={{flex:1,padding:8,borderRadius:8,border:'1px solid #e6efe8'}} />
              <button onClick={addDisease} style={styles.smallBtn}>Save</button>
            </div>
          </div>
        </section>

        <aside style={styles.rightCol}>
          <div style={styles.sideCard}>
            <h3 style={{marginTop:0}}>How this works</h3>
            <p style={{margin:0,color:'#2f4'}}>- Answers are restricted to herbal & ayurvedic scope.</p>
            <p style={{marginTop:8,fontSize:13,color:'#556'}}>The assistant suggests herbs, preparations, administration methods, food/herb interactions and dietary notes. For serious conditions consult a professional.</p>
          </div>

          <div style={styles.sideCard}>
            <h3 style={{marginTop:0}}>Examples</h3>
            <ul style={{paddingLeft:18}}>
              <li>Seasonal: "Summer tips for Pitta imbalance"</li>
              <li>Disease: "Mild cough — herbal decoctions and steam"</li>
              <li>Wellness: "Daily diet to boost Agni"</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  )
}

const styles = {
  page:{display:'flex',flexDirection:'column',minHeight:'100vh',fontFamily:"Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial",background:'linear-gradient(135deg,#f8fffb 0%,#ffffff 60%)'},
  header:{padding:'18px 28px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid rgba(15,23,42,0.04)'},
  main:{display:'flex',gap:20,alignItems:'flex-start',padding:'28px',maxWidth:1200,margin:'0 auto',width:'100%'},
  leftNav:{width:160,display:'flex',flexDirection:'column',gap:12},
  navBtn:{padding:'10px 12px',borderRadius:10,border:'1px solid rgba(15,23,42,0.04)',background:'transparent',cursor:'pointer',textAlign:'left'},
  navBtnActive:{background:'linear-gradient(90deg,#e8fff7,#ffffff)',boxShadow:'0 8px 24px rgba(13,73,60,0.06)',borderColor:'rgba(15,23,42,0.06)'},
  center:{flex:1},
  card:{background:'#fff',borderRadius:14,padding:18,boxShadow:'0 10px 30px rgba(3,20,12,0.04)',minHeight:360,display:'flex',flexDirection:'column'},
  input:{flex:1,padding:10,borderRadius:10,border:'1px solid rgba(15,23,42,0.06)'},
  cta:{padding:'10px 14px',borderRadius:10,background:'#0f766e',color:'#fff',border:'none',cursor:'pointer'},
  resultArea:{marginTop:14,flex:1,overflowY:'auto',display:'flex',flexDirection:'column',gap:10,maxHeight:340,paddingRight:6},
  qBubble:{alignSelf:'flex-end',background:'#e6fff7',padding:10,borderRadius:10,maxWidth:'78%'},
  aBubble:{alignSelf:'flex-start',background:'#fbfffb',padding:10,borderRadius:10,border:'1px solid rgba(15,23,42,0.03)',maxWidth:'78%'},
  rightCol:{width:260,display:'flex',flexDirection:'column',gap:12},
  sideCard:{padding:14,borderRadius:12,background:'#fff',boxShadow:'0 6px 18px rgba(3,20,12,0.03)'},
  smallBtn:{padding:'8px 10px',borderRadius:8,background:'#2b8a3e',color:'#fff',border:'none'},
  smallPill:{padding:'6px 10px',borderRadius:8,background:'#f2fff6',border:'1px solid rgba(15,23,42,0.04)'},
  xBtn:{padding:'6px 8px',borderRadius:8,border:'1px solid rgba(200,30,30,0.08)',background:'transparent',cursor:'pointer'}
}

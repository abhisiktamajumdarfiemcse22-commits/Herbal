import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import plants from '../src/data/plants'
import PlantCard from '../src/components/PlantCard'
import InfoCard from '../src/components/InfoCard'

export default function Home() {
  const router = useRouter()
  const [hover, setHover] = useState(false)
  const [mottoSrc, setMottoSrc] = useState('/pictures/motto.jpg')
  const featured = plants.slice(0,3)

  return (
    <main className="container">
      <section className="hero">
        <h1>Virtual Herbal Garden</h1>

        <div className="hero-statement">Explore medicinal plants in interactive 3D, learn traditional uses, and get personalized recommendations. Discover scientifically-curated and traditional knowledge about medicinal plants.</div>

        <div className="hero-row">
          <div className="hero-left-column full-width">
            <InfoCard title="Why herbal treatments matter">
              <p>Herbal medicine has supported human health for millennia. It combines empirical knowledge, ecological sustainability, and culturally-rooted healing traditions. Responsible use of medicinal plants can complement modern care when guided by evidence and practitioners.</p>
            </InfoCard>

            <InfoCard title="Why herbal treatments matter">
              <p>Herbal medicine has supported human health for millennia. It combines empirical knowledge, ecological sustainability, and culturally-rooted healing traditions. Responsible use of medicinal plants can complement modern care when guided by evidence and practitioners.</p>
            </InfoCard>

            <div className="goal-wrapper">
              <section className="goal-card">
                <div className="goal-inner">
                  <div className="goal-text">
                    <h3>Our goal</h3>
                    <p>To make interactive, evidence-aware information about medicinal plants accessible to everyone — combining 3D models, traditional knowledge, and curated scientific resources so people can learn safely and responsibly.</p>
                  </div>
                  <div className="goal-art">
                    {mottoSrc ? (
                      <img src={mottoSrc} alt="motto" onError={(e)=>{ e.currentTarget.style.display='none'; const fb = e.currentTarget.parentElement.querySelector('.motto-fallback'); if(fb) fb.style.display='flex'; }} />
                    ) : (
                      <div className="motto-fallback">Our Motto</div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="featured-header">
          <h2>Featured Plants</h2>
          <Link href="/plants" className="btn btn-featured"
            onMouseEnter={() => { setHover(true); router.prefetch('/plants') }}
            onMouseLeave={() => setHover(false)}
            onFocus={() => { setHover(true); router.prefetch('/plants') }}
            onBlur={() => setHover(false)}
          >Browse Plants</Link>
        </div>

        <div className="grid">
          {featured.map(p => (
            <PlantCard key={p.id} plant={p} />
          ))}
        </div>

        <Link href="/plants" className={`featured-overlay ${hover ? 'visible' : ''}`} aria-hidden={!hover}>
          <div className="overlay-content" role="link" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') router.push('/plants') }}>
            <h3>Wanna see all plants?</h3>
            <p>Click Browse to explore the full garden</p>
            <span className="overlay-cta">Browse Plants Gallery</span>
          </div>
        </Link>
      </section>
    </main>
  )
}

import Link from 'next/link'
import { useState } from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header sticky">
      <div className="container header-inner">
        <div className="brand">
          <Link href="/" className="logo">Virtual Herbal Garden</Link>
          <small className="tagline">Explore. Learn. Heal.</small>
        </div>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-expanded={open}>
          <Link href="/plants">Plants</Link>
          <Link href="/recommend">Recommend</Link>
          <Link href="/chat">Chat</Link>
          
          <SignedOut>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
          </SignedOut>
          
          <SignedIn>
            <div style={{ display: 'inline-block', marginLeft: '10px' }}>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </nav>

        <button className={`hamburger ${open ? 'is-active' : ''}`} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

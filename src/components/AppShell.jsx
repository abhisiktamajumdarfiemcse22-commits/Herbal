import Header from './Header'
import Footer from './Footer'

export default function AppShell({ children }) {
  return (
    <div className="app">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

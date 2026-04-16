import '../styles/globals.css'
import AppShell from '../src/components/AppShell'
import { ClerkProvider } from '@clerk/nextjs'

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </ClerkProvider>
  )
}

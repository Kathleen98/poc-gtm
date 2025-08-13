import { GoogleTagManager } from '@next/third-parties/google'
import GTMPageTracker from '../components/GTMPageTracker'
import { Suspense } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Suspense fallback={null}>
          <GTMPageTracker />
        </Suspense>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      </body>
    </html>
  )
}
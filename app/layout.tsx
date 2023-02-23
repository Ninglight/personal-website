import { AnalyticsWrapper } from './components/analytics/analytics.component'
import { BackgroundComponent } from './components/background/background.component'
import { HeaderComponent } from './components/header/header.component'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <BackgroundComponent>
          <HeaderComponent />
          {children}
          <AnalyticsWrapper />
        </BackgroundComponent>
      </body>
    </html>
  )
}

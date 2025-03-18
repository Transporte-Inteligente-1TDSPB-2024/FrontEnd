import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home ',
  description: 'Aprendendo NodeJS do zero',
  openGraph: {
    title: 'Aprendendo NextJS',
    description: 'Tamo na luta com next js'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }

}
export default function Home() {
  return (
    <div>
      <h1> Página Home</h1>
    </div>
  )
}
import {About} from "./components/about" ; 
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { NetworkBackground } from "./components/network-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NetworkBackground />
      <Hero />
      <About />
      <Services />
    </main>
  )
}

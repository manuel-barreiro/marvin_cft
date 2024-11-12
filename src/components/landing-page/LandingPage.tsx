import Hero from "@/components/landing-page/components/Hero"
import Modules from "@/components/landing-page/components/Modules"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container py-6 md:py-12">
        <div className="grid gap-6">
          <Hero />
          <Modules />
        </div>
      </main>
    </div>
  )
}

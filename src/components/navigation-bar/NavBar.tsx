import Link from "next/link"
import { HelpCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import NavMenu from "@/components/navigation-bar/components/nav-menu/NavMenu"
import NavSheet from "@/components/navigation-bar/components/NavSheet"

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/nestleLogo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold">MARVIN</span>
          </Link>
          <NavMenu />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden lg:flex">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Help</span>
          </Button>
          <NavSheet />
        </div>
      </div>
    </header>
  )
}

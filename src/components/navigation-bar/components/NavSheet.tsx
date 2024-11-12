import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Layout, TrendingUp, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/nestleLogo.png" alt="Logo" width={24} height={24} />
            <span className="font-nestleText text-lg font-bold">MARVIN</span>
          </Link>
          <div className="grid gap-2">
            <Link href="/descriptive" className="flex items-center gap-2 py-2">
              <Layout className="h-4 w-4" />
              Descriptive
            </Link>
            <Link href="/modelling" className="flex items-center gap-2 py-2">
              <TrendingUp className="h-4 w-4" />
              Modelling Insights
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

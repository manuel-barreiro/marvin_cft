import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Hero() {
  return (
    <section className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-4">
        <h1 className="font-nestleBrush text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          MARVIN - CPFR TOOL
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Identify potential price growth and pack-size change opportunities,
          prescribe price and assortment changes while considering
          cannibalization and competition and simulate the impact on business.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Market
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select market" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chile">Chile</SelectItem>
                <SelectItem value="brazil">Brazil</SelectItem>
                <SelectItem value="mexico">Mexico</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Category
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="coffee">Coffee</SelectItem>
                <SelectItem value="dairy">Dairy</SelectItem>
                <SelectItem value="beverages">Beverages</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button size="lg" className="w-full sm:w-auto">
          Get Started
        </Button>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/hero.webp"
          alt="hero imahe"
          width={600}
          height={400}
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </section>
  )
}

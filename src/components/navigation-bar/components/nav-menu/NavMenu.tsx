import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { BarChart3, Layout, TrendingUp } from "lucide-react"
import NavMenuLink from "@/components/navigation-bar/components/nav-menu/components/NavMenuLink"

export default function NavMenu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Layout className="mr-2 h-4 w-4" />
            Descriptive
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <li>
                <NavMenuLink
                  href="/executive-summary"
                  title="Executive Summary"
                  description="Get a comprehensive overview of market performance and key metrics"
                  icon={BarChart3}
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <TrendingUp className="mr-2 h-4 w-4" />
            Modelling Insights
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <li>
                <NavMenuLink
                  href="/price-elasticity"
                  title="Price & Discount Elasticities"
                  description="Analyze price sensitivity and promotional effectiveness"
                  icon={BarChart3}
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <BarChart3 className="mr-2 h-4 w-4" />
            Scenario Planning
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <li>
                <NavMenuLink
                  href="/price-elasticity"
                  title="Price & Discount Elasticities"
                  description="Analyze price sensitivity and promotional effectiveness"
                />
              </li>
              <li>
                <NavMenuLink
                  href="/price-elasticity"
                  title="Price & Discount Elasticities"
                  description="Analyze price sensitivity and promotional effectiveness"
                />
              </li>
              <li>
                <NavMenuLink
                  href="/scenario-planning"
                  title="Scenario Planning"
                  description="Analyze price sensitivity and promotional effectiveness"
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

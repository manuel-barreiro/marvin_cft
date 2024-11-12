import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface NavMenuLinkProps {
  href: string
  title: string
  description: string
  icon?: LucideIcon
}

export default function NavMenuLink({
  href,
  title,
  description,
  icon: Icon,
}: NavMenuLinkProps) {
  return (
    <Link
      href={href}
      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
    >
      <div className="mb-2 flex items-center gap-2 text-lg font-medium">
        {Icon && <Icon className="h-6 w-6" />}
        <span>{title}</span>
      </div>
      <p className="text-sm leading-tight text-muted-foreground">
        {description}
      </p>
    </Link>
  )
}

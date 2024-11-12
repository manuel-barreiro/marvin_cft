import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import NavBar from "@/components/navigation-bar/NavBar"

const nestleBrush = localFont({
  src: "../assets/fonts/NestleBrush-Regular.ttf",
  variable: "--font-nestle-brush",
})
const nestleScript = localFont({
  src: "../assets/fonts/NestleScriptOfficeEUR-Regular.ttf",
  variable: "--font-nestle-script",
})
const nestleText = localFont({
  src: "../assets/fonts/NestleTextTF-Book.ttf",
  variable: "--font-nestle-text",
})

export const metadata: Metadata = {
  title: "MARVIN | CPFR Tool",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${nestleBrush.variable} ${nestleText.variable} ${nestleScript.variable} font-nestleText antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}

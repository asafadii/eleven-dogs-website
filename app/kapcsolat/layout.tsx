import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kapcsolat",
  description: "Vedd fel velünk a kapcsolatot! Kutyasétáltatás foglalás Budapesten, a 11. kerületben.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

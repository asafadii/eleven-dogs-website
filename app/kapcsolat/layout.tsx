import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kapcsolat",
  description:
    "Lépj kapcsolatba az Eleven Dogs csapatával: kutyasétáltatás, időpont és kérdések Újbudán, emailben vagy üzenetben.",
  alternates: { canonical: "/kapcsolat" },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { redirect } from "next/navigation"

export default function RootPage() {
  // This page should never be reached due to middleware redirect
  // But we provide a fallback just in case
  redirect("/us")
}

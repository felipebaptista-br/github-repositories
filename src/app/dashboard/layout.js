'use client'

import { useRouter } from "next/navigation"
import { getItem } from "@/utils/storage/localStorage"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function RootLayout({ children }) {
    const router = useRouter()
    const auth = getItem('auth')

    if (auth) {
        return <> <Header />{children} <Footer /></>
    } else {
        router.push('/')
    }
}

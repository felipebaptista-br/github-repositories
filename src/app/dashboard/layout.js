'use client'

import { useRouter } from "next/navigation"
import { authLogin } from "@/utils/authentication/auth"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function RootLayout({ children }) {
    const router = useRouter()

    if (authLogin()) {
        return <> <Header />{children} <Footer /></>
    } else {
        router.push('/')
    }
}

'use client'

// import { authLogin } from "@/utils/authentication/auth"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function Layout({ children }) {
    // authLogin('auth')

    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

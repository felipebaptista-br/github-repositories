'use client'

import { authLoginNavigation } from "@/utils/authentication/auth"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function Layout({ children }) {

    if (authLoginNavigation) {
        return (
            <main>
                <Header />
                {children}
                <Footer />
            </main>
        )
    }
}

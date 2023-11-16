import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default function Layout({ children }) {

    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

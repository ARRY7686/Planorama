import Contact from "../../components/contact";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
            <Contact />
        </div>
        <Footer />
        </main>
    )
}
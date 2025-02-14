import System from "@/components/home/System";
import Hero from "@/components/home/Hero";
import Product from "@/components/home/Product";
import Bento from "@/components/home/Bento";

const Home: React.FC = () => {
    return (
        <main className="flex flex-col min-h-screen bg-black">
            <Hero />
            <Product />
            <System />
            <Bento />
        </main>        
    )
}

export default Home;

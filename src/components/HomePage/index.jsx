import Link from "next/link";
import { Carrossel } from "../Carrossel";
import Container from "../Container";

export default function HomePage() {
    return(
        <main className="flex border-2 border-amber-600 " >
           <aside className=" w-1/3 border-2 flex justify-center" >
            <ul className="flex flex-col gap-4 py-6" >
                <li> <Link href="/" >Woman's Fashion</Link> </li>
                <li> <Link href="/" >Men's Fashion</Link> </li>
                <li> <Link href="/" >Electronics</Link> </li>
                <li> <Link href="/" >Home & Lifestyle</Link> </li>
                <li> <Link href="/" >Medicine</Link> </li>
                <li> <Link href="/" >Sports & Outdoor</Link> </li>
                <li> <Link href="/" >Baby's & Toys</Link> </li>
                <li> <Link href="/" >Groceries & Pets</Link> </li>
                <li> <Link href="/" >Health & Beauty</Link> </li>
            </ul>
           </aside>
            <section className="border-2 w-full bg-black" >
                <Container className="text-amber-50" >alguma coisa</Container>
                <Carrossel />
            </section>
        </main>
        
    )
}
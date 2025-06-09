import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Header() {
    return (
        <header className="flex " >
            Exclusive
            <nav className="flex " >
                <ul className="flex" >
                    <li> <Link href="/" >Home</Link> </li>
                    <li> <Link href="/contact" >Contact</Link> </li>
                    <li> <Link href=" /about " >About</Link> </li>
                    <li> <Link href=" /signup " >Sign Up</Link> </li>
                </ul>
            </nav>

            <Container> 
                <input placeholder="what are you looking for?" /> 
            </Container>
            <Container>
                <Container>
                    <Image />
                </Container>
                <Container>
                    <Image />
                </Container>
            </Container>
        </header>
    )
}
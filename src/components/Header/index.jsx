import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import FaveIcon from '../../../public/Vector.png';
import CartIcon from '../../../public/Cart.png';

export default function Header() {
    return (
        <header className="flex justify-evenly items-center border-b-1 border-gray-200 pt-10 pb-4 " >
            <h2 className=" text-[#000000] font-inter font-bold leading-6 tracking-[3%] text-2xl " >
                Exclusive
            </h2>          
            <nav className="flex " >
                <ul className="flex gap-[48px] " >
                    <li> <Link href="/" className=" font-poppins  " >Home</Link> </li>
                    <li> <Link href="/contact" className=" font-poppins" >Contact</Link> </li>
                    <li> <Link href=" /about " className=" font-poppins" >About</Link> </li>
                    <li> <Link href=" /signup " className=" font-poppins" >Sign Up</Link> </li>
                </ul>
            </nav>
            <Container className="flex gap-6 items-center ">
                <Container> 
                    <input className=" bg-[#f5f5f5] rounded-[4px] py-2 pl-5 pr-3" placeholder="what are you looking for?" /> 
                </Container>
                <Container className=" flex gap-4 items-center " >
                    <Container>
                        <Link href="/" >
                            <Image src={FaveIcon} />
                        </Link>                       
                    </Container>
                    <Container>
                        <Link href="/" >
                            <Image src={CartIcon} />
                        </Link>
                    </Container>
                </Container>
            </Container>           
        </header>
    )
}
"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import FaveIcon from '../../../public/Vector.png';
import CartIcon from '../../../public/Cart.png';
import { useEffect, useState } from "react";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";

export default function Header() {

    const [usuario, setUsuario] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("usuario");
        if (storedUser) {
            setUsuario(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        setUsuario(null);
        window.location.href = "/login";
    }

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
                    {/* <li> <Link href=" /signup " className=" font-poppins" >Sign Up</Link> </li> */}
                    {!usuario && <li> <Link href=" /signup " className=" font-poppins" >Sign Up</Link> </li>}
                </ul>
            </nav>
            <Container className="flex gap-6 items-center ">
                <Container> 
                    <input className=" bg-[#f5f5f5] rounded-[4px] py-2 pl-5 pr-3" placeholder="what are you looking for?" /> 
                </Container>
                <Container className=" flex gap-4 items-center " >
                    <Container>
                        <Link href="/" >
                            <Image src={FaveIcon} alt="icone de favoritos" />
                        </Link>                       
                    </Container>
                    <Container>
                        <Link href="/cart" >
                            <Image src={CartIcon} alt="icone de carrinho" />
                        </Link>
                    </Container>
                </Container>

                {/* SE ESTIVER LOGADO */}
                {usuario ? (
                    <Container className=" relative " >
                        <FaRegUserCircle
                            size={32}
                            className=" cursor-pointer "
                            onClick={() => setOpenMenu(!openMenu)}
                        />
                        {openMenu && (
                           <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 z-50">
                                <p className="px-4 py-2 text-sm font-semibold border-b">Olá, {usuario.nome}</p>
                                <Link href="/account" className="block px-4 py-2 hover:bg-gray-100">Manage My Account</Link>
                                <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link>
                                <Link href="/cancellations" className="block px-4 py-2 hover:bg-gray-100">My Cancellations</Link>
                                <Link href="/reviews" className="block px-4 py-2 hover:bg-gray-100">My Reviews</Link>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                                    >
                                    Logout
                                </button>
                            </div> 
                        )}
            </Container>
                ) : (
                    <Link href="/login" className=" font-poppins " >Login</Link>
                )}
            </Container>
        </header>
    )
}
"use client"
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import loginImageScreen from "../../../public/login-screen-image.png"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://localhost:7098/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, Senha })
        })

        if (!response.ok) throw new Error("Erro ao fazer login");

        // guarda token e usuário no localStorage

        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));

        // redireciona para a página principal
        router.push("/");
        } catch (error) {
            alert("Erro: " + error.message);
        }
    }
    return(
        <div>
            <TopHeader />
            <Header />
            <main className=" flex gap-32" >
                <div>
                    <Image src={loginImageScreen} alt=" imagem de um celular " />
                </div>
                <section className="flex flex-col justify-center  gap-10" >
                    <div className=" flex flex-col gap-6" >
                        <h3 className=" font-inter text-4xl tracking-[4%] font-medium " >Log in to Exclusive</h3>
                        <span className=" font-poppins text-[16px0] " >Enter your details below</span>
                    </div>

                    <form className="flex flex-col gap-8"  action="">
                        <input 
                            className=" border-b py-1 px-1" placeholder="Email or Phone Number" 
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            className=" border-b py-1 px-1" 
                            placeholder=" Password " 
                            type="password"
                            value={Senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />                          
                    
                        <Container className="flex gap-20 items-center" >
                            <Button
                            type="submit"
                            onClick={handleLogin} 
                            className=" py-4 px-30 bg-[#DB4444] rounded  text-[#FAFAFA] text-[16px] font-poppins font-medium cursor-pointer" >Login</Button>
                            <Link href="/login" className=" font-poppins text-[16px] text-[#DB4444] border-b-black cursor-pointer hover:underline " >Forget password?</Link>
                        </Container>
                    </form>
                </section>
            </main>                
            <Footer />
        </div>
    )
}
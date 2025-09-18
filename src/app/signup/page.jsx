"use client"
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import loginImageScreen from "../../../public/login-screen-image.png"
import Button from "@/components/Button";
import Link from "next/link";
import React, { useState } from "react";

export default function signUpPage() {

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://localhost:7098/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const error = await response.json();
                alert("Erro: " + error.message);
                return;
            }

            const data = await response.json();
            console.log("Resposta do backend:", data);
            alert("Usuário cadastrado com sucesso!");

        } catch (error) {
            alert("Erro: " + error.message);
        }
    };

    return(
        <div>
            <TopHeader />
            <Header />
            <Container className=" flex gap-32" >
                <div>
                    <Image src={loginImageScreen} alt=" imagem de um celular " />
                </div>
                <div className="flex justify-center items-center" >
                    <Container className=" flex flex-col gap-12" >
                        <div className=" flex flex-col gap-6" >
                            <h3 className=" font-inter text-4xl tracking-[4%] font-medium " >Create an account</h3>
                            <span className=" font-poppins text-[16px0] " >Enter your details below</span>
                        </div>

                        <div>
                            <form className="flex flex-col gap-8" onSubmit={handleChange} action="">
                                <input name="nome" value={formData.nome} onChange={handleChange} className=" border-b py-1 px-1" placeholder="Name" type="text" />
                                <input name="email" value={formData.email} onChange={handleChange} className=" border-b py-1 px-1" placeholder="Email or Phone Number" type="email" />
                                <input name="senha" value={formData.senha} onChange={handleChange} className=" border-b py-1 px-1" placeholder="Password" type="password" />

                                <Container className="flex flex-col gap-4" >
                                    <Button type="submit" onClick={handleSubmit} className=" py-4 px-30 bg-[#DB4444] text-[#FAFAFA] text-[16px] font-poppins font-medium cursor-pointer" >Create Account</Button>
                                    <Button className=" py-4 px-30 bg-[#FFFFFF] text-[#000000] text-[16px] font-poppins font-medium cursor-pointer border" >Sign up with Google</Button>
                                </Container>
                            </form>

                            <div className=" py-7 px-30 flex gap-4" >
                                <span className=" font-poppins text-[16px] " >Already have account?</span>
                                <Link href="/login" className=" font-poppins text-[16px] font-medium border-b-black cursor-pointer hover:underline " >Log in</Link>
                            </div>

                        </div>
                    </Container>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
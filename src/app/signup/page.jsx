import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import loginImageScreen from "../../../public/login-screen-image.png"
import Button from "@/components/Button";
import Link from "next/link";

export default function signUpPage() {
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
                            <form className="flex flex-col gap-8"  action="">
                                <input className=" border-b py-1 px-1" placeholder="Name" type="text" />
                                <input className=" border-b py-1 px-1" placeholder="Email or Phone Number" type="text" />
                                <input className=" border-b py-1 px-1" placeholder="Password" type="" />

                                <Container className="flex flex-col gap-4" >
                                    <Button className=" py-4 px-30 bg-[#DB4444] text-[#FAFAFA] text-[16px] font-poppins font-medium cursor-pointer" >Create Account</Button>
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
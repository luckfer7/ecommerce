import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import loginImageScreen from "../../../public/login-screen-image.png"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function LoginPage() {
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
                        <input className=" border-b py-1 px-1" placeholder="Email or Phone Number" type="text" />
                        <input className=" border-b py-1 px-1" placeholder=" Password " type="text" />                          
                    
                        <Container className="flex gap-20 items-center" >
                            <Button className=" py-4 px-30 bg-[#DB4444] rounded  text-[#FAFAFA] text-[16px] font-poppins font-medium cursor-pointer" >Login</Button>
                            <Link href="/login" className=" font-poppins text-[16px] text-[#DB4444] border-b-black cursor-pointer hover:underline " >Forget password?</Link>
                        </Container>
                    </form>
                </section>
            </main>                
            <Footer />
        </div>
    )
}
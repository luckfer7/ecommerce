import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import loginImageScreen from "../../../public/login-screen-image.png"

export default function signUpPage() {
    return(
        <div>
            <TopHeader />
            <Header />
            <Container className=" flex gap-32" >
                <div>
                    <Image src={loginImageScreen} />
                </div>
                <div className="flex justify-center items-center" >
                    <Container className=" flex flex-col gap-12" >
                        <div>
                            <h3>Create an account</h3>
                            <span>Enter your details below</span>
                        </div>

                        <div>
                            <form action="">

                            </form>

                        </div>
                    </Container>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
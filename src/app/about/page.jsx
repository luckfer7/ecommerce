import Footer from "@/components/Footer";
import Garanty from "@/components/Garanty-section";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import imagem from "../../../public/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
import Container from "@/components/Container";

export default function AboutPage(){
    return(
        <div>
            <TopHeader />
            <Header />
            <main className=" flex flex-col " >
                <section className=" flex justify-between" >
                    <div className=" flex flex-col justify-center max-w-[40%] mx-auto gap-10" >
                        <h3 className=" font-inter font-semibold text-5xl " >Our Story</h3>
                        <Container className=" flex flex-col gap-6 " >
                            <p className=" font-poppins text-[16px] " >Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p className=" font-poppins text-[16px] " >Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </Container>
                        
                    </div>
                    <div>
                        <Image src={imagem} />
                    </div>
                </section>
            </main>
            <Garanty />
            <Footer />
        </div>
    )
}
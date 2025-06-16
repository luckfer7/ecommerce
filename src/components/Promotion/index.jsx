import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import jbl from "../../../public/soundbox-jbl.png";

export default function Promotion() {
    return(
        <section className="mb-20 px-32" >
            <Container  className="flex justify-between w-[90%] mx-auto bg-black px-10" > 
                <Container className=" max-w-[40%] flex flex-col justify-center gap-7 " >
                    <span className="text-[#00FF66] text-[16px] font-poppins " >Categories</span>
                    <h2 className="font-semibold leading-12 text-4xl tracking-[4%] text-[#FAFAFA]" >
                        Enhance Your Music Experience
                    </h2>
                    <Container className="mt-4">
                        <Link className=" bg-[#00FF66] w-0 rounded-[4px] py-4 px-12 text-center text-[#FAFAFA] font-poppins " href="/" >Buy Now!</Link>
                    </Container>
                    
                </Container>

                <Container>
                    <Image src={jbl} alt="imagem de uma jbl" />
                </Container>
            </Container>
        </section>
    )
}
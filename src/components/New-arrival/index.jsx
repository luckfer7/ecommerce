import Container from "../Container";
import playstation from "../../../public/playstation-five.png"
import womanHat from "../../../public/woman-hat.png"
import Link from "next/link";
import Image from "next/image";

export default function NewArrival() {
    return(
        <section className=" mb-20 px-32 " >
            <Container className="flex justify-between flex-col gap-10" >
                <Container className=" flex  flex-col" >
                        <span className=" font-poppins text-[#DB4444] text-[16  px] font-semibold leading-5" >Featured</span>
                        <h2 className="font-inter text-black font-semibold leading-12 text-4xl tracking-[4%]" >New Arrival</h2>
                </Container>
                
                <Container className="flex justify-around gap-8" >
                    <Container className="bg-black p-12" >
                        <Container className=" flex flex-col justify-end p-4 gap-4 bg-[url(/playstation-five.png)] bg-cover bg-center w-[500px] h-[500px] rounded-xl bg-black" >
                        <span className="text-[#FAFAFA] font-inter text-2xl font-semibold" >PlayStation 5</span>
                        <span className="text-[#FAFAFA] font-poppins text-[14px]" >Black and White version of the PS5 coming out on sale.</span>
                        <Link className="text-[#FAFAFA] underline font-poppins text-[16px]" href="/" >Shop now</Link>
                        </Container>
                    </Container>
                    
                    
                    <Container className=" flex flex-col  gap-7" >
                        <Container className="flex bg-black">
                            <Container className="flex flex-col justify-center p-4 gap-2" >
                                <span className="text-[#FAFAFA] font-inter text-2xl font-semibold" >Women’s Collections</span>
                                <span className="text-[#FAFAFA] font-poppins text-[14px]" >Featured woman collections that give you another vibe.</span>
                                <Link className="text-[#FAFAFA] underline font-poppins text-[16px]" href="/" >Shop now</Link>
                            </Container>
                            <Container>
                                <Image src={womanHat} alt="imagem de mulher com chapéu" />
                            </Container>
                        </Container>
                        
                        <Container className="flex gap-5" >
                            <Container className="bg-black p-12 " >
                                <Container className="flex flex-col justify-end  bg-[url(/speaker.png)] bg-cover bg-center w-[210px] h-[222px] rounded-xl bg-black gap-2 " >
                                    <span className="text-[#FAFAFA] font-inter text-2xl font-semibold" >PlayStation 5</span>
                                    <span className="text-[#FAFAFA] font-poppins text-[14px]" >Black and White version of the PS5 coming out on sale.</span>
                                    <Link className="text-[#FAFAFA] font-poppins text-[16px] underline" href="/" >Shop now</Link>
                                </Container>
                            </Container>

                            <Container className="bg-black p-12" >
                                <Container className="flex flex-col justify-end  bg-[url(/parfum.png)] bg-cover bg-center w-[210px] h-[222px] rounded-xl bg-black gap-2" >
                                    <span className="text-[#FAFAFA] font-inter text-2xl font-semibold" >PlayStation 5</span>
                                    <span className="text-[#FAFAFA] font-poppins text-[14px]" >Black and White version of the PS5 coming out on sale.</span>
                                    <Link className="text-[#FAFAFA] font-poppins text-[16px] underline
                                    " href="/" >Shop now</Link>
                                </Container>
                            </Container>
                        </Container>
                        
                    </Container>

                    

                </Container>
            </Container>
        </section>
    )
}
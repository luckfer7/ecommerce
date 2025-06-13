"use client"
import Link from "next/link";
import Container from "../Container";
// import { Carousel } from "../ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import iphone from "../../../public/iphone.png";
import appleicon from "../../../public/apple-icon.png";
import Autoplay from "embla-carousel-autoplay";


export default function HomePage() {
    return(
        <main className="flex " >
           <aside className=" w-1/3 border-r-1 border-gray-200 flex justify-center" >
            <ul className="flex flex-col gap-4 py-6" >
                <li> <Link href="/"  >Woman's Fashion</Link> </li>
                <li> <Link href="/" >Men's Fashion</Link> </li>
                <li> <Link href="/" >Electronics</Link> </li>
                <li> <Link href="/" >Home & Lifestyle</Link> </li>
                <li> <Link href="/" >Medicine</Link> </li>
                <li> <Link href="/" >Sports & Outdoor</Link> </li>
                <li> <Link href="/" >Baby's & Toys</Link> </li>
                <li> <Link href="/" >Groceries & Pets</Link> </li>
                <li> <Link href="/" >Health & Beauty</Link> </li>
            </ul>
           </aside>
            <section className=" w-full py-6" >
                <Container className=" flex justify-center items-center w-[80%] mx-auto p-19 h-full bg-black border-black border-2 overflow-hidden" >
                    <Carousel className=" mx-auto " plugins={[ Autoplay ({ delay: 2000 }) ]} >
                        <CarouselContent className=" flex " >
                            <CarouselItem className=" flex items-center justify-between gap-10 " >
                                <Container className=" flex flex-col justify-baseline gap-4  " >
                                    <Container className=" flex items-center gap-2 " >
                                        <Image 
                                            src={appleicon}
                                            alt=" icone da apple "
                                            
                                        />
                                        <span className="text-lg font-semibold text-white " >iPhone 14 Series</span>
                                    </Container>
                                        <h2 className="text-3xl font-bold  text-white leading-tight">
                                            Up to 10% off Voucher
                                        </h2>
                                        <button className="text-white cursor-pointer underline">Shop Now →</button>
                                </Container>
                                <Container className="max-w-lg" >
                                    <Image
                                    src={iphone}
                                    alt="iPhone"
                                    className="w-full h-auto object-contain rounded-lg"
                                />
                                </Container>
                                
                            </CarouselItem>


                            <CarouselItem className=" flex items-center justify-between gap-10 " >
                                <Container className=" flex flex-col justify-baseline gap-4  " >
                                    <Container className=" flex items-center gap-2 " >
                                        <Image 
                                            src={appleicon}
                                            alt=" icone da apple "
                                            
                                        />
                                        <span className="text-lg font-semibold text-white " >iPhone 14 Series</span>
                                    </Container>
                                        <h2 className="text-3xl font-bold  text-white leading-tight">
                                            Up to 10% off Voucher
                                        </h2>
                                        <button className="text-white cursor-pointer underline">Shop Now →</button>
                                </Container>
                                <Container className="max-w-lg" >
                                    <Image
                                    src={iphone}
                                    alt="iPhone"
                                    className="w-full h-auto object-contain rounded-lg"
                                />
                                </Container>
                                
                            </CarouselItem>


                            <CarouselItem className=" flex items-center justify-between gap-10 " >
                                <Container className=" flex flex-col justify-baseline gap-4  " >
                                    <Container className=" flex items-center gap-2 " >
                                        <Image 
                                            src={appleicon}
                                            alt=" icone da apple "
                                            
                                        />
                                        <span className="text-lg font-semibold text-white " >iPhone 14 Series</span>
                                    </Container>
                                        <h2 className="text-3xl font-bold  text-white leading-tight">
                                            Up to 10% off Voucher
                                        </h2>
                                        <button className="text-white cursor-pointer underline">Shop Now →</button>
                                </Container>
                                <Container className="max-w-lg" >
                                    <Image
                                    src={iphone}
                                    alt="iPhone"
                                    className="w-full h-auto object-contain rounded-lg"
                                />
                                </Container>
                                
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </Container>
                
            </section>
        </main>
        
    )
}
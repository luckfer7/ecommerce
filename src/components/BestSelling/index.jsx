import Link from "next/link";
import Container from "../Container";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { bestSellingProducts } from "@/data/bestselling";
import Image from "next/image";

export default function Bestselling() {
    return(
        <section className=" mb-20 flex flex-col gap-14 px-32 " >
            <Container className="flex justify-between items-center" >
                <Container className=" flex  flex-col" >
                        <span className=" font-poppins text-[#DB4444] text-[16  px] font-semibold leading-5" >This month</span>
                        <h2 className="font-inter text-black font-semibold leading-12 text-4xl tracking-[4%]" >Best Selling Products</h2>
                </Container>

                <Link href="/" className=" rounded-[4px] py-4 px-12 bg-[#DB4444] text-center text-[#FAFAFA] font-poppins " >View All</Link>
            </Container>

            <Carousel className="w-full"> 
                    <CarouselContent className=" ">
                        {bestSellingProducts.map((bestProd) => (
                        <CarouselItem key={bestProd.id} className=" basis-[220px] grow-0 shrink-0 ">
                            <div className="  flex flex-col gap-4">
                                <Card className="rounded-none p-2 h-[200px] flex justify-center items-center bg-[#F5F5F5]" >
                                    <CardContent className=" p-4 ">
                                        <Image className="mx-auto" src={bestProd.image} alt={bestProd.name} width={152} height={172}  />                   
                                    </CardContent>
                                </Card>
                                <p className=" font-poppins text-[12px] text-black font-medium " >{bestProd.name}</p>
                                <span className=" font-poppins text-[12px] text-[#DB4444]" >${bestProd.price}</span>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>         

                <div className="w-[100%] border-b border-gray-200 mx-auto"></div>           
        </section>
    )
}
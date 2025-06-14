"use client"
import { cn } from "@/lib/utils";
import Container from "../Container";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import { Button, buttonVariants, size, orientation, className, canScrollNext, scrollNext, ...props } from "../ui/button";
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { products } from "@/data/produtos";
import Image from "next/image";
import Link from "next/link";

export default function FlashSales() {

    const orientation = "horizontal"; // ou "vertical"
    const canScrollNext = true; // ou lógica baseada em carousel
    const scrollNext = () => {
        alert("Avançar carrossel");
    };

    return (
        <section className=" px-32 mt-25 pt-25 flex flex-col gap-10 pb-15  mb-20" >
            <Container className="flex justify-between" >
                <h2 className="font-inter text-[36px]" >Flash Sales</h2>
                {/* <Container>
                    <Button 
                        data-slot="carousel-next"
                        variant="outline"
                        size="sm"
                        className="bg-blue-500 text-white p-4"
                        // className={cn("absolute size-8 rounded-full", orientation === "horizontal"
                        //     ? "top-1/2 -right-12 -translate-y-1/2"
                        //     : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", )}
                        disabled={!canScrollNext}
                        onClick={scrollNext}
                    
                    > <ArrowLeft /> <span className="sr-only">Next slide</span> </Button>
                    <Button
                        data-slot="carousel-next"
                        variant="outline"
                        size="sm"
                        className="bg-blue-500 text-white p-4"
                        // className={cn("absolute size-8 rounded-full", orientation === "horizontal"
                        //     ? "top-1/2 -right-12 -translate-y-1/2"
                        //     : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", )}
                        disabled={!canScrollNext}
                        onClick={scrollNext}
                        >
                        <ArrowRight />
                        <span className="sr-only">Next slide</span>
                    
                    </Button>
                </Container> */}
            </Container>

            <Container className=" flex " >
                <Carousel className="w-full"> 
                    <CarouselContent className=" ">
                        {products.map((product) => (
                        <CarouselItem key={product.id} className=" basis-[220px] grow-0 shrink-0 ">
                            <div className="  flex flex-col gap-4">
                                <Card className="rounded-none p-2 h-[200px] flex justify-center items-center bg-[#F5F5F5]" >
                                    <CardContent className=" p-0 ">

                                            <Image className="mx-auto" src={product.image} alt={product.name} width={152} height={172}  />                   
                                    </CardContent>
                                </Card>
                                <p className=" font-poppins text-[12px] text-black font-medium " >{product.name}</p>
                                <span className=" font-poppins text-[12px] text-[#DB4444]" >${product.price}</span>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </Container>
            <Container className="flex justify-center " >
                <Link href="/" className=" py-4 px-12 bg-[#DB4444] text-[#FAFAFA] font-poppins "  >View All Products</Link>
            </Container>

            <div className="w-[100%] border-b border-gray-200 mx-auto"></div>
        </section>
       
    )
}
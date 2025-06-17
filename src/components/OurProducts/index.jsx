"use client";
import Image from "next/image";
import Container from "../Container";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ourProducts } from "@/data/ourproducts";
import { Button } from "../ui/button";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OurProducts() {
    // return(
    //     // <section className=" mb-20 flex flex-col gap-14 px-32 " >
    //     //     <Container className="flex justify-between items-center" >
    //     //         <Container className=" flex  flex-col" >
    //     //                 <span className=" font-poppins text-[#DB4444] text-[16  px] font-semibold leading-5" >Our Products</span>
    //     //                 <h2 className="font-inter text-black font-semibold leading-12 text-4xl tracking-[4%]" >Explore Our Products</h2>
    //     //         </Container>

    //     //         <Button></Button>
                
    //     //         <Button></Button>
    //     //     </Container>

    //     //     <Carousel>
    //     //         <CarouselContent className=" ">
    //     //                     {ourProducts.map((products) => (
    //     //                     <CarouselItem key={products.id} className=" basis-[220px] grow-0 shrink-0 ">
    //     //                         <div className="  flex flex-col gap-4">
    //     //                             <Card className="rounded-none p-2 h-[200px] flex justify-center items-center bg-[#F5F5F5]" >
    //     //                                 <CardContent className=" p-0 ">

    //     //                                         <Image className="mx-auto" src={products.image} alt={products.name} width={152} height={172}  />                   
    //     //                                 </CardContent>
    //     //                             </Card>
    //     //                             <p className=" font-poppins text-[12px] text-black font-medium " >{products.name}</p>
    //     //                             <span className=" font-poppins text-[12px] text-[#DB4444]" >${products.price}</span>
    //     //                         </div>
    //     //                     </CarouselItem>
    //     //                     ))}
    //     //                 </CarouselContent>
    //     //             </Carousel>
    //     // </section>

        
    // )

    const [carouselApi, setCarouselApi] = useState(null);

  // Divide em grupos de 8 (2 fileiras de 4)
  const groupedProducts = [];
  for (let i = 0; i < ourProducts.length; i += 8) {
    groupedProducts.push(ourProducts.slice(i, i + 8));
  }

  return (
    <section className="mb-20 flex flex-col gap-14 px-32">
      <Container className="flex justify-between items-center">
        <Container className="flex flex-col">
          <span className="font-poppins text-[#DB4444] text-[16px] font-semibold leading-5">
            Our Products
          </span>
          <h2 className="font-inter text-black font-semibold leading-12 text-4xl tracking-[4%]">
            Explore Our Products
          </h2>
        </Container>

        <div className="flex gap-4">
          <Button variant="outline" size="icon" onClick={() => carouselApi?.scrollPrev()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => carouselApi?.scrollNext()}>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>

      <Carousel setApi={setCarouselApi}>
        <CarouselContent>
          {groupedProducts.map((group, index) => (
            <CarouselItem key={index} className="flex flex-col gap-5">
              <div className="grid grid-cols-4 gap-5">
                {group.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="grid grid-cols-4 gap-5">
                {group.slice(4, 8).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

            <Container className="flex justify-center " >
                <Link href="/" className=" py-4 px-12 bg-[#DB4444] text-[#FAFAFA] font-poppins "  >View All Products</Link>
            </Container>
    </section>
  );

}
// Componente para o card de produto
function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-4">
      <Card className="rounded-none p-2 h-[200px] flex justify-center items-center bg-[#F5F5F5]">
        <CardContent className="p-2">
            <div>
                <Image
            className="mx-auto"
            src={product.image}
            alt={product.name}
            width={152}
            height={132}
          />
            </div>
          
        </CardContent>
      </Card>
      <p className="font-poppins text-[12px] text-black font-medium">{product.name}</p>
      <span className="font-poppins text-[12px] text-[#DB4444]">${product.price}</span>
    </div>
  );
}
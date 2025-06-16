import Link from "next/link";
import Container from "../Container";

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
                    
        </section>
    )
}
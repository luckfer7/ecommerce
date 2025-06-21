import Image from "next/image";
import Container from "../Container";
import deliveryicon from "../../../public/icon-delivery.png"
import costumerServiceicon from "../../../public/icon-customer service.png"
import shieldIcon from "../../../public/shield-tick.png"

export default function Garanty() {
    return(
        <section className="px-50 py-20" >
            <Container className=" flex justify-between" >
                <Container className=" flex flex-col gap-5 items-center" >
                    <Container className=" p-2 rounded-[100%] bg-[#7D8184] " >
                        <Container className=" bg-black rounded-[100%] p-1.5" >
                            <Image src={deliveryicon} alt="icone de delivery" />
                        </Container>
                    </Container>

                    <Container className=" flex flex-col gap-1.5 items-center" >
                        <span className=" font-poppins text-[20px] font-semibold" >FREE AND FAST DELIVERY</span>
                        <span className=" font-poppins text-[14px] " >Free delivery for all orders over $140</span>
                    </Container>
                    
                </Container>

                <Container className=" flex flex-col gap-5 items-center" >
                    <Container className=" p-2 rounded-[100%] bg-[#7D8184] " >
                        <Container className=" bg-black rounded-[100%] p-1.5" >
                            <Image src={costumerServiceicon} alt="icone de delivery" />
                        </Container>
                    </Container>

                    <Container className=" flex flex-col gap-1.5 items-center" >
                        <span className=" font-poppins text-[20px] font-semibold" >24/7 CUSTOMER SERVICE</span>
                        <span className=" font-poppins text-[14px] " >Friendly 24/7 customer support</span>
                    </Container>
                    
                </Container>

                <Container className=" flex flex-col gap-5 items-center" >
                    <Container className=" p-2 rounded-[100%] bg-[#7D8184] " >
                        <Container className=" bg-black rounded-[100%] p-1.5" >
                            <Image src={shieldIcon} alt="icone de delivery" />
                        </Container>
                    </Container>

                    <Container className=" flex flex-col items-center gap-1.5" >
                        <span className=" font-poppins text-[20px] font-semibold" >MONEY BACK GUARANTEE</span>
                        <span className=" font-poppins text-[14px]" >We reurn money within 30 days</span>
                    </Container>
                    
                </Container>
            </Container>
        </section>
    )
}
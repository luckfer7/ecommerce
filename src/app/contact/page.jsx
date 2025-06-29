import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import IconPhone from "../../../public/icons-phone.png"
import IconMail from "../../../public/icons-mail.png"
import Button from "@/components/Button";

export default function ContactPage() {
    return(
        <main>
            <TopHeader />
            <Header />
            <section className=" px-40 py-45" >
                <Container className=" flex gap-7" >
                    <div className=" flex flex-col gap-8 inset-shadow-sm py-8 px-7 rounded-[4px]" >
                        <Container className=" flex flex-col gap-6" >
                            <div className=" flex items-center gap-4" >
                                <Image src={IconPhone} />
                                <span className=" font-poppins text-[16px] font-medium " >Call To Us</span>
                            </div>
                            <div className=" flex flex-col gap-4" >
                                <span className=" font-poppins text-[14px] " >We are available 24/7, 7 days a week.</span>
                                <span className=" font-poppins text-[14px] " >Phone: +8801611112222</span>
                            </div>
                            
                        </Container>

                        <div className=" border " ></div>

                        <Container className=" flex flex-col gap-6" >
                            <div className=" flex items-center gap-4" >
                                <Image src={IconMail} />
                                <span className=" font-poppins text-[16px] font-medium " >Write To US</span>
                            </div>
                            <div className=" flex flex-col gap-4" >
                                <span className=" font-poppins text-[14px] " >Fill out our form and we will contact you within 24 hours.</span>
                                <span className=" font-poppins text-[14px] " >Emails: customer@exclusive.com</span>
                                <span className=" font-poppins text-[14px] " >Emails: support@exclusive.com</span>
                            </div>
                            
                        </Container>
                        
                    </div>
                    <div className="  inset-shadow-sm py-8 px-7 rounded-[4px]" >
                        <form className=" flex flex-col gap-4 " action="">
                            <Container className=" flex gap-4 " >
                                <input className=" bg-[#F5F5F5] px-3 py-3 rounded-[4px] " placeholder=" Your Name " type="text" />
                                <input className=" bg-[#F5F5F5] px-3 py-3 rounded-[4px] " placeholder=" Your Email " type="text" />
                                <input className=" bg-[#F5F5F5] px-3 py-3 rounded-[4px] " placeholder=" Your Phone " type="text" />
                            </Container>

                            <Container className="" >
                                <textarea className="bg-[#F5F5F5] px-3 py-3 rounded-[4px] w-full h-40 resize-none" placeholder="Your Message" />    
                            </Container>

                            <Container className=" flex justify-end " >
                                <Button className=" text-[#FAFAFA] font-poppins font-medium text-[16px] px-12 py-4 rounded-[4px] bg-[#DB4444] cursor-pointer" >Send Massage</Button>
                            </Container>
                        </form>
                    </div>
                </Container>
            </section>
            <Footer />
        </main>
    )
}
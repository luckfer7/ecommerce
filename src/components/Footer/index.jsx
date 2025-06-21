import Image from "next/image";
import Container from "../Container";

import facebookIcon from "../../../public/Icon-Facebook.png";
import twitterIcon from "../../../public/Icon-Twitter.png";
import instagramIcon from "../../../public/icon-instagram.png";
import linkedinIcon from "../../../public/Icon-Linkedin.png";
import AppStore from "../../../public/app-store.png";
import googlePlay from "../../../public/googlePlay.png";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className=" bg-black px-20 pt-18 pb-40 " >
            <div className="flex justify-between " >
                <Container className="flex flex-col gap-4" >
                    <span className="font-Inter font-bold text-2xl text-[#FAFAFA] mb-1.5" >Exclusive</span>
                    <span className=" font-Poppins text-[20px] text-[#FAFAFA]" >Subscribe</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA] " >Get 10% off your first order</span>
                    <input className="border-gray-300 text-[#FAFAFA]" placeholder="Enter your email" />
                </Container>

                <Container className="flex flex-col gap-4" >
                    <span className=" font-Poppins text-[20px] text-[#FAFAFA] font-medium mb-1.5" >Support</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >exclusive@gmail.com</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >+88015-88888-9999</span>                    
                </Container>

                <Container className="flex flex-col gap-4" >
                    <span className=" font-Poppins text-[20px] text-[#FAFAFA] font-medium mb-1.5" >Account</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >My Account</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >Login / Register</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >Cart</span>                    
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >Wishlist</span>                    
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >Shop</span>                    
                </Container>

                <Container className="flex flex-col gap-4" >
                    <span className=" font-Poppins text-[20px] text-[#FAFAFA] font-medium mb-1.5" >Quick Link</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >Privacy Policy</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >Terms Of Use</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >FAQ</span>                    
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >Contact</span>                                   
                </Container>

                <Container className="flex flex-col gap-4" >
                    <span className=" font-Poppins text-[20px] text-[#FAFAFA] font-medium mb-1.5" >Download App</span>
                    <span className=" font-Poppins text-[16px] text-[#FAFAFA]" >Save $3 with App New User Only</span>
                    <Container className=" flex flex-col gap-2 " >
                        <Link href="/" >
                            <Image src={googlePlay} />
                        </Link>
                        <Link href="/" >
                            <Image  src={AppStore} />
                        </Link>
                    </Container>
                    <Container className=" flex justify-between" >
                        <Image src={facebookIcon} alt="icone do facebook" ></Image>
                        <Image src={twitterIcon} alt="icone do twitter" ></Image>
                        <Image src={instagramIcon} alt="icone do instagram" ></Image>
                        <Image src={linkedinIcon} alt="icone do linkedin" ></Image>
                    </Container>                                   
                </Container>
            </div>
        </footer>
    )
}
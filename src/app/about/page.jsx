import Footer from "@/components/Footer";
import Garanty from "@/components/Garanty-section";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";
import imagem from "../../../public/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
import Container from "@/components/Container";
import sellericon from "../../../public/seller-icon.png"
import IconSale from "../../../public/Icon-Sale.png"
import IconShopping from "../../../public/Icon-Shopping bag.png"
import Group from "../../../public/Group.png"
import TomCruise from "../../../public/tom cruise.png";
import EmmaWatson from "../../../public/emma watsom.png";
import WillSmith from "../../../public/will smith.png";
import Link from "next/link";
import twitterIcon from "../../../public/twitter-icon.png";
import instagramIcon from "../../../public/instagram-icon.png";
import linkedinIcon from "../../../public/linkedin-icon.png";


export default function AboutPage() {
    return (
        <div>
            <TopHeader />
            <Header />
            <main className=" flex flex-col gap-40 pt-20" >
                <section className=" flex justify-between" >
                    <div className=" flex flex-col justify-center max-w-[40%] mx-auto gap-10" >
                        <h3 className=" font-inter font-semibold text-5xl " >Our Story</h3>
                        <Container className=" flex flex-col gap-6 " >
                            <p className=" font-poppins text-[16px] " >Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p className=" font-poppins text-[16px] " >Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </Container>

                    </div>
                    <div>
                        <Image src={imagem} />
                    </div>
                </section>

                <section>
                    <div className=" flex gap-7 justify-center" >
                        <Container className=" flex flex-col gap-5 justify-center items-center border-2 rounded-[4px] w-[270px] h-[230px]" >
                            <Container className=" p-2 rounded-[100%] bg-[#7D8184] " >
                                <Container className=" bg-black rounded-[100%] p-2.5" >
                                    <Image src={sellericon} width={40} height={40} alt="icone de delivery" />
                                </Container>
                            </Container>

                            <Container className=" flex flex-col gap-1.5 items-center" >
                                <span className=" font-inter text-3xl font-bold" >10.5k</span>
                                <span className=" font-poppins text-[16px] " >Sallers active our site</span>
                            </Container>

                        </Container>

                        <Container className=" flex flex-col gap-5 justify-center items-center border-2 rounded-[4px] w-[270px] h-[230px]" >
                            <Container className=" p-2 rounded-[100%] bg-[#7D8184] " >
                                <Container className=" bg-black rounded-[100%] p-2.5" >
                                    <Image src={IconSale} width={40} height={40} alt="icone de delivery" />
                                </Container>
                            </Container>

                            <Container className=" flex flex-col gap-1.5 items-center" >
                                <span className=" font-inter text-3xl font-bold" >33k</span>
                                <span className=" font-poppins text-[16px] " >Mopnthly Produduct Sale</span>
                            </Container>

                        </Container>

                        <Container className=" flex flex-col gap-5 justify-center items-center border-2 rounded-[4px] w-[270px] h-[230px]" >
                            <Container className=" p-2 rounded-[100%] bg-[#7D8184] " >
                                <Container className=" bg-black rounded-[100%] p-2.5" >
                                    <Image src={IconShopping} width={40} height={40} alt="icone de delivery" />
                                </Container>
                            </Container>

                            <Container className=" flex flex-col gap-1.5 items-center" >
                                <span className=" font-inter text-3xl font-bold" >45.5k</span>
                                <span className=" font-poppins text-[16px] " >Customer active in our site</span>
                            </Container>

                        </Container>

                        <Container className=" flex flex-col gap-5 justify-center items-center border-2 rounded-[4px] w-[270px] h-[230px]" >
                            <Container className=" p-2 rounded-[100%] bg-[#7D8184] " >
                                <Container className=" bg-black rounded-[100%] p-2.5" >
                                    <Image src={Group} width={40} height={40} alt="icone de delivery" />
                                </Container>
                            </Container>

                            <Container className=" flex flex-col gap-1.5 items-center" >
                                <span className=" font-inter text-3xl font-bold" >25k</span>
                                <span className=" font-poppins text-[16px] " >Anual gross sale in our site</span>
                            </Container>

                        </Container>
                    </div>
                </section>

                <section>
                    <div className=" flex gap-8 justify-center" >
                        <div className=" flex flex-col gap-8" >
                            <Container className=" bg-[#F5F5F5] " >
                                <Image src={TomCruise} />
                            </Container>

                            <Container className=" flex flex-col gap-4 " >
                                <h4 className=" font-inter font-medium text-3xl" >Tom Cruise</h4>
                                <p className=" font-poppins text-[16px] " >Founder & Chairman</p>
                                <div className=" flex gap-4 items-center " >
                                    <Link href="/" >
                                        <Image src={twitterIcon} /> 
                                    </Link>
                                    <Link href="/" >
                                        <Image src={instagramIcon} /> 
                                    </Link>
                                    <Link href="/" >
                                        <Image src={linkedinIcon} /> 
                                    </Link>
                                </div>
                            </Container>
                        </div>

                        <div className=" flex flex-col gap-8" >
                            <Container className=" bg-[#F5F5F5] " >
                                <Image src={EmmaWatson} />
                            </Container>

                            <Container className=" flex flex-col gap-4 " >
                                <h4 className=" font-inter font-medium text-3xl" >Emma Watson</h4>
                                <p className=" font-poppins text-[16px] " >Managing Director</p>
                                <div className=" flex gap-4 items-center " >
                                    <Link href="/" >
                                        <Image src={twitterIcon} /> 
                                    </Link>
                                    <Link href="/" >
                                        <Image src={instagramIcon} /> 
                                    </Link>
                                    <Link href="/" >
                                        <Image src={linkedinIcon} /> 
                                    </Link>
                                </div>
                            </Container>
                        </div>

                        <div className=" flex flex-col gap-8" >
                            <Container className=" bg-[#F5F5F5] " >
                                <Image src={WillSmith} />
                            </Container>

                            <Container className=" flex flex-col gap-4 " >
                                <h4 className=" font-inter font-medium text-3xl" >Will Smith</h4>
                                <p className=" font-poppins text-[16px] " >Product Designer</p>
                                <div className=" flex gap-4 items-center " >
                                    <Link href="/" >
                                        <Image src={twitterIcon} /> 
                                    </Link>
                                    <Link href="/" >
                                        <Image src={instagramIcon} /> 
                                    </Link>
                                    <Link href="/" >
                                        <Image src={linkedinIcon} /> 
                                    </Link>
                                </div>
                            </Container>
                        </div>   
                    </div>
                </section>
            <Garanty />
            <Footer />
            </main>
            
        </div>
    )
}
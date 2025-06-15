import Image from "next/image";
import Container from "../Container";
import phone from "../../../public/phone.png";
import computers from "../../../public/computer.png";
import smartwatch from "../../../public/smartwatch.png";
import camera from "../../../public/camera.png";
import headphone from "../../../public/headphone.png";
import gamepad from "../../../public/gamepad.png";
import Link from "next/link";

export default function Categories() {
    return (
        <section className=" mb-20 flex flex-col gap-14 px-32 " >
            <Container className=" flex  flex-col" >
                <span className=" font-poppins text-[#DB4444] text-[16  px] font-semibold leading-5" >Categories</span>
                <h2 className="font-inter text-black font-semibold leading-12 text-4xl tracking-[4%]" >Browse By Category</h2>
            </Container>

            <Container className=" flex gap-8 " >
                <Link href="/" className="flex flex-col justify-center items-center rounded-sm border-2 w-1/6 py-6 hover:bg-[#DB4444] " >
                    <Image src={phone} alt="imagem de um smartphone"></Image>
                    <span className=" font-poppins  " >Phones</span>
                </Link>
                <Link href="/" className="flex flex-col justify-center items-center rounded-sm border-2 w-1/6 py-6 hover:bg-[#DB4444] " >
                    <Image src={computers} alt="imagem de um computador"></Image>
                    <span className=" font-poppins  " >Computers</span>
                </Link>
                <Link href="/" className="flex flex-col justify-center items-center rounded-sm border-2 w-1/6 py-6 hover:bg-[#DB4444]" >
                    <Image src={smartwatch} alt="imagem de um smartwatch"></Image>
                    <span className=" font-poppins  " >SmartWatch</span>
                </Link>
                <Link href="/" className="flex flex-col justify-center items-center rounded-sm border-2 w-1/6 py-6 hover:bg-[#DB4444]" >
                    <Image src={camera} alt="imagem de uma camera"></Image>
                    <span className=" font-poppins  " >Camera</span>
                </Link>
                <Link href="/" className="flex flex-col justify-center items-center rounded-sm border-2 w-1/6 py-6 hover:bg-[#DB4444]" >
                    <Image src={headphone} alt="imagem de um headphone" ></Image>
                    <span className=" font-poppins  " >HeadPhones</span>
                </Link>
                <Link href="/" className="flex flex-col justify-center items-center rounded-sm border-2 w-1/6 py-6 hover:bg-[#DB4444]" >
                    <Image src={gamepad} alt="imagem de um gamepad" ></Image>
                    <span className=" font-poppins  " >Gaming</span>
                </Link>

            </Container>
            <div className="w-[100%] border-b border-gray-200 mx-auto"></div>
            
        </section>
    )
}
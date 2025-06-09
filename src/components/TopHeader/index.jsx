import Link from "next/link";


export default function TopHeader() {
    return (
        <div className=" bg-black flex justify-center py-4" >
            <p className=" text-[#FAFAFA] font-raleway " >Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p> 
            <Link className=" font-semibold underline text-[#FAFAFA] font-raleway ml-2 " href="/" >ShopNow</Link> 
        </div>
    )
}
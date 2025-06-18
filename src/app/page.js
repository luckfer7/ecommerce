import Bestselling from "@/components/BestSelling";
import Categories from "@/components/Categories";
import FlashSales from "@/components/FlashSales";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import NewArrival from "@/components/New-arrival";
import OurProducts from "@/components/OurProducts";
import Promotion from "@/components/Promotion";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <TopHeader />
      <Header />
      <HomePage />
      <FlashSales />
      <Categories />
      <Bestselling />
      <Promotion />
      <OurProducts />
      <NewArrival />
    </div>
  );
}

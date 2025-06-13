import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import TopHeader from "@/components/TopHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <TopHeader />
      <Header />
      <HomePage />
    </div>
  );
}

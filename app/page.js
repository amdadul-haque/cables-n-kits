import CableLabeling from "@/components/CableLabeling";
import Care from "@/components/Care";
import CustomKitting from "@/components/CustomKitting";
import CustomServices from "@/components/CustomServices";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TwistRemoval from "@/components/TwistRemoval";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CustomServices />
      <Care />
      <CableLabeling />
      <CustomKitting />
      <TwistRemoval />
    </>
  );
}

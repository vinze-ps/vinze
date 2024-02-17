import Link from "next/link";
import Image from "next/image";
// import Programmer from "@/lib/assets/img/programmer.png";

export default function Home() {
  return (
    <main>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl lg:mt-12 mb-4">Hello.</h1>
      <p className="text-md text-muted-foreground">
        My name is Patryk. I am programmer since 2018. In 2021 I started working as a programmer at
        <a href="https://www.p88.pl" target="_blank" className="text-blue-500">
          {" "}
          Personal&apos;88
        </a>
        . At the same time I started working at{" "}
        <a href="https://softwarelogic.co/" target="_blank" className="text-blue-500">
          {" "}
          Softwarelogic
        </a>
        . Basically I am a fullstack developer, but I am more focused on frontend. I am also a student of Computer
        Science at the Zachodniopomorski Uniwersytet Szczeciński.
      </p>
      {/* <Image src={Programmer} alt="" width={400} height={400} /> */}
    </main>
  );
}

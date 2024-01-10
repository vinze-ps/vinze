import Link from "next/link";
import styles from "@/app/page.module.scss";
import Logo from "@/components/SVG/Logo.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">VINZE</h1> */}
      <Logo className={styles["path"]} />
      {/* <Link className="mt-3" href="/admin">
        Admin
      </Link> */}
    </main>
  );
}

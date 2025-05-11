import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="rounded-2 row-start-2 flex flex-col items-center gap-[32px] text-white sm:items-start min-h-screen overflow-hidden">
      <Link href="" className={buttonVariants()}>
        Click me!!
      </Link>
    </main>
  );
}

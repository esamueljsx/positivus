import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="rounded-2 row-start-2 flex min-h-screen flex-col items-center gap-[32px] overflow-hidden text-white sm:items-start">
      <Link href="" className={buttonVariants()}>
        Click me!!
      </Link>
    </main>
  );
}

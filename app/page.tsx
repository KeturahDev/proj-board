import Link from "next/link";

export default function Home() {
  return (
    <div className="m-10 my-20 flex flex-col justify-center">
      <Link href="/projects">All Projects</Link>
    </div>
  );
}

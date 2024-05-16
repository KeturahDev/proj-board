import next from "next";
import ProjCard from "./components/ProjCard";
import fakeData from "./util/project";

export default function Home() {
  return (
    <main className="m-10 my-20 flex flex-col justify-center">
      <h1 className="font-bold">Proj Board</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {fakeData.map(async (p, i) => {
          const res = await fetch(p.img, { cache: "no-store" });
          const json = await res.json();
          return (
            <ProjCard
              key={i}
              title={p.title}
              img={json.errors ? "" : json[0].url}
            />
          );
        })}
      </div>
    </main>
  );
}

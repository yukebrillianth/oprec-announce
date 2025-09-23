import { InputNRP } from "./containers/input-nrp";

export default function Home() {
  return (
    <div className="bg-paper relative font-sans items-center justify-items-center min-h-screen gap-16">
      <main className="flex flex-col h-full min-h-screen gap-[32px] row-start-2 items-center sm:items-start">
        <InputNRP />
      </main>
    </div>
  );
}

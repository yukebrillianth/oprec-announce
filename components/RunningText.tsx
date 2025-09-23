import clsxm from "@/lib/clsxm";

export default function RunningText({ className }: { className?: string }) {
  return (
    <div
      className={clsxm(
        "inline-flex w-screen max-md:h-10 h-20 bg-gradient-blue-turquoise flex-nowrap overflow-hidden",
        className
      )}
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll max-md:text-xl text-4xl font-extrabold italic">
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll max-md:text-xl text-4xl font-extrabold italic"
        aria-hidden="true"
      >
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
        <li>&quot;</li>
        <li>ANNOUNCEMENT</li>
      </ul>
    </div>
  );
}

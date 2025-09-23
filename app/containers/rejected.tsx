/* eslint-disable @typescript-eslint/no-explicit-any */
import NextImage from "@/components/NextImage";
import { Participant } from "@/types/participant";

const RejectedPage = ({ userData }: { userData: Participant }) => {
  if (typeof window !== "undefined") {
    const w = window as any;
    if (!w.__rejectedAudioPlayed) {
      w.__rejectedAudioPlayed = true;
      const audio = new Audio("/rejected.mp3");
      audio.play().catch(() => {});
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full px-5 [@media(max-height:800px)]:pb-96">
      <NextImage
        src="/header-red.svg"
        alt={userData.name}
        width={3000}
        height={3000}
        className="w-full absolute top-0 rounded-full"
      />
      <NextImage
        src="/sad1.png"
        alt={userData.name}
        width={550}
        height={700}
        className="w-full absolute bottom-0 left-0 max-lg:w-[60%]"
      />

      <NextImage
        src="/sad2.png"
        alt="Robot iris"
        width={450}
        height={700}
        className="absolute bottom-0 right-0 z-10 max-md:w-[50%]"
      />
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
        <h1 className="max-sm:text-3xl max-md:text-4xl max-lg:text-5xl text-[50px] font-extrabold text-center italic text-primary">
          WE APPRECIATE YOUR EFFORTS!
        </h1>
        <div className="flex flex-col gap-1.5 items-center mt-9 text-primary text-3xl font-semibold">
          {userData.name.toWellFormed()} - {userData.nrp}
          <span className="text-gradient-blue-turquoise font-bold">
            {userData.division.toUpperCase()}
          </span>
        </div>
        <div
          className="px-7 mt-9 py-1.5 rounded-lg inline-flex justify-center items-center gap-2.5"
          style={{
            background: "linear-gradient(90deg, #4A1D1D 0%, #F14343 145.49%)",
          }}
        >
          <div className="justify-start text-white max-sm:text-4xl text-5xl font-bold">
            NOT PASSED
          </div>
        </div>
        <div className="w-full md:max-w-[90%] italic text-center justify-start text-primary max-sm:text-base text-lg font-semibold leading-snug mt-6">
          Unfortunately, you were not selected to move forward this time. We
          truly appreciate the effort and dedication you’ve shown. Every step is
          a chance to grow, so keep building your skills and don’t hesitate to
          try again in the future!
        </div>
      </div>
    </div>
  );
};

export default RejectedPage;

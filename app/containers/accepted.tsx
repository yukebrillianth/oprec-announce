import NextImage from "@/components/NextImage";
import { Participant } from "@/types/participant";

const AcceptedPage = ({ userData }: { userData: Participant }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full px-5">
      <NextImage
        src="/header.svg"
        alt={userData.name}
        width={3000}
        height={3000}
        className="w-full absolute top-0 rounded-full"
      />
      <NextImage
        src="/robot3.png"
        alt={userData.name}
        width={400.139}
        height={800.423}
        className="w-full absolute bottom-0 left-0 max-lg:w-[40%]"
      />

      <NextImage
        src="/robot1.png"
        alt="Robot iris"
        width={163}
        height={280}
        className="absolute bottom-0 right-0 z-10 max-md:w-[20%]"
      />
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
        <h1 className="max-sm:text-3xl max-md:text-4xl max-lg:text-5xl text-[64px] font-extrabold text-center italic text-primary">
          CONGRATULATIONS!
        </h1>
        <div className="flex flex-col gap-1.5 items-center mt-9 text-primary max-sm:text-2xl text-3xl font-semibold">
          {userData.name.toWellFormed()} - {userData.nrp}
          <span className="text-gradient-blue-turquoise font-bold">
            {userData.division.toUpperCase()}
          </span>
        </div>
        <div className="px-7 mt-9 py-1.5 bg-[linear-gradient(90deg,#141532_0%,#4392F1_145.49%)] rounded-lg inline-flex justify-center items-center gap-2.5">
          <div className="justify-start text-gradient-white-blue max-sm:text-4xl text-5xl font-bold">
            You’ve passed
          </div>
        </div>
        <div className="w-full md:max-w-[60%] italic text-center justify-start text-primary max-sm:text-base text-lg font-semibold leading-snug mt-6">
          the interview stages and are now invited to join the internship
          program. Stay tuned for the next steps!
        </div>

        <div className="flex max-sm:flex-col gap-2 mt-6">
          <a
            href="https://bit.ly/IRISInternNextGen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer gap-2 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2 max-sm:w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              WhatsApp Group
            </button>
          </a>
          <a
            href="https://bit.ly/IRISInternNextGen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer gap-2 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2 max-sm:w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              +6289649208124 (cp)
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AcceptedPage;

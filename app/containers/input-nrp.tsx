"use client";

import Button from "@/components/button";
import Input from "@/components/Input";
import NextImage from "@/components/NextImage";
import { participants } from "@/data/participants";
import { Participant } from "@/types/participant";
import { CircleArrowRight } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import RunningText from "../../components/RunningText";
import AcceptedPage from "./accepted";
import RejectedPage from "./rejected";

export const InputNRP = () => {
  const methods = useForm<{ nrp: string }>();
  const { handleSubmit } = methods;
  const [resultPage, setResultPage] = useState<
    "input" | "accepted" | "rejected"
  >("input");
  const [userData, setUserData] = useState<Participant | null>(null);

  const onSubmit = (data: { nrp: string }) => {
    const { nrp } = data;
    // Check NRP in participants data
    const participant = participants.find((p) => p.nrp === nrp);

    if (participant) {
      setUserData(participant);
      if (participant.isAccepted) {
        setResultPage("accepted");
      } else {
        setResultPage("rejected");
      }
    } else {
      setUserData(null);
      // If NRP is found, show accepted or rejected page based on status
      // If NRP is not found, show error message
      toast.error("NRP not found!", { duration: 4000 });
    }
  };

  if (userData && resultPage === "accepted") {
    return <AcceptedPage userData={userData} />;
  } else if (userData && resultPage === "rejected") {
    return <RejectedPage userData={userData} />;
  }

  return (
    <div className="flex flex-col items-center [@media(max-height:800px)]:pb-48">
      <RunningText className="mt-5" />

      <div className="flex flex-col items-center w-full mt-32">
        <h1 className="max-md:text-2xl text-4xl font-extrabold text-center italic text-primary">
          ANNOUNCEMENT!
        </h1>
        <div className="h-fit mt-3 px-7 py-[4.5px] bg-gradient-blue-dark shadow-[0px_3.5612902641296387px_3.5612902641296387px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5">
          <div className="justify-start text-white max-md:text-2xl text-center text-5xl font-extrabold [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">
            THE NEXT GENERATION
          </div>
        </div>
        <div className="self-stretch text-center justify-start mt-5">
          <span className="text-primary max-md:text-[18px] text-[22px] font-semibold">
            Intern Phase{" "}
          </span>
          <span className="text-gradient-blue-green max-md:text-[18px] text-[22px]  font-semibold">
            IRIS TEAM
          </span>
        </div>

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-16 mb-16 max-[350px]:mt-4 min-[900px]:mb-20 w-full px-5 md:max-w-[90%] xl:max-w-[40%] z-[101]"
          >
            <div className="flex gap-2 max-md:flex-col z-[101]">
              <Input
                id="nrp"
                label="Enter NRP"
                placeholder="Example: 5026231000"
                className="py-[15px] z-[101]"
                validation={{
                  required: "NRP cannot be empty!",
                  pattern: {
                    value: /^(50|20)\d{2}(23|24)1\d{3}$/,
                    message: "Please enter a valid NRP!",
                  },
                }}
              />
              <Button
                type="submit"
                variant="primary"
                size="large"
                className="whitespace-nowrap max-md:w-full h-fit z-50 md:mt-8"
              >
                View Result
                <CircleArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>

      {/* Floating icons */}
      <NextImage
        src="/icon1.png"
        alt="Floating icon"
        width={120}
        height={120}
        className="absolute top-1/2 left-[20%] animate-float animate-delay-500 max-xl:hidden"
      />
      <NextImage
        src="/icon2.png"
        alt="Floating icon"
        width={110}
        height={110}
        className="absolute top-[18%] left-[28%] animate-float max-xl:hidden"
      />
      <NextImage
        src="/icon3.png"
        alt="Floating icon"
        width={138.966}
        height={104.86}
        className="absolute top-[18%] right-[24%] animate-float animate-delay-200 max-xl:hidden"
      />
      <NextImage
        src="/icon4.png"
        alt="Floating icon"
        width={120}
        height={120}
        className="absolute top-[47%] right-[18%] animate-float animate-delay-500 max-xl:hidden"
      />

      {/* Footer images */}
      <NextImage
        src="/robot2.png"
        alt="IRIS robot"
        width={260}
        height={280}
        className="absolute bottom-0 left-0 z-10 max-md:w-[30%]"
      />
      <NextImage
        src="/robot1.png"
        alt="IRIS robot"
        width={163}
        height={280}
        className="absolute bottom-0 right-0 z-10 max-md:w-[20%]"
      />

      <NextImage
        src="/paper.png"
        alt="IRIS robot"
        width={3000}
        height={165.819}
        className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 z-0"
      />
    </div>
  );
};

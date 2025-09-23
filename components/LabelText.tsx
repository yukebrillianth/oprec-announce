import { ReactNode } from "react";

import clsxm from "@/lib/clsxm";

export default function LabelText({
  children,
  labelTextClasname,
  required,
}: {
  children: ReactNode;
  labelTextClasname?: string;
  required?: boolean;
}) {
  return (
    <label>
      <p
        className={clsxm(
          "text-primary font-bold text-[20px] leading-[24px] max-md:text-[18px] max-md:leading-[24px]",
          labelTextClasname
        )}
      >
        {children} {required && <span className="text-red-500">*</span>}
      </p>
    </label>
  );
}

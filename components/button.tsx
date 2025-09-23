import { Slot } from "@radix-ui/react-slot";
import { LoaderCircle, LucideProps } from "lucide-react";
import * as React from "react";
type LucideIconType = React.ComponentType<LucideProps>;

import clsxm from "@/lib/clsxm";

const ButtonVariant = [
  "primary",
  "danger",
  "warning",
  "success",
  "orange",
  "pink",
  "cyan",
  "green",
  "purple",
  "disabled",
] as const;

const ButtonSize = ["small", "medium", "large"] as const;

type ButtonOutlined = "base" | "outlined";

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: LucideIconType;
  rightIcon?: LucideIconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  outlined?: ButtonOutlined;
  asChild?: boolean;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      size = "medium",
      outlined = "base",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      asChild = false,
      type = "button",
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type={type}
        disabled={disabled}
        className={clsxm(
          "inline-flex items-center justify-center font-medium",
          "focus:outline-none focus-visible:ring",
          "shadow-sm",
          "duration-50 transition-colors cursor-pointer",
          //#region  //*=========== Size ===========
          [
            size === "large" && [
              "min-h-fit rounded-md px-7 py-3",
              "text-[16px] leading-[24px]",
              "max-md:text-[14px] max-md:leading-[18px]",
            ],
            size === "medium" && [
              "min-h-fit rounded-md px-5 py-2",
              "text-[14px] leading-[18px]",
              "max-md:text-[12px] max-md:leading-[16px]",
            ],
            size === "small" && [
              "min-h-fit rounded-sm px-4 py-1",
              "text-[12px] leading-[16px]",
              "max-md:text-[10px] max-md:leading-[14 px]",
            ],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === "primary" && [
              outlined === "base" && [
                "bg-primary text-white",
                "border border-primary hover:border-primary/80",
                "hover:bg-primary/80 hover:text-white",
                "active:bg-primary/80",
                "disabled:bg-primary/80",
                "focus-visible:ring-primary/80",
              ],
              outlined === "outlined" && [
                "border border-primary bg-primary/0 text-primary",
                "hover:border-primary/80 hover:text-primary/80",
                "active:text-primary/80",
                "disabled:text-primary/80",
                "focus-visible:ring-primary/80",
              ],
            ],

            // disabled bisa diatur2 lagi
            variant === "disabled" && [
              "bg-neutral-20 text-neutral-70",
              "shadow-none",
              outlined === "outlined" &&
                "border border-neutral-20 bg-neutral-50/0 text-neutral-70",
            ],

            // variant === 'outline' && [
            //   'text-black',
            //   'border border-gray-300',
            //   'hover:bg-slate-200 focus-visible:ring-gray-400 active:bg-slate-500 disabled:bg-slate-500',
            // ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className
        )}
        {...rest}
      >
        <div className="flex items-center">
          {isLoading && (
            <div
              className={clsxm(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                {
                  "text-white": [
                    "green",
                    "red",
                    "yellow",
                    "primary",
                    "danger",
                    "success",
                    "warning",
                    "orange",
                    "pink",
                    "purple",
                  ].includes(variant),
                  "text-neutral-70": outlined === "outlined",
                }
              )}
            >
              <LoaderCircle size={18} className="animate-spin" />
            </div>
          )}
          {LeftIcon && (
            <div
              className={clsxm([
                size === "large" && "mr-3",
                size === "medium" && "mr-2",
                size === "small" && "mr-2",
              ])}
            >
              <LeftIcon
                size="1em"
                className={clsxm("text-base", leftIconClassName)}
              />
            </div>
          )}
          {children}
          {RightIcon && (
            <div
              className={clsxm([
                size === "large" && "ml-3",
                size === "medium" && "ml-2",
                size === "small" && "ml-2",
              ])}
            >
              <RightIcon
                size="1em"
                className={clsxm("text-base", rightIconClassName)}
              />
            </div>
          )}
        </div>
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;

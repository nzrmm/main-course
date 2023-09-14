import { ComponentProps } from "react";
import { cn } from "@/utils/style";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "w-full flex justify-center font-normal rounded-md",
  {
    variants: {
      size: {
        sm: "px-6 py-2 text-sm",
      },
      variant: {
        primary: ["text-white border border-teal-500 bg-teal-500"],
        outline: ["border border-teal-500"],
      },
    },
    defaultVariants: {
      size: "sm",
      variant: "primary",
    },
  }
);

type IButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = ({
  size,
  variant,
  className,
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

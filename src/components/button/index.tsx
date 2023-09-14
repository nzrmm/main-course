import { ComponentProps } from "react";
import { cn } from "@/utils/style";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva("font-normal rounded-md", {
  variants: {
    size: {
      sm: "px-6 py-2 text-sm",
    },
    variant: {
      outline: ["border border-blue-500 hover:bg-blue-500 hover:text-white"],
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

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

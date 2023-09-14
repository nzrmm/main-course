import { ComponentProps } from "react";
import { cn } from "@/utils/style";
import { cva, type VariantProps } from "class-variance-authority";

const textInputVariants = cva(
  "w-full rounded-lg focus:outline-none px-2 py-1.5 border",
  {
    variants: {
      variant: {
        outline: [
          "border-neutral-200 focus:ring-1 focus:ring-neutral-300 text-sm placeholder:text-sm",
        ],
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

type ITextInputProps = {
  wrapperClassName?: string;
} & ComponentProps<"input"> &
  VariantProps<typeof textInputVariants>;

const TextInput = ({
  variant,
  className,
  wrapperClassName,
  ...props
}: ITextInputProps) => {
  return (
    <div className={cn("w-full", wrapperClassName)}>
      <input
        className={cn(textInputVariants({ variant, className }))}
        {...props}
      />
    </div>
  );
};

export default TextInput;

import { cn } from "@/utils/style";

type ICounterProps = {
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const Counter = ({ counter, onIncrement, onDecrement }: ICounterProps) => {
  return (
    <div className={cn("flex items-end")}>
      <div
        className={cn(
          "w-5 h-5 bg-teal-500 rounded-sm text-white",
          "flex items-center justify-center"
        )}
        onClick={onDecrement}
      >
        -
      </div>
      <span className={"w-10 text-center text-sm"}>{counter}</span>
      <div
        className={cn(
          "w-5 h-5 bg-teal-500 rounded-sm text-white",
          "flex items-center justify-center"
        )}
        onClick={onIncrement}
      >
        +
      </div>
    </div>
  );
};

export default Counter;

import { Counter, TextInput } from "@/components";
import { cn } from "@/utils/style";

const FoodSmallCard = () => {
  return (
    <div className={cn("w-full")}>
      <div className={cn("flex gap-4 mb-2")}>
        <img
          src={"https://tes-mobile.landa.id/img/chicken-katsu.png"}
          alt="demo-image"
          className={cn(
            "w-20 h-20 object-cover border border-neutral-200 rounded-md"
          )}
        />
        <div className={cn("w-full flex justify-between py-2")}>
          <div>
            <p className={cn("font-medium")}>Dark chocolate</p>
            <p className={cn("text-sm font-medium text-teal-500 mb-2")}>
              10000
            </p>
            <p className={cn("text-xs text-neutral-500")}>Notes</p>
          </div>

          <Counter counter={1} onIncrement={() => {}} onDecrement={() => {}} />
        </div>
      </div>

      <TextInput type="text" placeholder="Masukkan catatan disini" />
    </div>
  );
};

export default FoodSmallCard;

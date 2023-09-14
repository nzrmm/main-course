import { Counter, TextInput } from "@/components";
import { cn } from "@/utils/style";
import { IFoodType } from "@/types/food";

type IFoodCardProps = {
  totalItem: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChangeNote: (event: any) => void;
} & IFoodType;

const FoodSmallCard = ({ nama, harga, gambar, ...props }: IFoodCardProps) => {
  return (
    <div className={cn("w-full")}>
      <div className={cn("flex gap-4 mb-2")}>
        <img
          src={gambar}
          alt="demo-image"
          className={cn(
            "w-20 h-20 object-cover border border-neutral-200 rounded-md"
          )}
        />
        <div className={cn("w-full flex justify-between py-2")}>
          <div>
            <p className={cn("font-medium")}>{nama}</p>
            <p className={cn("text-sm font-medium text-teal-500 mb-2")}>
              {harga}
            </p>
            <p className={cn("text-xs text-neutral-500")}>
              Note: {props?.note || "-"}
            </p>
          </div>

          <Counter
            counter={props.totalItem}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
          />
        </div>
      </div>

      <TextInput
        type="text"
        placeholder="Masukkan catatan disini"
        value={props.note}
        onChange={(event) => props.onChangeNote(event)}
      />
    </div>
  );
};

export default FoodSmallCard;

import { Button } from "@/components";
import { cn } from "@/utils/style";

import { IFoodType } from "@/types/food";

type IFoodCardProps = {
  onAddToCart: () => void;
} & IFoodType;

const FoodCard = ({ nama, harga, gambar, onAddToCart }: IFoodCardProps) => {
  return (
    <div className={cn("w-full bg-white rounded-md p-4")}>
      <img
        src={gambar}
        alt={`${nama}-image`}
        className={cn("w-full h-40 object-cover mb-4")}
      />

      <div>
        <div className={cn("mb-4")}>
          <p className={cn("font-medium")}>{nama}</p>
          <p className={cn("font-medium text-teal-500")}>{harga}</p>
        </div>
        <Button
          id={`add-to-cart-button`}
          size="sm"
          className={cn("flex items-center gap-1")}
          onClick={() => onAddToCart()}
        >
          + Tambahkan ke Keranjang
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;

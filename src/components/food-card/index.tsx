import { Button } from "@/components";
import { cn } from "@/utils/style";

const FoodCard = () => {
  return (
    <div className={cn("w-full bg-white rounded-md p-4")}>
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/c8/85/66/caption.jpg?w=1200&h=1200&s=1"
        alt="demo-image"
        className={cn("w-full h-40 object-cover mb-4")}
      />

      <div>
        <div className={cn("mb-4")}>
          <p className={cn("font-medium")}>Nasi Rawon</p>
          <p className={cn("font-medium text-teal-500")}>Rp. 10.000</p>
        </div>
        <Button
          id={`add-to-cart-button`}
          size="sm"
          className={cn("flex items-center gap-1")}
        >
          + Tambahkan ke Keranjang
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;

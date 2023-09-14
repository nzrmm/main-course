import { BsFillCartFill } from "react-icons/bs";

import { Button, FoodCart } from "@/components";
import { cn } from "@/utils/style";

const App = () => {
  return (
    <div className={"antialiased min-h-screen bg-neutral-200 p-8"}>
      <div className={cn("flex justify-between items-center mb-8")}>
        <p className={cn("text-lg font-semibold")}>Main Course</p>
        <div className={cn("relative")}>
          <Button
            id={`cart-button`}
            size="sm"
            variant="outline"
            className={cn("flex items-center gap-2")}
          >
            <BsFillCartFill color={"#14b8a6"} />
            Keranjang
          </Button>

          <div
            className={cn(
              "flex items-center justify-center absolute -top-2 -right-2",
              "w-5 h-5 text-xs bg-rose-500 text-white rounded-full"
            )}
          >
            1
          </div>
        </div>
      </div>

      <div className={cn("grid grid-cols-6 gap-x-4 gap-y-6")}>
        <FoodCart />
      </div>
    </div>
  );
};

export default App;

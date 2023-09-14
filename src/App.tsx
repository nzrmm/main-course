import { useState, useEffect } from "react";
import { BsFillCartFill } from "react-icons/bs";

import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { getListFood } from "@/stores/food/foodSlice";
import {
  Button,
  FoodCart,
  Modal,
  TextInput,
  FoodSmallCard,
} from "@/components";
import { cn } from "@/utils/style";
import { IFoodType } from "@/types/food";

const App = () => {
  const dispatch = useAppDispatch();
  const { foods } = useAppSelector((state) => state.food);

  const [isOpen, setIsOpen] = useState(false);

  const handleGetListFood = () => {
    dispatch(getListFood());
  };

  useEffect(() => {
    handleGetListFood();
  }, []);

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
            onClick={() => setIsOpen(true)}
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
        {foods?.data?.map((food: IFoodType) => (
          <FoodCart key={food?.id} {...food} />
        ))}
      </div>

      <Modal
        title="Main Course"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className={cn("flex flex-col overflow-auto")}>
          <div className={cn("flex flex-col gap-4")}>
            <FoodSmallCard />
            <FoodSmallCard />
            <FoodSmallCard />
            <FoodSmallCard />
          </div>

          <hr className={cn("my-8")} />

          <div>
            <label
              htmlFor="voucher-input"
              className={cn("text-sm text-black/80")}
            >
              Tambah Voucher
            </label>
            <TextInput
              id="voucher-input"
              type="text"
              placeholder="Masukkan vouchermu disini.."
              className={cn("mt-1")}
            />
          </div>

          <hr className={cn("my-8")} />

          <div className={cn("w-full mb-4")}>
            <div
              className={cn(
                "bg-neutral-200 px-4 py-3 rounded-md text-sm",
                "flex justify-between items-center mb-4"
              )}
            >
              <p>Total</p>
              <p>30000</p>
            </div>

            <Button id={`order-button`} size="sm" onClick={() => {}}>
              Buat Pesanan
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;

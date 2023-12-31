import { useState, useEffect } from "react";
import { BsFillCartFill } from "react-icons/bs";

import {
  Button,
  FoodCart,
  Modal,
  TextInput,
  FoodSmallCard,
} from "@/components";

import { cn } from "@/utils/style";
import useHome from "@/routes/home/useHome";
import { IFoodResponseType } from "@/types/food";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");

  const {
    data: { cart, foods, order },
    method: {
      handleAddToCart,
      handleOrderFood,
      handleGetVoucher,
      handleGetListFood,
      handleOnDecrement,
      handleOnIncrement,
      handleSetNoteInItem,
    },
  } = useHome();

  useEffect(() => {
    handleGetListFood();
  }, []);

  return (
    <>
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
            {cart.items.length}
          </div>
        </div>
      </div>

      <div className={cn("grid grid-cols-6 gap-x-4 gap-y-6")}>
        {foods?.data?.map((food: IFoodResponseType) => (
          <FoodCart
            key={food?.id}
            onAddToCart={() => handleAddToCart(food)}
            {...food}
          />
        ))}
      </div>

      <Modal
        title="Main Course"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className={cn("flex flex-col overflow-auto")}>
          <div className={cn("flex flex-col gap-4")}>
            {cart.items.map((item: any) => (
              <FoodSmallCard
                key={item?.id}
                onIncrement={() => handleOnIncrement(item.id)}
                onDecrement={() => handleOnDecrement(item.id)}
                onChangeNote={({ target }) =>
                  handleSetNoteInItem(item.id, target.value)
                }
                {...item}
              />
            ))}
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
              value={voucherCode}
              onChange={({ target }) => setVoucherCode(target.value)}
              onKeyDown={({ key }) => {
                if (key === "Enter") {
                  handleGetVoucher(voucherCode);
                }
              }}
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
              <p>{cart.totalOrder}</p>
            </div>

            <Button
              id={"order-button"}
              size="sm"
              onClick={() => handleOrderFood()}
            >
              {order.isLoading ? "Loading..." : "Buat Pesanan"}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;

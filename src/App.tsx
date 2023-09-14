import { Button } from "@/components";
import { cn } from "@/utils/style";

const App = () => {
  return (
    <div className={"min-h-screen bg-neutral-200 p-8"}>
      <div className={cn("flex justify-between items-center")}>
        <p className={cn("text-lg font-semibold")}>Main Course</p>
        <Button
          id={`cart-button`}
          size="sm"
          variant="outline"
          className={cn("flex items-center gap-2")}
        >
          Keranjang
        </Button>
      </div>
    </div>
  );
};

export default App;

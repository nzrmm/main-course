import { Home } from "@/routes";
import { cn } from "@/utils/style";

const App = () => {
  return (
    <div className={cn("antialiased bg-neutral-200")}>
      <div className={"max-w-[1440px] mx-auto min-h-screen p-8"}>
        <Home />
      </div>
    </div>
  );
};

export default App;

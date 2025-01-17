import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Orders = ({}) => {
  return (
    <section
      id="orders"
      className="flex w-full flex-col items-center justify-center gap-4 bg-[#080808]"
      style={{
        backgroundImage: `url('/images/home/order-online.svg')`,
        backgroundPosition: "bottom right",
        backgroundSize: "contain,",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex w-full max-w-[1300px] flex-col gap-3 px-3 py-12 md:flex-row md:px-0 md:py-24"
        style={{
          backgroundImage: `url('/images/home/order.png')`,
          backgroundPosition: "top right",
          backgroundSize: "auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex w-full flex-col items-start justify-start gap-8 md:w-1/2">
          <p className="font-jakarta uppercase text-[#FCB017]">ONLINE ORDER</p>
          <p className="font-jakarta text-5xl font-[300] uppercase text-[#9A9A9A] md:tracking-[16px]">
            Fresh South
            <br /> Indian Flavors
            <br /> Delivered!
          </p>
          <p className="max-w-[500px] font-jakarta text-[#CACACA]">
            Craving your favorite South Indian dishes? Enjoy the rich, authentic
            flavors of The Tiffin Box from the comfort of your home. Order
            online for a quick and easy delivery straight to your doorstep. Our
            dishes are prepared fresh and delivered fast, ensuring a delicious
            experience every time
          </p>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-3 rounded-none px-6 py-6 text-[#CACACA]"
          >
            <span>Order Online</span>{" "}
            <ChevronRight className="h-4 w-4 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Orders;

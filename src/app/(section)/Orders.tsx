import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";

const Orders = ({ }) => {
    return (
        <section id="orders" className="flex flex-col gap-4 w-full items-center justify-center bg-[#080808]"
            style={{
                backgroundImage: `url('/images/home/order-online.svg')`,
                backgroundPosition: 'bottom right',
                backgroundSize: 'contain,',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="w-full max-w-[1300px] px-3 md:px-0 py-12 md:py-24 flex flex-col md:flex-row gap-3"
                style={{
                    backgroundImage: `url('/images/home/order.png')`,
                    backgroundPosition: 'top right',
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-full md:w-1/2 flex flex-col gap-8 items-start justify-start">
                    <p className="text-[#FCB017] font-jakarta uppercase">ONLINE ORDER</p>
                    <p className="text-[#9A9A9A] font-jakarta text-5xl uppercase font-[300] md:tracking-[16px]">Fresh South<br /> Indian Flavors<br /> Delivered!</p>
                    <p className="text-[#CACACA] font-jakarta max-w-[500px]">Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time</p>
                    <Button variant='outline' className="flex items-center justify-center px-6 py-6 rounded-none gap-3"><span>Order Online</span> <Icons.rightArrow /></Button>
                </div>
            </div>
        </section>
    );
};

export default Orders;
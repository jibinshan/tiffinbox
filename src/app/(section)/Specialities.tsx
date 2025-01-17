import Image from "next/image";

const Specialities = ({ }) => {
    return (
        <section id="specialities" className="flex flex-col gap-4 w-full items-center justify-center bg-[#080808]">
            <div className="w-full flex flex-col items-center justify-center gap-3">
                <p className="text-[#FCB017] font-jakarta uppercase">why tiffin box</p>
                <p className="text-[#9A9A9A] font-jakarta uppercase text-5xl font-[300]">Our Specialties</p>
            </div>
            <div className="w-full max-w-[1300px] px-3 md:px-0 py-12 md:py-24 flex flex-col md:flex-row gap-3">
                <div className="w-full md:w-1/4 flex flex-col gap-8 items-center justify-center md:items-end md:justify-center">
                    <div className="flex flex-col gap-3 md:justify-end md:items-end">
                        <p className="text-[#969696] font-jakarta uppercase">Authentic South
                            Indian Cuisine</p>
                        <p className="text-[#969696] font-jakarta md:text-end">Our dishes are prepared using traditional recipes to bring you the true flavors of South India.</p>
                    </div>
                    <div className="flex flex-col gap-3 md:justify-end md:items-end md:mr-[50px]">
                        <p className="text-[#969696] font-jakarta uppercase">Expert Chefs</p>
                        <p className="text-[#969696] font-jakarta md:text-end">Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.</p>
                    </div>
                    <div className="flex flex-col gap-3 md:justify-end md:items-end">
                        <p className="text-[#969696] font-jakarta uppercase">Fresh, Quality Ingredients</p>
                        <p className="text-[#969696] font-jakarta md:text-end">We use only the finest, fresh ingredients to ensure the highest quality and authentic taste
                            in every meal.</p>
                    </div>
                </div>
                <div className="w-full md:w-2/4 aspect-square flex flex-col gap-8 items-start justify-start rounded-full bg-[#0b0b0b] border-[2px] border-[#282828]" >
                    <Image
                        src='/images/home/specialities.png'
                        width={635}
                        height={639}
                        alt="specialities"
                        className=""
                    />
                </div>
                <div className="w-full md:w-1/4 flex flex-col gap-8 items-center justify-center md:items-start md:justify-center">
                    <div className="flex flex-col gap-3 md:justify-start md:items-start">
                        <p className="text-[#969696] font-jakarta uppercase">Comfortable Dining Experience</p>
                        <p className="text-[#969696] font-jakarta">Our restaurant offers a warm and welcoming ambiance for a relaxed
                            and enjoyable dining experience.</p>
                    </div>
                    <div className="flex flex-col gap-3 md:justify-start md:items-start md:ml-[50px]">
                        <p className="text-[#969696] font-jakarta uppercase">Health-Conscious Options</p>
                        <p className="text-[#969696] font-jakarta">From vegetarian to gluten-free
                            dishes, we provide healthy options without compromising on flavor.</p>
                    </div>
                    <div className="flex flex-col gap-3 md:justify-start md:items-start">
                        <p className="text-[#969696] font-jakarta uppercase">Seamless Online Ordering & Delivery</p>
                        <p className="text-[#969696] font-jakarta">Enjoy your favorite dishes at home
                            with our easy online ordering and fast delivery service.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specialities;
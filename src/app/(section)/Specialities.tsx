import Image from "next/image";

const Specialities = ({ }) => {
  return (
    <section
      id="specialities"
      className="flex w-full flex-col items-center justify-center gap-4 bg-[#080808]"
    >
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <p className="font-jakarta uppercase text-[#FCB017]">why tiffin box</p>
        <p className="font-jakarta text-4xl w-full text-center font-[100] uppercase tracking-[9px] text-[#9A9A9A]">
          Our Specialties
        </p>
      </div>
      <div className="flex w-full max-w-[1300px] flex-col gap-3 px-3 py-12 md:flex-row md:px-0 md:py-24">
        <div className="flex w-full flex-col items-center justify-center gap-8 md:w-1/4 md:items-end md:justify-center">
          <div className="flex flex-col gap-3 md:items-end md:justify-end">
            <p className="w-full max-w-[200px] font-jakarta font-[500] uppercase text-[#9a9a9a] md:text-end">
              Authentic South <span className="text-end">Indian Cuisine</span>
            </p>
            <p className="font-jakarta text-[#969696] md:text-end">
              Our dishes are prepared using traditional recipes to bring you the
              true flavors of South India.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:mr-[50px] md:items-end md:justify-end">
            <p className="font-jakarta uppercase text-[#969696]">
              Expert Chefs
            </p>
            <p className="font-jakarta text-[#969696] md:text-end">
              Our chefs have years of experience crafting exquisite South Indian
              dishes, ensuring every bite is a delight.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-end md:justify-end">
            <p className="font-jakarta uppercase text-[#969696]">
              Fresh, Quality Ingredients
            </p>
            <p className="font-jakarta text-[#969696] md:text-end">
              We use only the finest, fresh ingredients to ensure the highest
              quality and authentic taste in every meal.
            </p>
          </div>
        </div>
        <div className="relative flex aspect-square w-full flex-col items-start justify-start gap-8 rounded-full border-[2px] border-[#282828] bg-[#0b0b0b] md:w-2/4">
          <div className="absolute h-full w-full left-[30px] -top-[150px] aspect-square overflow-hidden hidden md:flex flex-col justify-center items-start rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="6" transform="matrix(-1 0 0 1 13 0)" fill="#0A0A0A" stroke="#636363" />
            </svg>
          </div>
          <div className="absolute h-full w-full -left-2 top-0 aspect-square overflow-hidden hidden md:flex flex-col justify-center items-start rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="6" transform="matrix(-1 0 0 1 13 0)" fill="#0A0A0A" stroke="#636363" />
            </svg>
          </div>
          <div className="absolute h-full w-full left-[30px] top-[150px] aspect-square overflow-hidden hidden md:flex flex-col justify-center items-start rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="6" transform="matrix(-1 0 0 1 13 0)" fill="#0A0A0A" stroke="#636363" />
            </svg>
          </div>
          <Image
            src="/images/home/specialities.png"
            width={635}
            height={639}
            alt="specialities"
            className=""
          />
          <div className="absolute h-full w-full right-[30px] -top-[150px] aspect-square overflow-hidden hidden md:flex flex-col justify-center items-end rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="6" transform="matrix(-1 0 0 1 13 0)" fill="#0A0A0A" stroke="#636363" />
            </svg>
          </div>
          <div className="absolute h-full w-full -right-2 top-0 aspect-square overflow-hidden hidden md:flex flex-col justify-center items-end rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="6" transform="matrix(-1 0 0 1 13 0)" fill="#0A0A0A" stroke="#636363" />
            </svg>
          </div>
          <div className="absolute h-full w-full right-[30px] top-[150px] aspect-square overflow-hidden hidden md:flex flex-col justify-center items-end rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="6" transform="matrix(-1 0 0 1 13 0)" fill="#0A0A0A" stroke="#636363" />
            </svg>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8 md:w-1/4 md:items-start md:justify-center">
          <div className="flex flex-col gap-3 md:items-start md:justify-start">
            <p className="font-jakarta uppercase text-[#969696]">
              Comfortable Dining Experience
            </p>
            <p className="font-jakarta text-[#969696]">
              Our restaurant offers a warm and welcoming ambiance for a relaxed
              and enjoyable dining experience.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:ml-[50px] md:items-start md:justify-start">
            <p className="font-jakarta uppercase text-[#969696]">
              Health-Conscious Options
            </p>
            <p className="font-jakarta text-[#969696]">
              From vegetarian to gluten-free dishes, we provide healthy options
              without compromising on flavor.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:items-start md:justify-start">
            <p className="font-jakarta uppercase text-[#969696]">
              Seamless Online Ordering & Delivery
            </p>
            <p className="font-jakarta text-[#969696]">
              Enjoy your favorite dishes at home with our easy online ordering
              and fast delivery service.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Specialities;

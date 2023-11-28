/* eslint-disable react/prop-types */
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ButtonGroup from './buttonGroup';

const Plan = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-pink  font-extrabold text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, btnText, trial }) => {
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500 text-sm font-light">{title}</span>
      </div>
      <div className="flex flex-col font-medium text-black-200 gap-5">
        <Plan title="Ad-free experience" />
        <Plan title="Unlimited user interaction" />
        <Plan title="User profile customization" />
        <Plan title="Content recommendations" />
      </div>
      <div className="mx-auto">
        <h2 className="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>${price}</span>
          <span className="text-lg ml-1 font-normal text-neutral-500">
            /Monthly
          </span>
        </h2>
        <button className="w-fit capitalize text-base hover:bg-pink hover:shadow-md hover:shadow-hover hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-pink hover:text-white rounded">
          {btnText}
        </button>
        <span className="block text-pink mt-5 font-semibold animate__animated animate__shakeX cursor-pointer">
          {trial}
        </span>
      </div>
    </div>
  );
};

function Pricing() {
  const [plan, setPlan] = useState("Monthly Plan");
  return (
    <section
      className="relative  bg-offwhite text-black-200 mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
    >
      <div>
        <h2 className="title text-center text-black-200 font-extrabold text-3xl py-8">Choose your pricing policy</h2>
      </div>

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-black-200 p-2 rounded-full">
        <div
          className={`${
            plan === "Monthly Plan" ? "left-2" : "left-[150px] w-[128px]"
          } transition-all duration-500 absolute top-[.37rem] h-[55px] w-[138px] rounded-full bg-pink`}
        ></div>
        <button
          onClick={() => setPlan("Monthly Plan")}
          className={`
          ${plan === "Monthly Plan" ? "text-white" : "text-pink"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5 hover:text-white rounded-full`}
        >
          Monthly Plan
        </button>
        <button
          onClick={() => setPlan("Annual Plan")}
          className={`
          ${plan === "Annual Plan" ? "text-white" : "text-pink"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-7 hover:text-white rounded-full`}
        >
          Annual Plan
        </button>
      </div>

      {plan === "Monthly Plan" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Standard Plan"
            price="25"
            btnText="Start free trial"
          />
          <PricingCard
            name="Free Plan"
            price="0"
            btnText="Create account"
            trail="Or Start 14 Days trial"
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-pink text-white px-2 py-1 rounded-md">
              Suggested
            </span>
            <PricingCard
              name="Premium Plan"
              price="24"
              btnText="Create account"
              trail="Or Start 14 Days trial"
            />
          </div>
        </Carousel>
      ) : (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Free Plan"
            price="0"
            btnText="Start free trial"
          />
          <PricingCard
            name="Standard Plan"
            price="25"
            btnText="Create account"
            trail="Or Start 10 Days trial"
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-pink text-white px-2 py-1 rounded-md">
              Suggested
            </span>
            <PricingCard
              name="Premium Plan"
              price="54"
              btnText="Create account"
              trail="Or Start 10 Days trial"
            />
          </div>
        </Carousel>
      )}
    </section>
  );
}

export default Pricing;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
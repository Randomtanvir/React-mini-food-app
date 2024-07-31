import Button from "./Button";
import { BASE_URL } from "../App";

// eslint-disable-next-line react/prop-types
const FoodList = ({ search, loding }) => {
  if (loding)
    return (
      <div className="text-white text-4xl container mx-auto">Loading....</div>
    );
  return (
    <div className="bg-[url('/public/bg.png')] min-h-[calc(100vh-241px)] text-white bg-cover">
      <div className="container mx-auto flex justify-center 2xl:justify-start items-center flex-wrap gap-x-[20px] gap-y-[31px] pt-[66px] ">
        {search?.map(({ name, text, price, image }) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={Math.random()}
            className="max-w-[340px] max-h-[167px] rounded-2xl p-[12px] flex gap-4 ring-2 focus:ring-2 ring-[#ffffff31] ring-inset text-white
            
            bg-gradient-to-r from-[rgba(255,255,255,0.07)] to-[rgba(255,255,255,0)] backdrop-blur-[10px] shadow-2xl shadow-[rgba(0,0,0,0.18)]
            
            "
          >
            <div className="">
              <img src={BASE_URL + image} alt="" />
            </div>
            <div className="flex flex-col justify-between items-end">
              <div>
                <h3 className="text-base mb-2">{name}</h3>
                <p className="text-xs">{text}</p>
              </div>
              <Button>${price.toFixed(2)}</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;

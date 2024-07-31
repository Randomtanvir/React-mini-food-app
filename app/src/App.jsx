import React, { useEffect, useState } from "react";
import FoodList from "./components/FoodList";
import Button from "./components/Button";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(true);
  const [search, setSearch] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const faceData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const res = await response.json();
        setData(res);
        setSearch(res);
        setLoding(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    faceData();
  }, []);

  const handelChange = (event) => {
    let selected = event.target.value.toLowerCase();
    if (selected === "") {
      setSearch(null);
    }
    const filter = data?.filter((value) => {
      return value.name.toLowerCase().includes(selected);
    });
    setSearch(filter);
  };

  const buttonVarint = [
    {
      name: "All",
      type: "All",
    },
    {
      name: "Breakfast",
      type: "Breakfast",
    },
    {
      name: "Lunch",
      type: "Lunch",
    },
    {
      name: "Dinner",
      type: "Dinner",
    },
  ];

  const selectedFood = (type) => {
    if (type === "All") {
      setSearch(data);
      setSelectedBtn("All");
      return;
    }
    const filter = data?.filter((value) => {
      return value.type.toLowerCase().includes(type.toLowerCase());
    });
    setSearch(filter);
  };

  return (
    <div>
      <div className="bg-[#323334] h-[241px]">
        <div className="container mx-auto ">
          <div className="flex justify-between md:flex-row gap-6 md:gap-0 flex-col items-center md:pt-[96px] pt-[40px]">
            <div>
              <img src="/Foody Zone.svg" alt="logo" />
            </div>
            <div>
              <input
                onChange={handelChange}
                className="bg-transparent rounded outline-[#FF4343] h-[40px] text-base border border-[#FF4343] px-4 placeholder:text-white text-white"
                type="text"
                placeholder="Search Food...."
              />
            </div>
          </div>
          <div className="flex gap-3 justify-center pt-[40px]">
            {buttonVarint.map(({ name, type }) => (
              // eslint-disable-next-line react/jsx-key
              <Button key={name} onClick={() => selectedFood(type)}>
                {name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <FoodList search={search} loding={loding} />
    </div>
  );
};

export default App;

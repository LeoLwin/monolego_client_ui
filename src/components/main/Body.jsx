import React, { useEffect, useState } from "react";
import getData from "../../Getdata";
import bodyImg from "../../assets/testphoto1.jpg";

const Body = () => {
  const [cloth, setCloth] = useState([]);
  const [showTShirt, setShowTShirt] = useState(null);

  const fetchData = async () => {
    const data = await getData();
    setCloth(data.data.by); // Set the cloth data
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Log updated `cloth` data
  useEffect(() => {
    console.log("Updated cloth data: ", cloth); // Log updated cloth data
    if (cloth.length > 0) {
      setShowTShirt(cloth[0].img_1);
      console.log("cloth[0].img_1: ", cloth[0].img_4); // Log img_1 from the first cloth item
    }
  }, [cloth]); // Log when `cloth` changes

  return (
    <div className="relative">
      <div>
        {showTShirt && (
          <img
            src={bodyImg}
            className="object-contain w-full h-auto"
            alt="T-shirt"
          />
        )}
        <h1 className="text-black-100 font-sans text-4xl sm:text-xl font-bold tracking-wide absolute top-2/3 left-1/8 sm:top1/2 sm: left1/3 transform -translate-x-1/2 -translate-y-1/2">
          T-SHIRTS
        </h1>
      </div>
    </div>
  );
};

export default Body;

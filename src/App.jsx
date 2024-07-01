import { useState,useEffect } from 'react'
import "./App.css";

const data = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75ebrwvgVW5Ks_oLfCbG8Httf3_9g-Ynl_Q&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BjFcg6Sp0FkUslmmrCuWQQPFlTn0e23efg&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezkhZEGyU-SbkR5X1RGxo8OxQFLfKonocyg&s",
];


const App = () => {
   const [activeIndex, setActiveIndex] = useState(0);

   const handlePrevious = () => {
     if (activeIndex === 0) setActiveIndex(data.length - 1);
     else setActiveIndex(activeIndex - 1);
   };
   const handleNext = () => {
     setActiveIndex((activeIndex + 1) % data.length);
   };

   useEffect(() => {
     const interval = setInterval(() => {
       setActiveIndex((activeIndex) => (activeIndex + 1) % data.length);
     }, 2000); 

     return () => clearInterval(interval); // Cleanup the interval on component unmount
   }, []);

  return (
    <div className="flex justify-center items-center  ">
      <button className=" text-5xl" onClick={handlePrevious}>
        ⬅️
      </button>
      {data.map((item, index) => (
        <img
          key={index}
          alt="Wallpaper"
          src={item}
          className={
            "w-[700px] h-[500px] object-contain " +
            (activeIndex === index ? "block" : "hidden")
          }
        />
      ))}
      <button className=" text-5xl" onClick={handleNext}>
        ➡️
      </button>
    </div>
  );
}

export default App
'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
const Swipeable = dynamic(() => import('react-tinder-card'), {
  ssr: false
});

interface Dish {
  caption: string;
  image: string;
  cb: Function;
}

const DishCard = ({ caption, image, cb}: Dish) => {

  const processSwipe = (direction: string) => {
    cb(direction);
  }

  return <Swipeable
    //onCardLeftScreen={processSwipe}
    className="h-full text-white font-bold text-4xl absolute top-0 left-0 w-full"
  >
    <div
      className="bg-cover rounded-lg h-full flex flex-col items-center justify-end top-0 left-0 w-full"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-row gap-x-2">
        <Image src="/icons/location.svg" alt="location" width={40} height={40} />
        <h2 className="m-5 drop-shadow-md">{caption}</h2>
      </div>
    </div>
  </Swipeable>
}
export default DishCard;

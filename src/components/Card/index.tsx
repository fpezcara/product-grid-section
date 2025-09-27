import React, { useState } from "react";
import type { Image } from "../../types";

interface CardProps {
  name: string;
  images: Image[];
  colors: string[];
  listPrice: number;
  salePrice: number;
}

const Card = ({ name, images, colors, listPrice, salePrice }: CardProps) => {
  // console.log("IMAGES", images);
  // console.log("colors", colors);
  // console.log("PRICE", price);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const getImagesByColor = () => {
    return images.filter((image: Image) => image.color === selectedColor);
  };

  // TODO: add icon inside the image to allow it to change when clicked (probably use position
  //  relative in container and absolute in the arrow
  const [selectedImage, setSelectedImage] = useState<Image>(
    getImagesByColor()[0],
  );

  console.log("lalalla", getImagesByColor());
  const selectItemColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedColor(e.currentTarget.value);
  };
  console.log("SELECTED IMG", selectedImage);

  const bgColorsMap: Record<string, string> = {
    black: "bg-black",
    white: "bg-white",
    beige: "bg-beige",
    orange: "bg-orange-600",
    yellow: "bg-yellow-400",
    green: "bg-lime-700",
    brown: "bg-brown",
    blue: "bg-blue-700",
  };

  console.log("map colors", bgColorsMap.beige);

  return (
    <section className="pt-2">
      <img
        loading="lazy"
        className="h-[300px] w-[280px] rounded-lg object-cover"
        alt={`${selectedImage.color}-${name}`}
        src={selectedImage.image_url}
      />
      <section className="mt-2 flex flex-col gap-y-3">
        <p className="text-sm font-light text-gray-400 capitalize">
          {selectedColor}
        </p>
        <p>{name}</p>
        {salePrice !== listPrice ? (
          <div className="flex items-center gap-2 font-light tracking-wider text-gray-500">
            <p>${salePrice}</p>
            <p className="text-sm line-through">${listPrice}</p>
          </div>
        ) : (
          <p className="font-light tracking-wide text-slate-500">
            ${listPrice}
          </p>
        )}
        <div className="flex gap-2">
          {colors.map((color: string) => (
            <button
              className={`size-5 rounded-full border border-gray-200 ${bgColorsMap[color]} cursor-pointer`}
              value={color}
              onClick={selectItemColor}
              key={color}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Card;

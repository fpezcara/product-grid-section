import React, { useState } from 'react';
import type { Image } from '../../types';
import Img from '../Img';

interface CardProps {
  name: string;
  images: Image[];
  colors: string[];
  listPrice: number;
  salePrice: number;
}

const Card = ({ name, images, colors, listPrice, salePrice }: CardProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

  const getImagesByColor = (color: string): Array<Image> => {
    return images.filter((image: Image) => image.color === color);
  };

  // TODO: add icon inside the image to allow it to change when clicked (probably use position
  //  relative in container and absolute in the arrow
  const [selectedImage, setSelectedImage] = useState<Image>(
    getImagesByColor(selectedColor)[0]
  );

  const selectItemColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedColor(e.currentTarget.value);
    setSelectedImage(getImagesByColor(e.currentTarget.value)[0]);
  };

  console.log('SELECTED IMG', selectedImage);
  console.log('SELECTED color', selectedColor);

  const bgColorsMap: Record<string, string> = {
    black: 'bg-black',
    white: 'bg-white',
    beige: 'bg-beige',
    orange: 'bg-orange-600',
    yellow: 'bg-yellow-500',
    green: 'bg-lime-600',
    brown: 'bg-brown',
    blue: 'bg-blue-600',
  };

  console.log('images', images);

  return (
    <section className="pt-2">
      <Img
        selectedImage={selectedImage}
        name={name}
      />
      <section className="mt-2 flex flex-col gap-y-3">
        <p className="text-xs font-light text-gray-500 capitalize">
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
              className={`size-5 rounded-full ring ring-gray-200 focus:outline-3 focus:outline-blue-300 ${bgColorsMap[color]} cursor-pointer`}
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

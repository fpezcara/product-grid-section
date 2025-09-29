import React, { useState, useMemo } from 'react';
import type { Image } from '../../types';
import Img from '../Img';
import { getImagesByColor, bgColorsMap } from '../../utils';

interface CardProps {
  name: string;
  images: Image[];
  colors: string[];
  listPrice: number;
  salePrice: number;
}

const Card = ({ name, images, colors, listPrice, salePrice }: CardProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

  const imagesByColor = useMemo(
    () => getImagesByColor(selectedColor, images),
    [images, selectedColor]
  );

  const [selectedImage, setSelectedImage] = useState<Image>(imagesByColor[0]);

  const selectItemColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newColor = e.currentTarget.value;

    setSelectedColor(newColor);
    setSelectedImage(getImagesByColor(newColor, images)[0]);
  };

  console.log('estoy en la card correcta', selectedImage);
  return (
    <section className='pt-2'>
      <Img
        selectedImage={selectedImage}
        name={name}
        setSelectedImage={setSelectedImage}
        imagesByColor={imagesByColor}
      />
      <section className='mt-2 flex flex-col gap-y-3'>
        <p className='text-xs font-light text-gray-500 capitalize'>
          {selectedColor}
        </p>
        <p>{name}</p>
        {salePrice !== listPrice ? (
          <div className='flex items-center gap-2 font-light tracking-wider text-gray-500'>
            <p>${salePrice}</p>
            <p className='text-sm line-through'>${listPrice}</p>
          </div>
        ) : (
          <p className='font-light tracking-wide text-slate-500'>
            ${listPrice}
          </p>
        )}
        <div className='flex gap-2'>
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

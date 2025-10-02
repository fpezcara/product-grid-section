import React, { useState, useMemo } from 'react';
import type { Image } from '../../types';
import Img from '../Img';
import { getImagesByColor, bgColorsMap } from '../../utils';
import { RiCheckFill } from 'react-icons/ri';

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
              className={`[&[aria-selected=true]]:ring-selected flex size-4 items-center justify-center rounded-full text-white ring ring-gray-200 hover:border-none hover:outline-2 hover:outline-indigo-100 focus:border-none focus:outline-4 focus:outline-indigo-100 [&[aria-selected=true]]:border-1 [&[aria-selected=true]_svg]:opacity-100 ${bgColorsMap[color]} cursor-pointer`}
              value={color}
              onClick={selectItemColor}
              key={`${name}-${color}`}
              aria-selected={selectedColor === color}
            >
              <RiCheckFill
                className={`size-3 opacity-0 ${color === 'white' && 'text-gray-500'}`}
              />
            </button>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Card;

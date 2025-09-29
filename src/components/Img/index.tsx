import type { Image } from '../../types';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from 'react-icons/ri';

interface ImageProps {
  selectedImage: Image;
  name: string;
}

const Img = ({ selectedImage, name }: ImageProps) => {
  return (
    <section className="relative">
      <div className="absolute">
        <div className="flex w-[280px] justify-between">
          <div className="flex h-[300px] w-1/5 items-center justify-center rounded-lg bg-neutral-100 opacity-0 delay-150 duration-300 hover:cursor-pointer hover:opacity-50">
            <RiArrowLeftWideLine className="bottom-8 size-7 text-black" />
          </div>
          <div className="flex h-[300px] w-1/5 items-center justify-center rounded-lg bg-neutral-100 opacity-0 delay-150 duration-300 hover:cursor-pointer hover:opacity-50">
            <RiArrowRightWideLine className="size-7 text-black" />
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        className="h-[300px] w-[280px] rounded-lg object-cover"
        alt={`${selectedImage.color}-${name}`}
        src={selectedImage.image_url}
      />
    </section>
  );
};

export default Img;

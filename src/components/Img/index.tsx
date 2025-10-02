import type { Image } from '../../types';
import { RiArrowLeftWideLine, RiArrowRightWideLine } from 'react-icons/ri';
import { getIndexImage } from '../../utils.ts';

interface ImageProps {
  selectedImage: Image;
  name: string;
  setSelectedImage: (image: Image) => void;
  imagesByColor: Image[];
}

const Img = ({
  selectedImage,
  name,
  setSelectedImage,
  imagesByColor,
}: ImageProps) => {
  const currentImageIndex = getIndexImage(imagesByColor, selectedImage);
  const isArrowHidden = imagesByColor.length === 1;

  const getNextIndex = (direction: 'forward' | 'backward' = 'forward') => {
    const lastIndex = imagesByColor.length - 1;

    if (direction === 'forward') {
      return currentImageIndex === lastIndex ? 0 : currentImageIndex + 1;
    } else {
      return currentImageIndex === 0 ? lastIndex : currentImageIndex - 1;
    }
  };

  return (
    <section className='relative'>
      <div className='absolute w-full'>
        <div className='flex justify-between'>
          <button
            aria-label='Previous image'
            className={`${isArrowHidden ? 'hidden' : 'flex'} h-[300px] w-1/6 items-center justify-center rounded-tl-lg bg-neutral-100 opacity-0 delay-150 duration-300 hover:cursor-pointer hover:opacity-50 focus:opacity-50 active:opacity-50`}
            onClick={() =>
              setSelectedImage(imagesByColor[getNextIndex('backward')])
            }
          >
            <RiArrowLeftWideLine className='size-7 text-black' />
          </button>
          <button
            aria-label='Next image'
            className={`${isArrowHidden ? 'hidden' : 'flex'} h-[300px] w-1/6 items-center justify-center rounded-tr-lg bg-neutral-100 opacity-0 delay-150 duration-300 hover:cursor-pointer hover:opacity-50 focus:opacity-50 active:opacity-50`}
            onClick={() => setSelectedImage(imagesByColor[getNextIndex()])}
          >
            <RiArrowRightWideLine className='size-7 text-black' />
          </button>
        </div>
      </div>
      <img
        loading='lazy'
        className='h-[300px] w-[80em] rounded-lg object-cover md:w-[84em] lg:w-[70em]'
        alt={`${selectedImage.color}-${name}`}
        src={selectedImage.image_url}
      />
    </section>
  );
};

export default Img;

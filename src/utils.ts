import type { Image } from './types';

export const getImagesByColor = (color: string, images: Image[]): Image[] => {
  return images.filter((image: Image) => image.color === color);
};

export const bgColorsMap: Record<string, string> = {
  black: 'bg-black',
  white: 'bg-white',
  beige: 'bg-beige',
  orange: 'bg-orange-600',
  yellow: 'bg-yellow-500',
  green: 'bg-lime-600',
  brown: 'bg-brown',
  blue: 'bg-blue-600',
};

export const getIndexImage = (images: Image[], image: Image) => {
  return images.findIndex((i) => image === i);
};

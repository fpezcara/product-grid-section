// TODO: como resolver
import type { Image } from "../../types";

interface ImageProps {
  selectedImage: Image;
  name: string;
}

const Image = ({ selectedImage, name }: ImageProps) => {
  return (
    <img
      loading="lazy"
      className="h-[300px] w-[280px] rounded-lg"
      alt={`${selectedImage.color}-${name}`}
      src={selectedImage.image_url}
    />
  );
};

export default Image;

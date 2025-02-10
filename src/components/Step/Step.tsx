import Image from 'next/image';
import Heading from '../Heading';
import { StepType } from './Step.type';

const Step = ({ num, title, content, image, imageAlt }: StepType) => {
  const shouldFlipPosition = num % 2 === 0;

  return (
    <div
      className={`flex w-full flex-col-reverse justify-between gap-4 overflow-hidden rounded-[4px] border-2 border-[#2A3D524D]/20 md:flex-row md:items-center md:gap-8 md:rounded-none md:border-none xl:gap-[116px] ${
        shouldFlipPosition ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex flex-1 flex-col gap-4 p-4">
        <Heading
          isSubheading
          className="relative h-12 w-12 self-start rounded-full border-[3px] border-primary/[12%]"
        >
          <span className="absolute bottom-1.5 left-1/2 -ml-6 w-12 text-center text-primary">
            {num}
          </span>
        </Heading>
        <Heading isSubheading>{title}</Heading>
        <p className="text-primary/85">{content}</p>
      </div>
      <div className="relative aspect-[548/440] w-full flex-1">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover md:rounded-[12px] md:border-2 md:border-[#2A3D524D]/20"
        />
      </div>
    </div>
  );
};

export default Step;

import { StaticImageData } from "next/image";

export type StepType = {
  num: number;
  title: string;
  content: string;
  image: StaticImageData;
  imageAlt: string;
};

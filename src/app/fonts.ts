import { Lora, Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export const lora = Lora({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

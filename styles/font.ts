import { Cormorant_Garamond, Work_Sans, Inter } from 'next/font/google';

export const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'] });
export const workSans = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] });
export const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const fontClassNames = {
  cormorantGaramond: cormorantGaramond.className,
  workSans: workSans.className,
  inter: inter.className,
};
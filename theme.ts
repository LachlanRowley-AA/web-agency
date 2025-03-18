'use client';

import { createTheme, rem } from '@mantine/core';
import localFont from 'next/font/local'

const font = localFont({ src: './public/Cera Pro Bold.otf'});

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily : font.style.fontFamily,
  fontSizes: {
    xl: rem(24),
  },
});

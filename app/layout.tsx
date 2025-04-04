import '@mantine/core/styles.css';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';


import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { LinkedInInsightTag} from 'nextjs-linkedin-insight-tag'

export const metadata = {
  title: 'Asset Alley',
  description: 'Helping customers with their finance',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <GoogleTagManager gtmId='GTM-NRN7W3D3'/>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
        <LinkedInInsightTag/>
        <GoogleAnalytics gaId='G-WBXBDB7NKQ'/>
      </body>
    </html>
  );
}

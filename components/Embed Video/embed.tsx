'use client';

import { Container, Flex } from '@mantine/core';
import classes from './embed.module.css';
import { JumboTitle } from '../Jumbo-Title/jumbo-title';

export const Embed = () => (
  <Container
    bg="var(--mantine-color-white)"
    size="xl"
    px={{
      base: 'calc(var(--mantine-spacing-lg) * 1)',
      xs: 'calc(var(--mantine-spacing-lg) * 3)',
      lg: 'calc(var(--mantine-spacing-lg) * 24)',
    }}
    py={{
      base: 'calc(var(--mantine-spacing-lg) * 3)',
      xs: 'calc(var(--mantine-spacing-lg) * 3)',
      lg: 'calc(var(--mantine-spacing-lg) * 3)',
    }}
    fluid
  >
      <JumboTitle
        order={2}
        fz="md"
        style={{ textWrap: 'balance' }}
        pr="calc(var(--mantine-spacing-xl) * 2)"
        mb="xl"
      >
        How we help agencies
      </JumboTitle>
      <Flex
        justify="center"
        align="center"
        style={{
          height: '60vh',
        }}
        // Override for small screens using Mantine's responsive system
        mih={{
          base: '30vh', // Mobile
          sm: '40vh',   // Small screens
          md: '50vh',   // Medium screens
          lg: '60vh',   // Large and up
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jEBfPn23QrM"
          title="How We Help Agencies"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Flex>
    </Container>
);

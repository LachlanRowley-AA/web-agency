'use client';

import { Alert, Anchor, Box, Container, Divider, Flex, Grid, Image, Text } from '@mantine/core';
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconHeartHandshake,
} from '@tabler/icons-react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import type { ReactNode } from 'react';
import classes from './footer.module.css';

export const Footer01 = () => (
  <Container component="footer" className={classes.container} fluid>
    <Container
      size="xl"
      px={0}
      py={{
        base: 'xs',
        sm: 'calc(var(--mantine-spacing-xl))',
      }}
    >
      <Flex justify={{ sm: 'space-between' }} wrap="wrap" gap="xl">
        <Box maw={{ sm: 300 }}>
          <Flex align="center">
            <Image
              component={NextImage}
              src="/logo-dark.png"
              width={138}
              height={23}
              alt="Titanium"
              lightHidden
            />
          </Flex>
          <Text mt="xs" size="md" c="{var(--mantine-colors-dark)}">
            ABN: 84 636 666 709
          </Text>
          <Text mt="xs" size="md" c="{var(--mantine-colors-dark)}">
            © 2025 Asset Alley. All rights reserved.
          </Text>
        </Box>
      </Flex>
    </Container>
  </Container>
);
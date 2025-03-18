'use client';

import { JumboTitle } from '../Jumbo-Title/jumbo-title';
import {
  ActionIcon,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Container,
  ContainerProps,
  Flex,
  Image,
  Rating,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import NextImage from 'next/image';
import classes from './Thankyou.module.css';

type ImageItem = { src: string; alt: string };

type Hero03Props = ContainerProps & {
  avatarItems?: ImageItem[];
  title?: string;
  description?: string;
  rating?: number;
  ratingLabel?: string;
};

export const ThankyouPage = ({
  title = 'Thank you',
  ...containerProps
}: Hero03Props) => (
  <Container pos="relative" h="100vh" mah={950} style={{ overflow: 'hidden' }} fluid>
    <Container component="section" h="100vh" mah={950} mx="auto" size="xl" {...containerProps}>
      <Image
        component={NextImage}
        pos="absolute"
        inset={0}
        src="/bg/kubadesign-19-light.jpg"
        mx="auto"
        alt=""
        width={1784}
        height={1000}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        priority
        darkHidden
      />
      <Image
        component={NextImage}
        pos="absolute"
        inset={0}
        src="/bg/kubadesign-19-dark.jpg"
        mx="auto"
        alt=""
        width={1784}
        height={1000}
        style={{ pointerEvents: 'none', userSelect: 'none' }}
        priority
        lightHidden
      />
      <Box
        pos="absolute"
        top={0}
        left={0}
        h="100%"
        w="100%"
        className={classes['vertical-backdrop']}
      />
      <Flex h="100%" align="center" pos="relative" justify="center">
        <Stack
          pt={{ base: 'xl', sm: 0 }}
          maw="var(--mantine-breakpoint-md)"
          align="center"
          gap="lg"
          style={{ zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <JumboTitle ta="center" order={1} fz="lg" style={{ textWrap: 'balance' }}>
              {title}
            </JumboTitle>
          </motion.div>
        </Stack>
      </Flex>
    </Container>
  </Container>
);
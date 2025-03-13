"use client";

import { JumboTitle } from '../Jumbo-Title/jumbo-title'
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
import classes from './hero-03.module.css';
import React from 'react';

type ImageItem = { src: string; alt: string };

type Hero03Props = ContainerProps & {
  avatarItems?: ImageItem[];
  badge?: string;
  title?: string;
  description?: string;
  rating?: number;
  ratingLabel?: string;
};

export const Hero03 = ({
  badge = 'Partnering with Marketing Agencies',
  description = 'Our team...',
  avatarItems = AVATAR_ITEMS_DEMO,
  ...containerProps
}: Hero03Props) => (
  <Container pos="relative" h="50vh" mah={850} style={{ overflow: 'hidden' }} fluid>
    <Container component="section" h="60vh" mah={850} mx="auto" size="xl" {...containerProps}>
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
          pt={{ base: 'md', sm: 0 }}
          maw="var(--mantine-breakpoint-md)"
          align="center"
          gap="md"
          style={{ zIndex: 1 }}
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0.0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              <Badge
                variant="default"
                p="sm"
                bg="var(--mantine-color-body)"
                size="lg"
                mb="md"
                style={{ textTransform: 'none' }}
              >
                {badge}
              </Badge>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0.0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <JumboTitle ta="center" order={1} fz="lg" style={{ textWrap: 'balance' }}>
              Help <span style={{ color: '#01E194' }}>YOUR</span> customers finance their new website
            </JumboTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <Text
              ta="center"
              maw="var(--mantine-breakpoint-xs)"
              fz="lg"
              style={{ textWrap: 'balance' }}
            >
              {description}
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <Stack align="center" mt="sm">
              <AvatarGroup>
                {avatarItems.map((avatarItem, index) => (
                  <Avatar key={index} src={avatarItem.src} className={classes.avatar} />
                ))}
              </AvatarGroup>
            </Stack>
          </motion.div>
        </Stack>
      </Flex>
    </Container>
  </Container>
);

const AVATAR_ITEMS_DEMO: ImageItem[] = [];

'use client';

import { JumboTitle } from '../Jumbo-Title/jumbo-title';
import { Box, Card, Container, Flex, Grid, Stack, Text } from '@mantine/core';
import {
  IconBook,
  IconBrandTypescript,
  IconComponents,
  IconDevices,
  IconKeyframes,
  IconMasksTheater,
  IconMoon,
  IconRocket,
  IconTool,
} from '@tabler/icons-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import classes from './feature-02.module.css';

type Feature = {
  icon: ReactNode;
  title: string;
  description: ReactNode;
};

const FEATURES: Feature[] = [
  {
    icon: <IconRocket />,
    title: 'Get Paid Sooner',
    description: 'Pre-optimized for performance and SEO.',
  },
  {
    icon: <IconComponents />,
    title: 'Scrap your payment plan',
    description: 'Highly customizable to fit your brand.',
  },
  {
    icon: <IconDevices />,
    title: 'Close more sales',
    description:
      'Optimized for seamless user experience across various devices, including phones and tablets.',
  },
] as const;

const Consumer_FEATURES: Feature[] = [
    {
        icon: <IconRocket />,
        title: 'No Need to Outlay Total Amount Upfront',
        description: 'Pre-optimized for performance and SEO.',
      },
      {
        icon: <IconComponents />,
        title: 'Repayments over 5 years',
        description: 'Highly customizable to fit your brand.',
      },
      {
        icon: <IconDevices />,
        title: 'No additional security required',
        description:
          'Optimized for seamless user experience across various devices, including phones and tablets.',
      },
] as const;

const FeatureCell = ({
  icon,
  title,
  description,
  index = 1,
  iconSize,
}: Feature & {
  index?: number;
  iconSize?: number;
}) => (
  <motion.div
    initial={{ opacity: 0.0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeInOut' }}
    viewport={{ once: true }}
    style={{ height: '100%' }}
  >
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: 'var(--mantine-shadow-xl)' }}
      transition={{ type: 'spring' }}
      style={{
        borderRadius: 'var(--mantine-radius-lg)',
        height: '100%',
      }}
    >
      <Card radius="lg" p="xl" className={classes.cell} h="100%">
        <Stack gap="xs">
          <Flex w={iconSize} h={iconSize} justify="center" align="center">
            {icon}
          </Flex>
          <Box>
            <Text fz="xl">{title}</Text>
            <Text fz="md" c="dimmed">
              {description}
            </Text>
          </Box>
        </Stack>
      </Card>
    </motion.div>
  </motion.div>
);

type Feature02Props = {
  title?: string;
  features?: Feature[];
  iconSize?: number;
  title2?: string;
  cFeatures?: Feature[];
};

export const Feature02 = ({
  title = 'Benefits to You',
  title2 = 'Benefits for your customer',
  features = FEATURES,
  cFeatures = Consumer_FEATURES,
  iconSize = 20,
}: Feature02Props) => (
  <Container
    bg="var(--mantine-color-black)"
    py={{
      base: 'calc(var(--mantine-spacing-lg) * 4)',
      xs: 'calc(var(--mantine-spacing-lg) * 5)',
      lg: 'calc(var(--mantine-spacing-lg) * 6)',
    }}
    fluid
  >
    <Container size="lg" px={0}>
    <motion.div
    initial={{ opacity: 0.0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    viewport={{ once: true }}
    >
      <JumboTitle order={2} fz="md" style={{ textWrap: 'balance', color: 'var(--mantine-color-white)' }}>
        {title}
      </JumboTitle>
      </motion.div>
    </Container>
    <Container size="lg" p={0} mt="xl">
      <Grid gutter="xl">
        {features.map((feature, index) => (
          <Grid.Col key={feature.title} span={{ base: 12, xs: 6, md: 4 }} mih="100%">
            <FeatureCell
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              iconSize={iconSize}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
    <Container size="lg" px={0}>
    <motion.div
    initial={{ opacity: 0.0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    viewport={{ once: true }}
    >
      <JumboTitle order={2} fz="md" style={{ textWrap: 'balance', color: 'var(--mantine-color-white)' }}>
        {title2}
      </JumboTitle>
      </motion.div>
    </Container>
    <Container size="lg" p={0} mt="xl">
      <Grid gutter="xl">
        {cFeatures.map((feature, index) => (
          <Grid.Col key={feature.title} span={{ base: 12, xs: 6, md: 4 }} mih="100%">
            <FeatureCell
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              iconSize={iconSize}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  </Container>
);
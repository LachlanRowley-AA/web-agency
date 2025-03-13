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
    description: ' Receive full payment upfront while your customer repays over time, improving your cash flow and reducing financial risk',
  },
  {
    icon: <IconComponents />,
    title: 'Scrap your payment plan',
    description: 'No need to manage complicated in-house payment plans',
  },
  {
    icon: <IconDevices />,
    title: 'Close more sales',
    description:
      'Overcome budget objections making it easier for customers to say "yes" to your services',
  },
] as const;

const Consumer_FEATURES: Feature[] = [
    {
        icon: <IconRocket />,
        title: 'No Need to Outlay Total Amount Upfront',
        description: 'Your customers can get their new website now without needing to pay the full cost immediately.',
      },
      {
        icon: <IconComponents />,
        title: 'Repayments over 5 years',
        description: 'Flexible financing spreads the cost over five years, making high-quality web solutions more affordable.',
      },
      {
        icon: <IconDevices />,
        title: 'No additional security required',
        description:
          ' Customers can access financing without the need for collateral, simplifying the process and reducing barriers to approval.',
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
      <JumboTitle order={2} fz="md" style={{ textWrap: 'balance', color: '#01E194' }}>
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
      <JumboTitle mt='xl' order={2} fz="md" style={{ textWrap: 'balance', color: '#01E194' }}>
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
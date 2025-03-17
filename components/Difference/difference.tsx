'use client';

import { JumboTitle } from '../Jumbo-Title/jumbo-title';
import { Avatar, Box, Container, Flex, Grid, Group, Paper, PaperProps, Text, Image } from '@mantine/core';
import clsx from 'clsx';
// import NextImage from 'next/image';
import classes from './difference.module.css';

type Testimonial = {
  quote: string;
  name: string;
  imageUrl: string;
  handle: string;
  alt: string;
};

const TESTIMONIALS: Testimonial[] = [
];

const TestimonialCell = ({
  quote,
  name,
  imageUrl,
  handle,
  alt,
  variant = 'default',
  ...paperProps
}: PaperProps &
  Testimonial & {
    variant?: 'default' | 'light';
  }) => (
  <Paper
    component="figure"
    radius={0}
    mx={0}
    // w={{
    //   base: '100%',
    //   lg: '33.333%',
    // }}
    my={0}
    className={clsx(classes.cell, {
      [classes['tinted-cell']]: variant === 'light',
    })}
    {...paperProps}
  >
    <Flex direction="column" justify="space-between" h="100%">
      <Text fz="xl" component="blockquote">
        "{quote}"
      </Text>
      <Group mt="xl" align="start">
        <Avatar radius="xl" size="lg">
          <NextImage src={imageUrl} alt={alt} fill />
        </Avatar>
        <Box>
          <Text fz="lg" fw={500}>
            {name}
          </Text>
          <Text c="dimmed">{handle}</Text>
        </Box>
      </Group>
    </Flex>
  </Paper>
);

const mainImage = {
    src: "stock.jpg",
    alt: 'stock photo'
}

export const Difference = () => (
  <Container
    bg="var(--mantine-color-white)"
    size="xl"
    px={0}
    py={{
      base: 'calc(var(--mantine-spacing-lg) * 3)',
      xs: 'calc(var(--mantine-spacing-lg) * 3)',
      lg: 'calc(var(--mantine-spacing-lg) * 3)',
    }}
    fluid
  >
    <Container
      size="lg"
      px={{
        base: 'xl',
        lg: 0,
      }}
    >
      <Grid
        gutter={{
          xs: 0,
          lg: 'xl',
        }}
      >

        <Grid.Col span={{ base: 12, lg: 7 }}>
          <JumboTitle
            order={2}
            fz="md"
            style={{ textWrap: 'balance' }}
            pr="calc(var(--mantine-spacing-xl) * 4)"
            mb="sm"
          >
            What Makes Asset Alley Different
          </JumboTitle>
            <Text fz="xl">
          Our efficient 2-3 day process eliminates lengthy paperwork, ensuring you get paid quickly and hassle-free.
            </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 5 }}>
         <Image
                fit='cover'
                alt={mainImage.alt}
                src={mainImage.src}
                  />
        </Grid.Col>
      </Grid>
    </Container>
    <Flex
      mt={{
        base: 'calc(var(--mantine-spacing-xl) * 3)',
        lg: 'calc(var(--mantine-spacing-xl) * 5)',
      }}
      wrap="wrap"
      justify="center"
    >
      {TESTIMONIALS.map((testimonial, index) => (
        <TestimonialCell
          key={testimonial.name}
          {...testimonial}
          variant={index % 2 === 0 ? 'light' : 'default'}
        />
      ))}
    </Flex>
  </Container>
);
import NextImage from 'next/image';
import {
  Avatar,
  Badge,
  Box,
  Container,
  Flex,
  Group,
  Paper,
  PaperProps,
  Stack,
  Text,
} from '@mantine/core';
import { JumboTitle } from '../Jumbo-Title/jumbo-title';
import classes from './testimonial-01.module.css';

type Testimonial = {
  quote: string;
  name: string;
  imageUrl: string;
  company: string;
  alt: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: `
        Thanks very much mate, the entire Asset Alley team have been great for us & really appreciate the extra support small business like us particularly need.
    `,

    name: "Jimmy O'Rourke",
    imageUrl: '',
    company: 'COMPANY',
    alt: "Jimmy O'Rourke",
  },
];

const TestimonialCell = ({
  quote,
  name,
  imageUrl,
  company,
  alt,
  ...paperProps
}: PaperProps & Testimonial) => (
  <Paper
    component="figure"
    radius="xl"
    p="xl"
    mx={0}
    w={320}
    my={0}
    className={classes.cell}
    {...paperProps}
  >
    <Flex direction="column" justify="space-between" h="100%">
      <Text component="blockquote">"{quote}"</Text>
      <Group mt="xl" align="start">
        <Avatar radius="xl" size="lg">
          <NextImage src={imageUrl} alt={alt} fill />
        </Avatar>
        <Box>
          <Text fz="lg" fw={500}>
            {name}
          </Text>
          <Text c="dimmed">{company}</Text>
        </Box>
      </Group>
    </Flex>
  </Paper>
);

export const Testimonial01 = () => (
  <Container
    bg="var(--mantine-color-body)"
    py={{
      base: 'calc(var(--mantine-spacing-lg) * 4)',
      xs: 'calc(var(--mantine-spacing-lg) * 5)',
      lg: 'calc(var(--mantine-spacing-lg) * 6)',
    }}
    fluid
  >
    <Container size="md">
      <Stack gap="xs" align="center">
        <Badge className={classes.badge} size="xl" mb="lg">
          Testimonials
        </Badge>
        <JumboTitle order={2} fz="md" ta="center" style={{ textWrap: 'balance' }} mb="sm">
          What our customers are saying
        </JumboTitle>
        {/* <Text c="dimmed" ta="center" fz="xl" style={{ textWrap: 'balance' }}>
          Real stories from the people who know us best
        </Text> */}
      </Stack>
    </Container>
    <Container size="xl">
      <Flex
        mt="calc(var(--mantine-spacing-lg) * 3)"
        gap="calc(var(--mantine-spacing-sm) * 3)"
        wrap="wrap"
        justify="center"
      >
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCell key={testimonial.name} {...testimonial} />
        ))}
      </Flex>
    </Container>
  </Container>
);

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
  {
    quote:
      "I was skeptical at first, but after using this tool for a few weeks, I'm a total convert. It's intuitive, powerful, and has become an essential part of my creative process.",
    name: 'Michael Rodriguez',
    imageUrl: '',
    handle: '@mrodriguez',
    alt: 'Michael Rodriguez',
  },
  {
    quote:
      'As someone who juggles multiple projects, having a reliable and efficient solution like this has been a game-changer. It streamlines so many tasks and helps me stay organized.',
    name: 'Emily Nakamura',
    imageUrl: '',
    handle: '@enakamura',
    alt: 'Emily Nakamura',
  },
  {
    quote:
      "I've been blown away by the quality of customer support. Whenever I have a question or run into an issue, the team is incredibly responsive and always goes above and beyond to find a solution.",
    name: 'Fatima Hassan',
    imageUrl: '',
    handle: '@fatimah',
    alt: 'Fatima Hassan',
  },
  {
    quote:
      "This product strikes the perfect balance between ease-of-use and advanced functionality. It's accessible for beginners but has the depth to grow with you as your needs evolve.",
    name: 'Priya Patel',
    imageUrl: '',
    handle: '@priya',
    alt: 'Priya Patel',
  },
  {
    quote:
      'Collaborating with my team has never been smoother thanks to this platform. We can seamlessly share ideas, provide feedback, and keep projects moving forward.',
    name: 'Liam Novak',
    imageUrl: '',
    handle: '@liamnovak',
    alt: 'Liam Novak',
  },
  {
    quote:
      'I never realized how much time I was wasting on repetitive tasks until I started using this tool. Now I can focus on the creative work that truly matters to me.',
    name: 'Olivia Torres',
    imageUrl: '',
    handle: '@oliviatorres',
    alt: 'Olivia Torres',
  },
  {
    quote:
      'As a small business owner, I wear many hats and every minute counts. This product has been a lifesaver in automating processes and keeping me organized so I can focus on growing my company.',
    name: 'Marcus Johnson',
    imageUrl: '',
    handle: '@marcus',
    alt: 'Marcus Johnson',
  },
  {
    quote:
      "I've tried countless products promising to simplify my work, but this one actually delivers. The thoughtful design and robust features set it apart from the rest.",
    name: 'David Okafor',
    imageUrl: '',
    handle: '@davidokafor',
    alt: 'David Okafor',
  },
];

const TestimonialCell = ({
  quote,
  name,
  imageUrl,
  handle,
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
          <Text c="dimmed">{handle}</Text>
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
        <Text c="dimmed" ta="center" fz="xl" style={{ textWrap: 'balance' }}>
          Real stories from the people who know us best
        </Text>
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

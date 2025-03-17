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
    company: 'Worksite Insight',
    alt: "Jimmy O'Rourke",
  },
  {
    quote:`
    Just wanted to say a huge thank you Asset Alley team for your help I needed to grow my business. You answered all my questions and I was very happy with the quick and transparent process. Look forward to working together in the future!`,
    name:'George Ektoros',
    imageUrl: '',
    company: 'GPS Vehicle Inspections',
    alt: 'George Ektoros'

  }
];

export const Testimonial01 = () => (
  <Container
    bg="var(--mantine-color-body)"
    py={{
      base: 'calc(var(--mantine-spacing-lg) * 4)',
      xs: 'calc(var(--mantine-spacing-lg) * 5)',
      lg: 'calc(var(--mantine-spacing-lg) * 4)',
    }}
    fluid
  >
    <Container size="md">
      <Stack gap="xs" align="center">
        <JumboTitle order={2} fz="md" ta="center" style={{ textWrap: 'balance' }} mb="sm">
          What our customers are saying
        </JumboTitle>
        {/* <Text c="dimmed" ta="center" fz="xl" style={{ textWrap: 'balance' }}>
          Real stories from the people who know us best
        </Text> */}
      </Stack>
    </Container>
  </Container>
);

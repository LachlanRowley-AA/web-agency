"use client";

import { useState } from 'react';
import { JumboTitle } from '../Jumbo-Title/jumbo-title';
import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  ContainerProps,
  Flex,
  Image,
  Stack,
  Text,
  TextInput,
  rem,
} from '@mantine/core';
import { motion } from 'motion/react';
import NextImage from 'next/image';
import classes from './hero-03.module.css';
import clsx from 'clsx';

const INTEREST_RATE = 15.95 / 100; // 15.95% annual interest
const WEEKS_IN_YEAR = 52;
const LOAN_TERM_YEARS = 5; // Placeholder loan term in years

const calculateWeeklyRepayment = (loanAmount : number) => {
  if (loanAmount <= 0) return 0;
  const totalPayments = LOAN_TERM_YEARS * WEEKS_IN_YEAR;
  const weeklyRate = INTEREST_RATE / WEEKS_IN_YEAR;
  return (
    loanAmount *
    ((weeklyRate * ((weeklyRate + 1) ** totalPayments)) /
      (((weeklyRate + 1) ** totalPayments) - 1))
  ).toFixed(2);
};

export const Hero03 = ({
  description = 'AssetAlley will help your clients access 5 year loans to pay for YOUR services so you get paid NOW',
  ...containerProps
}) => {
  const [loanAmount, setLoanAmount] = useState(20000);
  const weeklyRepayment = calculateWeeklyRepayment(loanAmount);

  return (
    <Container pos="relative" h="50vh" mah={850} style={{ overflow: 'clip' }} fluid>
      <Container component="section" h="50vh" mah={850} mx="auto" size="xl" {...containerProps}>
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
        <Box pos="absolute" top={0} left={0} h="100%" w="100%" className={classes['vertical-backdrop']} />
        <Flex h="100%" align="center" pos="relative" justify="center">
          <Stack pt={{ base: 'md', sm: 0 }} maw="var(--mantine-breakpoint-md)" align="center" gap="md" style={{ zIndex: 1 }}>
            <motion.div initial={{ opacity: 0.0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeInOut' }} viewport={{ once: true }}>
              <JumboTitle ta="center" order={1} fz="lg" mb="md" style={{ textWrap: 'balance' }}>
                <span style={{ color: '#01E194' }}>STOP PRICE OBJECTIONS</span>
              </JumboTitle>
              <JumboTitle ta="center" order={1} fz="md" style={{ textWrap: 'balance' }}>
                DON'T SAY $<TextInput
  value={loanAmount}
  onChange={(e) => setLoanAmount(Number(e.target.value))}
  size='xl'
  variant='unstyled'
  style={{
    width: '250px', // Ensure it has enough width
    minWidth: '200px', // Prevent shrinking
    display: 'inline-flex', // Allows it to align better with text
    textAlign: 'center',
  }}
  styles={{
    input: {
      color: "var(--mantine-color-dark-2)",
      fontSize: 'clamp(42px, calc(2rem + 3vw), 70px)', // Applied clamp directly to width
    },
    root: {
      width: 'clamp(43px, calc(2rem + 3vw), 71px)', // Optional: for the root element (wrapper)
    },
  }}
/>
              </JumboTitle>
              <JumboTitle ta="center" order={1} fz="md" style={{ textWrap: 'balance' }}>
                SAY <span style={{ color: '#01E194' }}>${weeklyRepayment}</span> A WEEK
              </JumboTitle>

            </motion.div>
            <motion.div initial={{ opacity: 0.0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }} viewport={{ once: true }}>
              <Text ta="center" maw="var(--mantine-breakpoint-xs)" fz="xl" style={{ textWrap: 'balance' }}>
                {description}
              </Text>
              
            </motion.div>
          </Stack>
        </Flex>
      </Container>
    </Container>
  );
};

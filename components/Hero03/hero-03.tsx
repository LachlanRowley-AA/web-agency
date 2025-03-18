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
import { IconPencil } from '@tabler/icons-react';

const INTEREST_RATE = 15.95 / 100; // 15.95% annual interest
const WEEKS_IN_YEAR = 52;
const LOAN_TERM_YEARS = 5; // Placeholder loan term in years

import localFont from 'next/font/local'

const font = localFont({ src: '../../public/Cera Pro Regular.otf'});
const boldFont = localFont({ src: '../../public/Cera Pro Bold.otf'});

const calculateWeeklyRepayment = (loanAmount : number) => {
  if (loanAmount <= 0) {return 0};
  const totalPayments = LOAN_TERM_YEARS * WEEKS_IN_YEAR;
  const weeklyRate = INTEREST_RATE / WEEKS_IN_YEAR;
  return (
    loanAmount *
    ((weeklyRate * ((weeklyRate + 1) ** totalPayments)) /
      (((weeklyRate + 1) ** totalPayments) - 1))
  ).toFixed(2);
};

export const Hero03 = ({
  description = 'Asset Alley will help your clients access 5 year loans to pay for YOUR services so you get paid NOW',
  ...containerProps
}) => {
  const [loanAmount, setLoanAmount] = useState(20000);
  const weeklyRepayment = calculateWeeklyRepayment(loanAmount);

  const handleInputChange = (e : any) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Allow only numbers
      setLoanAmount(Number(value));
    }
  };

  return (
    <Container pos="relative" h="70vh" mah={600} fluid>
      <Container
        component="section"
        h="60vh"
        mah={500}
        mx="auto"
        size="xl"
        style={{ width: 'fit-content', maxWidth: '100%', minWidth: '300px' }}
        {...containerProps}
      >
        <Flex h="100%" align="center" justify="center">
          <Stack pt={{ base: 'md', sm: 0 }} align="center" gap="md" style={{ flexGrow: 1, width: '100%' }}>
            <motion.div initial={{ opacity: 0.0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <JumboTitle ta="center" order={2} fz="md" mb="md" style = {{ fontFamily: boldFont.style.fontFamily }}>

              <span style={{ color: 'var(--mantine-color-black)' }}>Web Design and App Development Agencies</span>

                <span style={{ color: '#01E194' }}><br/>Stop Price Objections </span><br/>

              </JumboTitle>
              <JumboTitle ta="center" order={1} fz="md" style= {{ fontFamily: font.style.fontFamily }}>
              Don't Say&nbsp;  
              <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ fontSize: 'clamp(42px, 5vw, 70px)', color: 'var(--mantine-color-dark-2)' }}>$</span>
                <TextInput
                  value={loanAmount}
                  onChange={handleInputChange}
                  size="xl"
                  variant="unstyled"
                  style={{
                    width: 'clamp(150px, 30vw, 350px)', 
                    minWidth: '200px',
                    textAlign: 'center',
                    display: 'inline-flex',
                    borderBottom: '2px solid var(--mantine-color-dark-2)', // Underline added here
                  }}
                  styles={{
                    input: {
                      color: "var(--mantine-color-dark-2)",
                      fontSize: 'clamp(42px, 5vw, 70px)',
                      textAlign: 'center',
                    },
                  }}
                />
                <IconPencil/>
              </span>
            </JumboTitle>

              <JumboTitle ta="center" order={1} fz="md">
                Say <span style={{ color: '#01E194' }}>${weeklyRepayment}</span> a Week
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

'use client';

import {
  Accordion,
  AccordionProps,
  Container,
  ContainerProps,
  Flex,
  Image,
  MantineBreakpoint,
  MantineRadius,
  Text,
  TextProps,
  Title,
} from '@mantine/core';
import { IconChevronUp } from '@tabler/icons-react';
import { ReactNode, useState } from 'react';
import classes from './faq.module.css';
import { JumboTitle } from '../Jumbo-Title/jumbo-title';

type Item = {
  /** The value of the accordion item. */
  value: string;

  /** The title of the feature. */
  title: ReactNode;

  /** The description of the feature. */
  description: ReactNode;

  /** Props to be passed to the description text. */
  descriptionProps?: TextProps;

  /** The image of the feature. */
//   image: {
//     src: string;
//     alt: string;
//     w: number;
//     h: number;
//   };
};

// type image = {
//     src: string,
//     alt: string;
//     w: number;
//     h: number;
// };

type FeatureProps = {
  /** Props to be passed to the accordion component. */
  accordionProps?: AccordionProps;

  /** The breakpoint at which the accordion collapses. */
  collapseBreakpoint?: MantineBreakpoint;

  /** Props to be passed to the container component. */
  containerProps?: ContainerProps;

  /** The border radius of the container. */
  radius?: MantineRadius;
};


const faqItems = [
    {
        value: 'item1',
        title: 'What is the financing term?',
        description: '5 years with the option to payout or make lump sum contributions with no penalties',
    },
    {
        value: 'item2',
        title: 'How fast do I get the money?',
        description: 'Depending on the client intent levels, the funds can be paid within 2-3 business days',
    },
    {
        value: 'item3',
        title: 'How will I get paid?',
        description: 'The financier will transfer funds to you directly'
    },
    {
        value: 'item4',
        title: 'What happens if a client stops paying?',
        description: 'Nothing happens to you; you keep your money'
    },
    {
        value: 'item5',
        title: 'Is there security over the IP?',
        description: 'There is no security over the IP'
    },
    {
        value: 'item6',
        title: 'Do we run a credit check on the customer?',
        description: "The credit checks we run are considered soft checks which don't impact the customer's credit score. \n Once the funder is 100% set opn the deal, they will run their own credit check"
        
    }
]

const mainImage = 
    {
        src: "logo-wireframe.png",
        alt: 'logo'
    }


export const FAQ = ({
  accordionProps,
  collapseBreakpoint = 'sm',
  containerProps,

}: FeatureProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(faqItems[0].value);
  const maxImageHeight = '';
  return (
    <Container
      bg="var(--mantine-color-black)"
      fluid
      className={classes.container}
      size="lg"
      py="lg"
      styles={{
        root: {
          overflow: 'hidden',
        },
      }}
      {...containerProps}
    >
      <Flex
        justify="space-between"
        gap="calc(var(--mantine-spacing-lg) * 3)"
        p={{
          base: 0,
          sm: 'calc(var(--mantine-spacing-lg) * 2)',
        }}
        wrap={{
          base: 'wrap',
          lg: 'nowrap',
        }}
        maw="100%"
      >
        <Flex justify="center" align="center">
          <Accordion
            classNames={classes}
            chevron={<IconChevronUp color="var(--mantine-color-dimmed)" size={24} />}
            chevronSize={24}
            value={selectedValue}
            onChange={(value) => {
              if (value === null) {return};
              setSelectedValue(value);
            }}
            styles={{
              control: {
                height: 120,
              },
            }}
            {...accordionProps}
          >
            {faqItems.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.Control>
                  <Title c="var(--mantine-color-white)" order={1} visibleFrom='md'>
                    {item.title}
                  </Title>
                  <Title c="var(--mantine-color-white)" order={3} hiddenFrom='md'>
                    {item.title}
                  </Title>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text
                    fz={{
                      base: 'sm',
                      sm: 'md',
                    }}
                    c="var(--mantine-color-white)"
                  >
                    {item.description}
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Flex>
        <Flex visibleFrom={collapseBreakpoint} maw="60%" align="center" h={maxImageHeight}>
          {faqItems.map((item) => (
            <Flex
              key={item.value}
              visibleFrom={collapseBreakpoint}
              justify="flex-start"
              align="center"
              ml="xl"
              style={{
                display: selectedValue === item.value ? 'initial' : 'none',
              }}
            >
              <Image {...mainImage} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};
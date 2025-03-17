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
        title: 'What is the financing term',
        description: '5 year term',
    },
    {
        value: 'item2',
        title: 'How fast do I get the money',
        descritpion: 'Straight away'
    },
    {
        value: 'item3',
        title: 'What happens if a client stops paying',
        description: 'Nothing happens to you; you keep your money'
    },
    {
        value: 'item4',
        title: 'Is there security over the IP',
        description: ''
    }
]

const mainImage = 
    {
        src: "logo-wireframe.png",
        alt: 'logo'
    }


export const FAQ = ({
  accordionProps,
  collapseBreakpoint = 'md',
  containerProps,
  items = faqItems,
  radius = 'lg',

}: FeatureProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(items[0].value);
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
              if (value === null) return;
              setSelectedValue(value);
            }}
            styles={{
              control: {
                height: 120,
              },
            }}
            {...accordionProps}
          >
            {items.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.Control>
                  <Title c="var(--mantine-color-white)" order={1} fz="xxl">
                    {item.title}
                  </Title>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text
                    fz={{
                      base: 'sm',
                      sm: 'md',
                    }}
                    {...item.descriptionProps}
                    c="var(--mantine-color-white)"
                  >
                    {item.description}
                  </Text>
                  <Image
                    my="xl"
                    w="100%"
                    h="auto"
                    hiddenFrom={collapseBreakpoint}
                    alt={mainImage.alt}
                    src={mainImage.src}
                  />
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Flex>
        <Flex visibleFrom={collapseBreakpoint} maw="60%" align="center" h={maxImageHeight}>
          {items.map((item) => (
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
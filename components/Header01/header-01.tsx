'use client';

import {
    Anchor,
    Burger,
    Button,
    Container,
    ContainerProps,
    Flex,
    Group,
    MantineBreakpoint,
    MantineRadius,
    Text,
} from '@mantine/core';

import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import NextLink from 'next/link';
import classes from './header-01.module.css';
import Image from 'next/image';

export type HeaderLink = {
    label: string;
    href: string;
}

const HEADER_LINKS: HeaderLink[] = [
    { label: 'Home', href: '/'},
    { label: 'Benefits', href: '/benefits'},
    { label: 'Contact Us', href: '/contact'}
];

type Header01Props = ContainerProps & {
    /** Logo to display in the header */
    logo?: React.ReactNode;
  
    /** Links to display in the header */
    links?: HeaderLink[];
  
    /** Title for the call to action button */
    callToActionTitle?: string;
  
    /** URL for the call to action button */
    callToActionUrl?: string;
  
    /** Callback for when the menu is toggled */
    onMenuToggle?: () => void;
  
    /** Whether the menu is open */
    isMenuOpen?: boolean;
  
    /** Breakpoint at which the menu is displayed */
    breakpoint?: MantineBreakpoint;
  
    /** Border radius of the header */
    radius?: MantineRadius | number;
};
  
export const Header01 = ({
    style,
    breakpoint = 'xs',
    logo = (
        <Image 
            src="/Asset Alley Logo_ColourScreenUse.svg"
            alt="Asset Alley Logo"
            width={150} // Adjust size accordingly
            height={50}
        />
    ),
    callToActionTitle = 'Enquire Now',
    callToActionUrl = '#',
    links = HEADER_LINKS,
    onMenuToggle,
    isMenuOpen,
    h = 60,
    radius = 10,
    ...containerProps
  }: Header01Props) => (
    <Container
        className={classes.container}
        component="header"
        style={{ borderRadius: radius, ...style }}
        w={{ base: '100%', [breakpoint]: 'fit-content' }}
        h={h}
        {...containerProps}
    >
    <Flex
        justify="space-between"
        align="center"
        h="100%"
        style={{ overflow: 'hidden' }}
        gap="xs"
        wrap="nowrap"
    >
    <Group gap={0} style={{ flexShrink: 0 }}>
          {logo}
    </Group>
    <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 'fit-content', opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true }}
    >
        <Flex
            flex={1}
            justify="center"
            px="lg"
            h="100%"
            align="center"
            wrap="nowrap"
            visibleFrom={breakpoint}
            gap="lg"
            className={classes['link-container']}
          >
            {links.map((link) => (
                <Anchor
                    key={link.href}
                    className={classes.link}
                    href={link.href}
                    component={NextLink}
                    td="none"
                >
                    {link.label}
                </Anchor>
            ))}
        </Flex>
    </motion.div>
        <Button
            component={NextLink}
            href={callToActionUrl}
            className={classes.cta}
            radius="xl"
            rightSection={<IconArrowRight size={16} />}
            style={{ flexShrink: 0 }}
            >
            {callToActionTitle}
        </Button>
    </Flex>
    </Container>
);
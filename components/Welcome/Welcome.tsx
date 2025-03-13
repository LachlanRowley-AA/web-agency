import { Anchor, Text, Flex, Container } from '@mantine/core';
import Image from 'next/image';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Container fluid p="md" style={{ backgroundColor: '#f8f9fa', height: 60 }}>
      <Flex justify="space-between" align="center" h="100%">
        <Image 
          src="/Asset Alley Logo_ColourScreenUse.svg" 
          alt="Asset Alley Logo" 
          width={120} 
          height={40} 
        />
        <Anchor href="https://mantine.dev/guides/next/" size="lg" color="blue">
          Learn More
        </Anchor>
      </Flex>
    </Container>
  );
}

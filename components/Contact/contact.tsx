'use client';

import { useState, useEffect } from 'react';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import {
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  Paper,
  Text,
  Flex,
  Avatar,
  Stack
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { JumboTitle } from '../Jumbo-Title/jumbo-title';
import NextImage from 'next/image';
import { InlineWidget } from 'react-calendly';
import classes from './contact.module.css';

const checkboxQs = [
  { name: 'Are your price points over $15,000' },
  { name: 'Do you offer your own payment plans' }
];

export function AuthenticationForm({
}) {
  const [loading, setLoading] = useState(false);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      contact: false,
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    form.setFieldValue('ref', params.get('ref'));
  }, []);

  const handleCheckboxChange = (value : any) => {
    setSelectedCheckboxes(value);
  };

  return (
    <div style={{ minHeight: '65vh', backgroundColor: '#f4f4f4', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <Paper p="lg" shadow="xl" radius="md" style={{ backgroundColor: 'white', width: '100%', maxWidth: 1200 }}>
        <Flex>
          <div style={{ flex: 1, paddingRight: '20px', display: 'flex', flexDirection: 'column' }}>
            <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} mb="lg">
              Book a Call With Our Director
            </JumboTitle>
                <LoadingOverlay visible={loading} />
                <div style={{ minHeight: '100px' }}>
                  <Checkbox.Group value={selectedCheckboxes} onChange={handleCheckboxChange}>
                    <Stack gap='xs'>
                      {checkboxQs.map((item) => (
                        <Checkbox.Card className={classes.root} radius="md" value={item.name} key={item.name}>
                          <Group wrap="nowrap" align="flex-start">
                            <Checkbox.Indicator />
                            <div>
                              <Text className={classes.label}>{item.name}</Text>
                            </div>
                          </Group>
                        </Checkbox.Card>
                      ))}
                    </Stack>
                  </Checkbox.Group>
                </div>
                <div style={{ marginTop: '10px', alignItems: 'center', gap: '10px' }}>
                <NextImage src='/louie.jpg' width={200} height={200} alt='Louie Dib' style={{ objectFit: 'cover', borderRadius: '100px' }} />
                <NextImage src='/bba.png' width={100} height={100} alt='BBA Logo' />
              </div>
          </div>
          <div style={{ flex: 1.5, minWidth: '50%', visibility: selectedCheckboxes.length === checkboxQs.length ? 'visible' : 'hidden', height: selectedCheckboxes.length === checkboxQs.length ? 'auto' : '0' }}>
            {selectedCheckboxes.length === checkboxQs.length && (
              <InlineWidget url='https://calendly.com/lachlan-assetalley/30min' />
            )}
          </div>
        </Flex>
      </Paper>
    </div>
  );
}

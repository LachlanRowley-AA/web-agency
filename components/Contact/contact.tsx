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
import { createClient } from '@supabase/supabase-js';
import validator from 'validator';
import NextImage from 'next/image';
import { InlineWidget } from 'react-calendly';
import classes from './contact.module.css';

const supabase = createClient("https://hfsysehrdshrbtmjsgcx.supabase.co", "YOUR_SUPABASE_KEY");

const checkboxQs = [
  { name: 'Are your price points over $15,000' },
  { name: 'Do you offer your own payment plans' }
];

export function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style,
}) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleCheckboxChange = (value) => {
    setSelectedCheckboxes(value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    let hasError = false;

    if (!form.values.firstName.trim()) {
      form.setFieldError('firstName', 'First name is required');
      hasError = true;
    }

    if (!form.values.lastName.trim()) {
      form.setFieldError('lastName', 'Last name is required');
      hasError = true;
    }

    if (!validator.isEmail(form.values.email)) {
      form.setFieldError('email', 'Invalid email address');
      hasError = true;
    }

    if (!form.values.company.trim()) {
      form.setFieldError('company', 'Company is required');
      hasError = true;
    }

    if (!validator.isMobilePhone(form.values.phone, 'en-AU')) {
      form.setFieldError('phone', 'Invalid Australian phone number');
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    await supabase.from('enquiries').insert({
      first_name: form.values.firstName,
      last_name: form.values.lastName,
      company: form.values.company,
      phone: form.values.phone,
      email: form.values.email,
      referral: form.values.ref,
    });

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '65vh', backgroundColor: '#f4f4f4', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <Paper p="lg" shadow="xl" radius="md" style={{ backgroundColor: 'white', width: '100%', maxWidth: 1200 }}>
        <Flex>
          <div style={{ flex: 1, paddingRight: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <JumboTitle order={3} fz="xs" ta="center" style={{ textWrap: 'balance' }} mb="sm">
              Book a Call With Our Director
            </JumboTitle>
            {submitted ? (
              <Flex justify="center" align="center" direction="column" py="xl">
                <IconCircleCheckFilled size={48} color="green" />
                <Text mt="md" size="lg" c="green">
                  Thank you. We'll be in touch soon!
                </Text>
              </Flex>
            ) : (
              <form onSubmit={form.onSubmit(handleSubmit)}>
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
                <div style={{ marginTop: '30px', flex: 1, height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <NextImage src='/louie.jpg' width={200} height={200} alt='Louie Dib' style={{ objectFit: 'cover', borderRadius: '100px' }} />
                </div>
                <Text style={{ textAlign: 'center', marginTop: '10px' }}>Louie Dib</Text>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                  <NextImage src='/bba.png' width={100} height={100} alt='BBA Logo' />
                </div>
              </form>
            )}
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

'use client';

import { useState, useEffect } from 'react';
import { IconAt, IconHash, IconCircleCheckFilled } from '@tabler/icons-react';
import {
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  Paper,
  Text,
  TextInput,
  Flex
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { JumboTitle } from '../Jumbo-Title/jumbo-title';
import { createClient } from '@supabase/supabase-js';
import validator from 'validator';

const supabase = createClient("https://hfsysehrdshrbtmjsgcx.supabase.co", "YOUR_SUPABASE_KEY");

export interface AuthenticationFormProps {
  noShadow?: boolean;
  noPadding?: boolean;
  noSubmit?: boolean;
  style?: React.CSSProperties;
}

export function AuthenticationForm({
  noShadow,
  noPadding,
  noSubmit,
  style,
}: AuthenticationFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

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

  const [ref, setReferral] = useState<string | null>(null);

  useEffect(() => {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    setReferral(params.get('ref'));
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
  
    let hasError = false;
    if (form.values.contact === false) {
      form.setFieldError('contact', 'Please agree');
      hasError = true;
    }

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
  
    await submitFormAPI();
    setLoading(false);
    setSubmitted(true);
  };
  
  async function submitFormAPI() {
    await supabase.from('enquiries').insert({
      first_name: form.values.firstName,
      last_name: form.values.lastName,
      company: form.values.company,
      phone: form.values.phone,
      email: form.values.email,
      referral: ref,
    });
  }

  return (
    <div style={{ height: '65vh', backgroundColor: '#f4f4f4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper p="lg" shadow="xl" radius="md" style={{ backgroundColor: 'white', width: '100%', maxWidth: 600 }}>
        <JumboTitle order={2} fz="sm" ta="center" style={{ textWrap: 'balance' }} mb="sm">
          Enquire Now
        </JumboTitle>
        <JumboTitle order={2} fz="xxs" ta="center" style={{ textWrap: 'balance' }} mb="sm">
          And we'll be in touch shortly
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
            <Group grow>
              <TextInput data-autofocus required placeholder="Your first name" label="First name" {...form.getInputProps('firstName')} />
              <TextInput required placeholder="Your last name" label="Last name" {...form.getInputProps('lastName')} />
            </Group>
            <TextInput mt="md" required placeholder="Your company" label="Company" {...form.getInputProps('company')} />
            <TextInput mt="md" required placeholder="Your phone Number" label="Phone" leftSection={<IconHash size={16} stroke={1.5} />} {...form.getInputProps('phone')} />
            <TextInput mt="md" required placeholder="Your email" label="Email" leftSection={<IconAt size={16} stroke={1.5} />} {...form.getInputProps('email')} />
            <Checkbox mt="xl" label="I agree to be contacted by a member of Asset Alley" {...form.getInputProps('contact', { type: 'checkbox' })} />
            {error && <Text c="red" size="sm" mt="sm">{error}</Text>}
            {!noSubmit && (
              <Group justify="center" mt="xl">
                <Button color="#01E194" type="submit">Submit</Button>
              </Group>
            )}
          </form>
        )}
      </Paper>
    </div>
  );
}

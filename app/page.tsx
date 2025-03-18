import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Hero03 } from '@/components/Hero03/hero-03';
import { Testimonial01 } from '@/components/Testimonial/testimonial-01';
import { Header01 } from '@/components/Header01/header-01';
import { Feature02 } from '@/components/Feature-02/feature-02';
import { AuthenticationForm } from '@/components/Contact/contact';
import { Logos03 } from '@/components/AnimatedLogos/AnimatedLogos';
import { FAQ } from '@/components/FAQ/faq';
import { Difference } from '@/components/Difference/difference';


export default function HomePage() {
  return (
    <>
      <section><Header01/></section>      
      <section id='home'><Hero03/></section>
      <section id='benefits'><Feature02/></section>
      <section><Difference/></section>
      <section><FAQ/></section>
      <section id='testimonials'><Testimonial01/></section>
      <section><Logos03/></section>
      <section id='contact'><AuthenticationForm/></section>
    </>
  );
}

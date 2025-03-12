import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Hero03 } from '@/components/Hero03/hero-03';
import { Testimonial01 } from '@/components/Testimonial/testimonial-01';
import { Header01 } from '@/components/Header01/header-01';

export default function HomePage() {
  return (
    <>
      <Header01/>
      <Welcome />
      <Hero03/>
      <Testimonial01/>
    </>
  );
}

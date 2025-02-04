import Heading from '@/components/Heading';
import Container from '../Container';
import NewsletterForm from '@/components/NewsletterForm';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[url('/assets/arced_bg.webp')] bg-top bg-no-repeat bg-cover mt-24">
      <Container className="flex flex-col gap-4 text-white md:items-center md:text-center">
        <Heading className="text-white">Introducing Mindset Moment </Heading>
        <p className="max-w-[970px] text-xl">
          Your daily mindset newsletter packed with practical insights to help
          busy professionals like you cultivate resilience, focus, and personal
          growth—one minute a day.
        </p>

        <NewsletterForm />

        <Link href="/" className="underline">
          Take a look
        </Link>
      </Container>

      <div className="py-9 px-4 sm:text-center text-white border-t-[0.4px] border-white">
        <p>
          &copy; Bottled Clarity, {new Date().getFullYear()} - All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

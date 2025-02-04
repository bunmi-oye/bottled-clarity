import Wrapper from '@/layout/Wrapper';
import Container from '@/layout/Container';
import { lora } from '@/app/fonts';
import WaitListForm from '../WaitListForm';

const HeroBanner = () => {
  return (
    <Wrapper className="h-[900px] bg-[url('/assets/gate.webp')] bg-center bg-no-repeat bg-cover 2xl:h-screen">
      <Container className="flex flex-col items-center gap-8">
        <div className="text-primary max-w-[700px] flex flex-col md:items-center gap-2">
          <h1 className={[lora.className, 'text-4xl font-normal'].join(' ')}>
            Your Clarity Journey is <span className="font-bold">almost</span>{' '}
            here!
          </h1>
          <p className="md:text-center text-xl leading-8 ">
            Life can feel overwhelming, uncertain, or stuck. But deep down, you
            know there&apos;s something more—a clearer direction, a deeper
            purpose, a better you. We&apos;re here to guide you toward clarity.
            And guess what?
          </p>
          <p className="font-bold">WE ARE LAUNCHING SOON!</p>
        </div>

        <WaitListForm />
      </Container>
    </Wrapper>
  );
};

export default HeroBanner;

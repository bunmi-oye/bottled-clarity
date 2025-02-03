import Wrapper from '@/layout/Wrapper/Wrapper';
import Container from '@/layout/Container/Container';
import Heading from '../Heading';
import Step, { StepType } from '../Step';

const HowItWorks = () => {
  const steps: Omit<StepType, 'num'>[] = [
    {
      title: 'Take a quick assessment',
      content:
        'Start with our quick and insightful assessment—a tool designed to help you reflect, realign, and refocus. In just a few minutes, you’ll uncover valuable insights about where you are and where you’re meant to go.',
      image: '/assets/man_study.webp',
    },
    {
      title: 'Access our custom analysis framework',
      content:
        'Clarity isn’t a destination; it’s a journey. Once you’ve completed your assessment, you get to create a free account and access our detailed analysis framework complete with tools you need to make the required changes in your life.',
      image: '/assets/group_study.webp',
    },
  ];

  return (
    <Wrapper>
      <Container className="flex flex-col items-center gap-6 md:gap-[56px]">
        <Heading>How it works</Heading>

        {steps.map((step, index) => (
          <Step key={index} num={index + 1} {...step} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default HowItWorks;

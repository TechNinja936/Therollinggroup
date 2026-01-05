import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import ServiceOverview from '../components/ServiceOverview';
import WorkGallery from '../components/WorkGallery';
import MarketsServed from '../components/MarketsServed';
import WhyUs from '../components/WhyUs';
import TestimonialPreview from '../components/TestimonialPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServiceOverview />
      <WorkGallery />
      <MarketsServed />
      <WhyUs />
      <TestimonialPreview />
    </>
  );
}

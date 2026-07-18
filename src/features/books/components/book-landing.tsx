import { AboutSection } from "@/components/sections/about-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PreviewSection } from "@/components/sections/preview-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import type { BookProduct } from "@/types/product";

type BookLandingProps = {
  book: BookProduct;
};

export function BookLanding({ book }: BookLandingProps) {
  return (
    <>
      <HeroSection book={book} />
      <AboutSection book={book} />
      <BenefitsSection book={book} />
      <PreviewSection book={book} />
      <TestimonialsSection book={book} />
      <PricingSection book={book} />
      <FaqSection book={book} />
      <ContactSection />
    </>
  );
}

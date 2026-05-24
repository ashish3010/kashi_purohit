import { Container } from "@/features/common/Container";
import { SectionHeading } from "@/features/common/SectionHeading";
import { ServiceCard } from "@/features/services/ServiceCard";
import { services } from "@/features/services/services.data";

export function ServicesSection() {
  return (
    <section id="services" className="bg-kashi-cream py-14">
      <Container>
        <SectionHeading eyebrow="Ritual Excellence" title="Our Divine Services" />

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

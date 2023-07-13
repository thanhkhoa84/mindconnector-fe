import Container from "@/components/Container";
import ServicesCardList from "@/components/business/ServicesCardList";

export default function BusinessServices({ heading, services }) {
  return (
    <section className="mt-8 overflow-hidden py-16">
      <Container>
        <h2 className="mx-auto mb-4 mt-0 text-center text-4xl font-black leading-[1.3] dark:text-white">
          {heading}
        </h2>
        <div className="mt-12">
          <ServicesCardList services={services.data} />
        </div>
      </Container>
    </section>
  );
}

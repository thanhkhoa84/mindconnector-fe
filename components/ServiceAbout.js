import Container from "@/components/Container";

export default function ServiceAbout({ heading, text }) {
  return (
    <section className="dark relative flex origin-center flex-col items-center justify-center py-12 text-center text-white xl:py-24">
      <Container>
        {heading && (
          <h2 className="text-[25px] font-black dark:text-white md:text-4xl">
            {heading}
          </h2>
        )}
        {text && <p className="mt-8">{text}</p>}
      </Container>
    </section>
  );
}

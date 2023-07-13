import Image from "next/image";
import Container from "@/components/Container";
import TabPanels from "@/components/TabPanels";

const Approach = ({ approach, last }) => {
  const { heading, text, label } = approach;
  return (
    <div
      className={`
      relative flex-shrink flex-grow basis-full border-[#F5CBCC] pb-12 pl-8 md:border-l-0  md:pl-0 md:pr-6 md:pt-12
      ${!last ? "md:border-t" : ""}
      `}
    >
      <Image
        src="/img/icon-steps.svg"
        alt=""
        width={24}
        height={24}
        className="absolute left-[-12px] top-[-5px] w-[24px] md:left-[-5px] md:top-[-12px]"
      />
      <h4 className="mb-4 inline-block rounded-lg bg-purple p-3 py-1 text-sm font-bold text-white">
        {label}
      </h4>
      <h3 className="mb-4 text-xl font-black leading-none md:text-2xl md:leading-none">
        {heading}
      </h3>
      <p className="pr-4 leading-5">{text}</p>
    </div>
  );
};

export default function ProgramApproach({ approachs }) {
  return (
    <section className="md:pt-[4em]">
      <Container>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-full">
            <div className="flex flex-col justify-evenly pt-16 md:flex-row">
              {approachs.map((a, index) => {
                return (
                  <Approach
                    approach={a}
                    last={index == approachs.length - 1}
                    key={`approach-item-${index}`}
                  />
                );
              })}
            </div>
            <div className="mx-[-1em] flex items-center px-[1em] shadow-asideboxLight md:mx-0 md:h-[60px] md:rounded-xl">
              <TabPanels />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

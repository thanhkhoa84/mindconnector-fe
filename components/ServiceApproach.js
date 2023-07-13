import Image from "next/image";
import Container from "@/components/Container";

export default function ServiceApproach({ heading, approachs }) {
  return (
    <section className="dark:text-white">
      <Container>
        {heading && (
          <h2 className="mt-8 text-center text-[25px] font-black dark:text-white md:text-4xl">
            {heading}
          </h2>
        )}
        {approachs && (
          <div className="flex flex-col justify-evenly pt-16 md:flex-row">
            {approachs.map((a, idx) => {
              return (
                <div
                  key={`approach-${idx}`}
                  className={`
              relative flex-shrink flex-grow basis-full border-l border-[#F5CBCC] pb-12 pl-8 
              md:border-l-0  md:pl-0 md:pr-2 md:pt-12
              ${
                idx === approachs.length - 1
                  ? "border-l-0 md:border-t-0"
                  : "md:border-t"
              }
            `}
                >
                  <Image
                    src="/img/icon-steps.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="absolute left-[-12px] top-[-5px] w-[24px] md:left-[-5px] md:top-[-12px]"
                  />
                  {a.approach && (
                    <>
                      <h4 className="mb-4 inline-block rounded-lg bg-purple p-3 py-1 text-sm font-bold text-white">
                        {a.heading}
                      </h4>
                      <div className="leading-6 [&>ul>li+li]:mt-2 [&>ul>li]:list-outside [&>ul]:list-disc [&>ul]:pl-4">
                        <ul>
                          {a.approach.map((a, i) => {
                            return <li key={`item-${a}-${i}`}>{a.item}</li>;
                          })}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}

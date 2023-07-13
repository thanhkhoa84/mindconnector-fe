import Container from "@/components/Container";
import Image from "next/image";
import { RichText } from "@/lib/typo";
import { getStrapiMedia } from "@/lib/media";

export default function ProgramSchedule({ heading, text, icon, schedules }) {
  return (
    <section className="mt-12" id="schedule">
      <Container>
        <h2 className="mb-3 text-center text-[34px] font-black md:text-left">
          {heading}
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-[3] items-center justify-center text-center md:pr-12 md:text-left">
            {RichText(text)}
            <Image
              src={getStrapiMedia(icon)}
              width={488}
              height={328}
              alt=""
              className="mx-auto mt-12 block"
            />
          </div>
          <div className="flex-[5]">
            {schedules.map((s, index) => {
              return (
                <div key={s.text} className={`${index} != 0 ? "mt-8": ""`}>
                  <p className="font-bold">{s.text}</p>
                  <Image
                    src={getStrapiMedia(s.image)}
                    width={512}
                    height={175}
                    alt={s.text}
                    className="mt-4 w-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

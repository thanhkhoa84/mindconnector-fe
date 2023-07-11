import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { getStrapiMedia } from "@/lib/media";

export default function StudentHeading({ heading, text, image }) {
  return (
    <section>
      <header className={`relative bg-[#F9F1DD] py-[3em]`}>
        <div className="absolute inset-0">
          <Image
            alt=""
            src={getStrapiMedia(image)}
            width={1400}
            height={600}
            priority={true}
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="relative">
          <Container>
            <h2
              dangerouslySetInnerHTML={{
                __html: heading.replace(new RegExp("\r?\n", "g"), "<br />"),
              }}
              className="mx-auto mb-4 mt-0 text-center text-3xl font-black dark:text-white dark:text-white md:text-left md:text-6xl md:leading-[1.2]"
            ></h2>
            <p
              dangerouslySetInnerHTML={{
                __html: text.replace(new RegExp("\r?\n", "g"), "<br />"),
              }}
              className="text-center md:text-left"
            ></p>
          </Container>
        </div>
      </header>
    </section>
  );
}

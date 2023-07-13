import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { getStrapiMedia } from "@/lib/media";

export default function BusinessHeading({
  heading,
  text,
  backgroundImage,
  button,
}) {
  return (
    <section className="dark relative flex aspect-[375/461] origin-center flex-col items-center justify-end overflow-hidden bg-cover bg-center bg-no-repeat sm:aspect-[2/1] sm:justify-center lg:aspect-[3/1.2]">
      {backgroundImage.imageDesktop && (
        <Image
          src={getStrapiMedia(backgroundImage.imageDesktop)}
          alt=""
          width={1400}
          height={698}
          className="absolute inset-0 hidden h-full w-full object-cover sm:block"
        />
      )}
      {backgroundImage.imageMobile && (
        <Image
          src={getStrapiMedia(backgroundImage.imageMobile)}
          blurDataURL={getStrapiMedia(backgroundImage.imageMobile)}
          placeholder="blur"
          alt=""
          width={375}
          height={461}
          className="absolute inset-0 h-full w-full object-cover sm:hidden"
        />
      )}
      <div className="relative max-w-[800px] px-4 py-12 text-center dark:text-white sm:px-8">
        {heading && (
          <h2
            dangerouslySetInnerHTML={{
              __html: heading.replace(new RegExp("\r?\n", "g"), "<br />"),
            }}
            className="[&>span:inline-block] mt-8 text-3xl font-black md:text-5xl [&>span]:whitespace-nowrap"
          ></h2>
        )}
        {text && (
          <p
            dangerouslySetInnerHTML={{
              __html: text.replace(new RegExp("\r?\n", "g"), "<br />"),
            }}
            className="mt-4"
          ></p>
        )}
        {button && (
          <p className="mt-8">
            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
              type="button"
              className="min-w-[280px]"
            >
              <span className="btn-pink">{button.Link.title}</span>
            </button>
          </p>
        )}
      </div>
    </section>
  );
}

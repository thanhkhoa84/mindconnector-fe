import Container from "./Container";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/media";

const LogoList = ({ backgroundColor, title, list }) => {
  return (
    <section
      className={`
        p-4 ${backgroundColor ? "bg-['" + backgroundColor + "']" : "bg-white"}
        `}
    >
      <Container>
        <div className="flex flex-col">
          <header>
            <h2 className="mx-0 my-4 text-center text-base font-bold leading-4">
              {title}
            </h2>
          </header>
          <ul className="flex flex-row flex-wrap justify-between">
            {list.data.map((li, index) => {
              const { name, image } = li.attributes;
              return (
                <li
                  key={`logolist-${index}`}
                  className="flex w-1/2 items-center justify-center p-5 duration-500 md:w-1/5 lg:p-8"
                >
                  <Image
                    src={getStrapiMedia(image)}
                    alt={name}
                    blurDataURL={getStrapiMedia(image)}
                    placeholder="blur"
                    width={200}
                    height={200}
                    className="mx-auto h-full max-h-10 w-full max-w-full object-contain"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default LogoList;

import Container from "./Container";
import Image from "next/image";

const LogoList = ({ backgroundColor, title, list }) => {
  let images = [
    { url: "/img/logo-valoma.png", alt: "Valoma" },
    { url: "/img/logo-v.png", alt: "Valocen" },
    { url: "/img/logo-gdnn.png", alt: "GDNN" },
    { url: "/img/logo-vilas.png", alt: "Vilas" },
    { url: "/img/logo-gli.png", alt: "GLI" },
  ];
  return (
    <div
      className={`
        p-4
        ${backgroundColor ? "bg-['" + backgroundColor + "']" : "bg-white"}`}
    >
      <Container>
        <div className="flex flex-col">
          <header>
            <h2 className="mx-0 my-4 text-center text-base font-bold leading-4">
              {title}
            </h2>
          </header>
          <ul className="flex flex-row flex-wrap justify-between">
            {images.map((li, index) => {
              return (
                <li
                  key={`logolist-${index}`}
                  className="flex w-1/2 items-center justify-center p-5 duration-500 md:w-1/5 lg:p-8"
                >
                  <Image
                    src={images[index].url}
                    alt={images[index].alt}
                    blurDataURL={images[index].url}
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
    </div>
  );
};

export default LogoList;

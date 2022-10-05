import Container from "./Container";
import Image from "next/future/image";

const LogoList = ({ backgroundColor, title, list }) => {
  let images = [
    "/img/logo-valoma.png",
    "/img/logo-v.png",
    "/img/logo-gdnn.png",
    "/img/logo-vilas.png",
    "/img/logo-gli.png",
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
            <h2 className="my-4 mx-0 text-center text-base font-bold leading-4">
              {title}
            </h2>
          </header>
          <ul className="flex flex-row flex-wrap justify-between">
            {images.map((li, index) => {
              let imgSrc = images[index];
              return (
                <li
                  key={`logolist-${index}`}
                  className="lg:px-[10px]] relative flex w-1/2 items-center justify-center px-4 py-8 duration-500 sm:w-1/6 lg:py-[20px]"
                >
                  <Image
                    src={imgSrc}
                    alt=""
                    priority={true}
                    width={200}
                    height={200}
                    style={{}}
                    className="mx-auto block h-full max-h-8 max-w-full object-contain"
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

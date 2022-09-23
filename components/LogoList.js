import Container from "./Container";
import Image from "next/future/image";

const LogoList = ({ backgroundColor, title, list }) => {
  let images = ["/img/saatchi.svg", "/img/vlu.svg", "/img/ogilvy.svg"];
  return (
    <div
      className={`
        ${
          backgroundColor ? "bg-[" + backgroundColor + "]" : "bg-white/75 p-4"
        }`}
    >
      <Container>
        <div className="flex flex-col">
          <header>
            <h2 className="my-4 mx-0 text-center text-base font-bold leading-4">
              {title}
            </h2>
          </header>
          <ul className="flex flex-row flex-wrap justify-between">
            {list.map((li, index) => {
              let imgSrc = images[Math.floor(Math.random() * images.length)];
              return (
                <li
                  key={`logolist-${index}`}
                  className="lg:px-[10px]] relative flex w-1/2 items-center justify-center px-4 py-8 duration-500 sm:w-1/6 lg:py-[20px]"
                >
                  <Image
                    src={imgSrc}
                    alt=""
                    priority={true}
                    width={100}
                    height={100}
                    style={{}}
                    className="mx-auto block h-full max-h-8 max-w-full "
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

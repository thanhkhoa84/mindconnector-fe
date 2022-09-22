import Container from "./Container";
import Image from "next/image";

const LogoList = ({ backgroundColor, title, list }) => {
  let images = ["/img/saatchi.svg", "/img/vlu.svg", "/img/ogilvy.svg"];
  console.log(backgroundColor);
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
          <ul className="flex flex-row flex-wrap justify-center">
            {list.map((li, index) => {
              let imgSrc = images[Math.floor(Math.random() * images.length)];
              return (
                <li
                  key={`logolist-${index}`}
                  className="flex w-1/2 items-center justify-center p-4 duration-500 md:w-1/5 lg:p-[30px]"
                >
                  <img
                    src={imgSrc}
                    alt=""
                    className="mx-auto block h-full max-h-8 object-contain"
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

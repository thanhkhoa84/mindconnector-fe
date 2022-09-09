import Container from "./Container";
import Image from "next/image";

const LogoList = ({ backgroundColor, title, list }) => {
  let images = ["/img/saatchi.svg", "/img/vlu.svg", "/img/ogilvy.svg"];
  return (
    <div className="bg-white/75 p-4">
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
                  className="flex flex-shrink flex-grow items-center justify-center px-4 py-4"
                >
                  <img src={imgSrc} alt="" />
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

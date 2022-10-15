import Image from "next/future/image";

const Decoration = () => (
  <>
    <div
      className={`pointer-events-none absolute left-0 h-[380px] w-[380px] animate-steam-two select-none  bg-cover bg-center bg-no-repeat`}
      style={{
        top: `${Math.floor(Math.random() * 100) + 100}px`,
        left: `${Math.floor(Math.random() * 100)}px`,
      }}
    >
      <Image src="/img/deco-3.png" alt="" width={648} height={648} />
    </div>
    <div
      className="pointer-events-none absolute h-[450px] w-[450px] origin-center animate-steam-one select-none bg-cover bg-center bg-no-repeat delay-1000 delay-200"
      style={{
        right: `-${Math.floor(Math.random() * 100)}px`,
        bottom: `${Math.floor(Math.random() * 100)}px`,
      }}
    >
      <Image src="/img/deco-1.png" alt="" width={648} height={648} />
    </div>
  </>
);

export default Decoration;

const Deco1 = () => (
  <>
    <div
      className={`absolute left-0 h-[380px] w-[380px] animate-steam-two bg-[url(/img/deco-3.png)] bg-cover bg-center bg-no-repeat`}
      style={{
        top: `${Math.floor(Math.random() * 100) + 100}px`,
        left: `${Math.floor(Math.random() * 100)}px`,
      }}
    ></div>
    <div
      className="absolute h-[450px] w-[450px] origin-center animate-steam-one bg-[url(/img/deco-1.png)] bg-cover bg-center bg-no-repeat delay-1000 delay-200"
      style={{
        right: `-${Math.floor(Math.random() * 100)}px`,
        bottom: `${Math.floor(Math.random() * 100)}px`,
      }}
    ></div>
  </>
);

export default Deco1;

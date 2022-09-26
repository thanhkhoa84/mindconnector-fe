const Container = ({ children }) => (
  <div
    className={`mx-auto my-0 min-w-[320px] max-w-[1120px] overflow-hidden px-[1em]`}
  >
    {children}
  </div>
);

export default Container;

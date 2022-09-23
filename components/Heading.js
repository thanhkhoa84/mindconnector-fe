const SectionHeading = ({ align, children }) => {
  return (
    <h1
      className={`mx-auto mt-0 mb-4 text-4xl font-black leading-[1.3] dark:text-white ${
        align ? "text-center" : ""
      }`}
    >
      {children}
    </h1>
  );
};
const SectionSubHeading = ({ align, children }) => {
  return (
    <h2
      className={`
        my-0 mx-auto text-base font-bold leading-[1] text-gray dark:text-white 
        ${align ? "text-center" : ""}
      `}
    >
      {children}
    </h2>
  );
};

const BannerHeading = ({ align, children }) => {
  return (
    <h1
      className={`mx-auto mt-0 mb-4 text-center text-3xl font-black dark:text-white dark:text-white md:text-left md:text-6xl md:leading-[1.2]`}
    >
      {children}
    </h1>
  );
};

module.exports = {
  SectionHeading,
  SectionSubHeading,
  BannerHeading,
};

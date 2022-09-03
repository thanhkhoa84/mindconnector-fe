const SectionHeading = ({ align, children }) => {
  return (
    <h1 className={`leading-[1.3] text-4xl font-black mt-0 mb-4 mx-auto  ${align ? 'text-center' : ''}`}>
      {children}
    </h1>
  );
};
const SectionSubHeading = ({ align, children }) => {
  return (
    <h2 className={`leading-[1] text-base text-gray-default font-bold my-0 mx-auto ${align ? 'text-center' : ''}`}>
      {children}
    </h2>
  );
};

const BannerHeading = ({ align, children }) => {
  return (
    <h1 className={`md:leading-[1.2] text-3xl text-center md:text-left md:text-6xl font-black mt-0 mb-4 mx-auto`}>
      {children}
    </h1>
  );
};

module.exports = {
  SectionHeading,
  SectionSubHeading,
  BannerHeading,
};

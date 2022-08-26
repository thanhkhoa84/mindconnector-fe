import styles from '../styles/components/Heading.module.scss';

const SectionHeading = ({ align, children }) => {
  return (
    <h1 className={`${styles.sectionHeading} ${align ? 'text-center' : ''}`}>
      {children}
    </h1>
  );
};
const SectionSubHeading = ({ align, children }) => {
  return (
    <h2 className={`${styles.sectionSubHeading} ${align ? 'text-center' : ''}`}>
      {children}
    </h2>
  );
};

const BannerHeading = ({ align, children }) => {
  return (
    <h1 className={`${styles.bannerHeading} ${align ? 'text-center' : ''}`}>
      {children}
    </h1>
  );
};

module.exports = {
  SectionHeading,
  SectionSubHeading,
  BannerHeading,
};

import styles from '../styles/Heading.module.scss';

const SectionHeading = ({ children }) => {
  return <h1 className={styles.sectionHeading}>{children}</h1>;
};

module.exports = {
  SectionHeading,
};

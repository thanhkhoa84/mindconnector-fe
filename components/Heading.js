import styles from '../styles/components/Heading.module.scss';

const SectionHeading = ({ align, children }) => {
  return (
    <h1 className={`${styles.sectionHeading} ${align ? 'text-center' : ''}`}>
      {children}
    </h1>
  );
};

module.exports = {
  SectionHeading,
};

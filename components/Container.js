import styles from '../styles/components/Container.module.scss';
const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;

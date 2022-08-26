import styles from '../styles/components/LogoList.module.scss';
import Container from './Container';
import Image from 'next/image';

const LogoList = ({ backgroundColor, title, list }) => {
  let images = ['/img/saatchi.svg', '/img/vlu.svg', '/img/ogilvy.svg'];
  return (
    <div
      className={styles.LogoList}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : 'transparent',
      }}
    >
      <Container>
        <div className={styles.LogoListContainer}>
          <header>
            <h2>{title}</h2>
          </header>
          <ul>
            {list.map((li, index) => {
              let imgSrc = images[Math.floor(Math.random() * images.length)];
              return (
                <li key={`logolist-${index}`}>
                  <img src={imgSrc} alt='' />
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

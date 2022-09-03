import styles from '../styles/components/LogoList.module.scss';
import Container from './Container';
import Image from 'next/image';

const LogoList = ({ backgroundColor, title, list }) => {
  let images = ['/img/saatchi.svg', '/img/vlu.svg', '/img/ogilvy.svg'];
  return (
    <div
      className='p-4'
      style={{
        backgroundColor: backgroundColor ? backgroundColor : '',
      }}
    >
      <Container>
        <div className={styles.LogoListContainer}>
          <header>
            <h2 className='font-bold text-base text-center leading-4 my-4 mx-0'>{title}</h2>
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

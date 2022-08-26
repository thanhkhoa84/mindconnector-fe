import styles from '../styles/components/Rating.module.scss';

const Rating = ({ value, total }) => {
  const rating = () => {
    return Math.floor(Math.random() * (5 + 1));
  };

  const Star = ({ value }) => {
    return Array(5)
      .fill(0)
      .map((_, idx) => {
        return idx < Math.floor(value) ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            viewBox='0 0 10 10'
            key={idx}
          >
            <path
              id='Path_4333'
              data-name='Path 4333'
              d='M5,0,3.455,3.292,0,3.82,2.5,6.382,1.91,10,5,8.292,8.091,10,7.5,6.382,10,3.82,6.545,3.292Z'
              transform='translate(0 0)'
              fill='#ffaf43'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='10'
            height='10'
            viewBox='0 0 10 10'
            key={idx}
          >
            <path
              id='Path_4337'
              data-name='StarRating'
              d='M5,0,3.455,3.292,0,3.82,2.5,6.382,1.91,10,5,8.292,8.091,10,7.5,6.382,10,3.82,6.545,3.292Z'
              transform='translate(0 0)'
              fill='#fff'
            />
          </svg>
        );
      });
  };

  return (
    <div className={styles.rating}>
      {value} <Star value={rating()} /> ({total})
    </div>
  );
};

export default Rating;

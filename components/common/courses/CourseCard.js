import Link from 'next/link';
import Rating from '../../Rating';
import styles from '../../../styles/components/common/courses/CourseCard.module.scss';

const CourseCard = () => (
  <div className={`rounded-[30px] border-[6px] border-orange-medium inline-block relative overflow-hidden w-full text-left`}>
        <div className={`overflow-hidden rounded-2xl  ${styles.courseCardImage}`}>
          <img src='/img/course-1.png' alt='' className='w-full block'/>
        </div>
      <Link href='/'>
        <div className={`text-sm px-5 pb-9 md:p-4 md:pb-8 text-white flex flex-col justify-end absolute top-0 left-0 right-0 bottom-0 after:content-none after:bg-gradient-overlay cursor-pointer`}>
          <div className="overflow-hidden">
            <h5 className='bg-purple rounded-sm inline-block float-left font-bold text-[10px] leading-6 h-6 px-2'>Khoá học bán chạy</h5>
          </div>
          <h3 className='font-black text-xl mt-2 leading-5'>Theo đuổi sự học cả đời</h3>
          <p className='leading-4 mt-2'>
            <span>4 lessons &#x2022; </span>
            <span>3 hours</span>
          </p>
          <Rating value={4.5} total={1590} />
          <div className='font-bold text-3xl mt-2'>
            <span className='font-normal text-xs'>USD$ </span>
            84<sup className='text-[0.45em] font-normal top-[-1em]'>99</sup>
          </div>
        </div>
  </Link>
    </div>
);

export default CourseCard;

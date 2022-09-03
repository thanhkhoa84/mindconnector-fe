import Container from './Container';
import { SectionHeading } from './Heading';

const QA = ({ questions }) => {
  return (
    <section className='bg-white py-14 px-0 overflow-hidden'>
      <Container>
        <header className='text-center lg:text-left lg:float-left lg:w-3/12 lg:pt-4'>
          <SectionHeading>Câu hỏi <br className='hidden lg:inline'/>thường gặp</SectionHeading>
        </header>
        <div className='lg:float-right lg:w-8/12'>
          {questions &&
            questions.map(({ question, answer }, index) => {
              return (
                <details key={`qa-${index}`} className='bg-orange-light rounded-2xl mt-4 group'>
                  <summary className='list-none bg-white rounded-2xl border-[2px] border-purple py-4 pl-4 pr-8 cursor-pointer relative after:bg-[url("/img/detail-arrow.png")] after:bg-cover after:inline-block after:w-[30px] after:h-[30px] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-4 group-open:after:rotate-180 transition-all duration-300'>{question}</summary>
                  <p className='p-4 hidden group-open:block'>{answer}</p>
                </details>
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default QA;

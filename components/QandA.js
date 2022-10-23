const QandA = ({ questions }) => {
  return (
    <section className="overflow-hidden bg-white py-14 px-0">
      <header className="text-center lg:float-left lg:w-3/12 lg:pt-4 lg:text-left">
        <h1 className="mx-auto mt-0 mb-4 text-4xl font-black leading-[1.3] dark:text-white">
          Câu hỏi <br className="hidden lg:inline" />
          thường gặp
        </h1>
      </header>
      <div className="lg:float-right lg:w-8/12">
        {questions &&
          questions.map(({ Question, Answer }, index) => {
            return (
              <details
                key={`qa-${index}`}
                className="group mt-4 rounded-2xl bg-orange-light"
              >
                <summary className='relative cursor-pointer list-none appearance-none rounded-2xl border border-[#E75C9D] bg-white py-6 pl-4 pr-14 font-bold text-[#676767] transition-all duration-300 after:absolute after:top-[50%] after:right-4 after:inline-block after:h-[30px] after:w-[30px] after:translate-y-[-50%] after:bg-[url("/img/detail-arrow.png")] after:bg-cover after:transition-all group-open:after:-rotate-180'>
                  {Question}
                </summary>
                <p className="hidden p-4 transition-all group-open:block">
                  {Answer}
                </p>
              </details>
            );
          })}
      </div>
    </section>
  );
};

const QandAProgram = ({ questions }) => {
  return (
    <section className="overflow-hidden bg-white py-14 px-0">
      <header className="text-center md:text-left">
        <h1 className="mx-auto mt-0 mb-4 text-4xl font-black leading-[1.3] dark:text-white">
          Câu hỏi thường gặp
        </h1>
      </header>
      <div className="">
        {questions &&
          questions.map(({ question, answer }, index) => {
            return (
              <details
                key={`qa-${index}`}
                className="group mt-4 appearance-none rounded-2xl bg-orange-light "
              >
                <summary className='relative cursor-pointer list-none appearance-none rounded-2xl border border-[#E75C9D] bg-white py-6 pl-4 pr-14 font-bold text-[#676767] transition-all duration-300 after:absolute after:top-[50%] after:right-4 after:inline-block after:h-[30px] after:w-[30px] after:translate-y-[-50%] after:bg-[url("/img/detail-arrow.png")] after:bg-cover after:transition-all group-open:after:-rotate-180'>
                  {question}
                </summary>
                <p className="hidden p-4 group-open:block">{answer}</p>
              </details>
            );
          })}
      </div>
    </section>
  );
};

export { QandAProgram };
export default QandA;

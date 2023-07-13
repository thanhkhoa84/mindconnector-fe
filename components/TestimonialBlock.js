import Container from "@/components/Container";
import Testimonial from "@/components/Testimonial";

export default function TestimonialBlock({ heading, text, testimonial }) {
  return (
    <div className="relative mt-12 bg-[#FFEFDB] py-14" id="testimonial">
      <Container>
        <div className="flex flex-col">
          <div className="flex-shrink text-center">
            <h2
              dangerouslySetInnerHTML={{
                __html: heading.replace(new RegExp("\r?\n", "g"), "<br />"),
              }}
              className="mb-3 text-center text-[34px] font-black"
            />
            <p>{text}</p>
          </div>
          <div className="align-center mt-12 flex flex-col">
            <div className="flex-shrink flex-grow self-center pb-14 ">
              <Testimonial {...testimonial.data.attributes} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

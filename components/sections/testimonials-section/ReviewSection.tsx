import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialsSlider from "./TestimonialsSlider";

const ReviewSection = () => {
  return (
    <section className="w-full min-h-screen py-[160px] h-full relative bg-[url('/testimonial-cover.jpg')] bg-no-repeat bg_size_full">
      <div className="container">
        <SectionTitle
          afterText="Hear What "
          gradientText="Rizz "
          beforeText="Patients Have To Say"
          className="mb-[45px]"
        />

        <div className="">
          <TestimonialsSlider />
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

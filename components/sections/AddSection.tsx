import Image from "next/image";

const AddSection = () => {
  return (
    <section className="pt-[89px] bg-[url('/BG_add.png')] w-full h-screen min-h-[812px] relative bg-no-repeat bg-cover bg-fixed">
      <div className="container flex justify-between max-lg:flex-col gap-6">
        <div className="max-w-[524px]">
          <h2 className="text-white text-[3.625rem] font-impact max-lg:text-[clamp(1.8rem,5vw,2.5rem)] max-lg:leading-[1.2]">
            100% Online,
          </h2>
          <h3 className="text-white text-[3.625rem] font-impact max-lg:text-[clamp(1.8rem,5vw,2.5rem)] max-lg:leading-[1.2]">
            100% Convenient
          </h3>
        </div>
        <ul className="flex flex-col gap-[1.69rem] max-lg:gap-4">
          <li className="inline-flex gap-[1.87rem]">
            <Image
              src="/right-direction.svg"
              alt="text indicator"
              width={18}
              height={18}
            />
            <span className="text-white text-lg font-neue-montreal-medium max-lg:text-base">
              Chat with a provider 24/7
            </span>
          </li>
          <li className="inline-flex gap-[1.87rem]">
            <Image
              src="/right-direction.svg"
              alt="text indicator"
              width={18}
              height={18}
            />
            <span className="text-white text-lg font-neue-montreal-medium max-lg:text-base">
              Fast, discreet shipping
            </span>
          </li>
          <li className="inline-flex gap-[1.87rem]">
            <Image
              src="/right-direction.svg"
              alt="text indicator"
              width={18}
              height={18}
            />
            <span className="text-white text-lg font-neue-montreal-medium max-lg:text-base">
              Clinically proven ingredients and FDA-approved treatments.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AddSection;

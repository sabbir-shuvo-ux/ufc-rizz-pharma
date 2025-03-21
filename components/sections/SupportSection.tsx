import Image from "next/image";

const SupportSection = () => {
  const data: { label: string; img: string }[] = [
    { img: "/payment-success.svg", label: "Secure Payment" },
    { img: "/customer-support.svg", label: "Online Support" },
    { img: "/truck-delivery.svg", label: "Free Shipping" },
    { img: "/discount.svg", label: "Best Value" },
  ];

  return (
    <section className="bg-[rgba(49,65,140,0.3)] mt-40">
      <div className="container py-14 flex justify-center items-center gap-20 max-[769px]:grid max-[769px]:grid-cols-2 max-[480px]:grid-cols-1">
        {data?.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-8 justify-center"
          >
            <Image
              src={item.img}
              alt={item.label}
              title={item.label + "'s image"}
              height={40}
              width={40}
            />
            <h4 className="text-white text-xl font-normal font-neue-montreal leading-relaxed max-[1025px]:text-base">
              Secure Payment
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportSection;

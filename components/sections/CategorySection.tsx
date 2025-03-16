import CategoryCard from "../CategoryCard";
import SectionTitle from "../ui/SectionTitle";

type CategoryDataType = {
  className?: string;
  colorCode?: string;
} & CategoryItemType;

const CategorySection = () => {
  const data: CategoryDataType[] = [
    {
      id: 1,
      img: "/portrait-fitness-people-1.png",
      label: "Weight Loss",
      imgOverlay: "/portrait-fitness-people-overlay.png",
    },
    {
      id: 13,
      img: "/bodybuilder-showing-his-muscles-isolated-grey.png",
      label: "Testosterone HRT",
      imgOverlay: "/Testosterone-overlay.png",
      className: "from-purple-500 to-fuchsia-700",
      colorCode: "180deg, #AD70F2 0%, #9D37A2 100%",
    },
    {
      id: 11,
      img: "/sexual-health.png",
      label: "Sexual Health",
      imgOverlay: "/sexual-overlay.png",
      imgOverlayWidth: 364,
      imgOverlayHeight: 359,
      colorCode: "180deg, #F29B70 0%, #FBD197 100%",
    },
    {
      id: 14,
      img: "/Athletic-perfomance.png",
      label: "Athletic Perfomance",
      imgOverlay: "/Athletic-perfomance-overlay.png",
      colorCode: "120.29deg, #F27070 0%, #97B5FB 82%",
    },
    {
      id: 12,
      img: "/brain-health.png",
      label: "Brain Health",
      imgOverlay: "/brain-health-overlay.png",
      colorCode: "120.29deg, #97B5FB 0%, #F27070 83.5%",
    },

    {
      id: 15,
      img: "/hair-and-beauty-man.png",
      label: "Beauty and Hair Loss",
      imgOverlay: "/hair-and-beauty-overlay.png",
      colorCode: "180deg, #70CBF2 0%, #97B0FB 100%",
    },
  ];

  return (
    <section>
      <div className="container">
        {/* section title */}
        <SectionTitle beforeText="Shop by " gradientText="Category" />

        {/* card container */}
        <div className="">
          <div className="pt-[2.87rem] columns-3 gap-[30px]">
            {data?.map((item, index) => {
              return (
                <CategoryCard
                  key={item.id}
                  img={item.img}
                  imgOverlay={item.imgOverlay}
                  label={item.label}
                  isSmall={index > 0 && (index % 4 === 1 || index % 4 === 2)}
                  imgOverlayHeight={item.imgOverlayHeight}
                  imgOverlayWidth={item.imgOverlayWidth}
                  colorCode={item.colorCode}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

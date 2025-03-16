import CategoryCard from "@/components/CategoryCard";
import SectionTitle from "@/components/ui/SectionTitle";

type CategoryDataType = {
  className?: string;
  colorCode?: string;
} & CategoryItemType;

const getData = async <T,>(url: string): Promise<T> => {
  try {
    const res = await fetch(`${process.env.DOMAIN}${url}`, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

const CategorySection = async () => {
  try {
    const data = await getData<CategoryDataType[]>(
      "/local-data/categories.json"
    );

    return (
      <section>
        <div className="container">
          {/* Section title */}
          <SectionTitle beforeText="Shop by " gradientText="Category" />

          {/* Card container */}
          <div className="pt-[2.87rem] columns-3 gap-[30px]">
            {data.map((item, index) => (
              <CategoryCard
                key={item.id}
                img={item.img}
                imgOverlay={item.imgOverlay}
                label={item.label}
                isSmall={index % 4 === 1 || index % 4 === 2}
                imgOverlayHeight={item.imgOverlayHeight}
                imgOverlayWidth={item.imgOverlayWidth}
                colorCode={item.colorCode}
              />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return <p className="text-red-500">Failed to load categories.</p>;
  }
};

export default CategorySection;

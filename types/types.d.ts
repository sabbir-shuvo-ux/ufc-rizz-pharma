type CategoryItemType = {
  id: number;
  img: string;

  imgOverlay?: string;
  imgOverlayHeight?: number;
  imgOverlayWidth?: number;
  label: string;
};

type CategoriesDataType = {
  id: string;
  label: string;
};

type ProductDataType = {
  id: string;
  categoryId?: string;
  label: string;
  priceText: string;
  img: string;
  badgeType?: "LIGHT" | "DARK";
  isImgBig?: boolean;
};

export interface LineoProduct {
  img: string;
  name: string;
  price: {
    before?: number;
    beforeDiscount?: number;
    now?: number;
    promotion?: number;
    promotionWidthCard?: boolean;
  }
}

export interface LineoProductGroup {
  title: string;
  products: LineoProduct[]
}

export interface LineoData {
  type: string;
  data: string | string[] | LineoProductGroup[]
}
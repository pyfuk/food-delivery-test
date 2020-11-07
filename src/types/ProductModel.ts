import { LogoModel } from "./LogoModel";

export type ProductModel = {
  calories: number;
  categories: string[];
  code: string;
  createdAt: Date;
  description: [];
  foodServices: [];
  images: LogoModel[];
  ingredients: string[];
  measureUnitCode: string;
  name: string;
  price: number;
  shopCode: string;
  size: number;
  sortIndex: number;
  status: "active" | "inactive";
  step: number;
  tags: [];
  type: string;
  updatedAt: Date;
  weight: number;
};

import { LogoModel } from "./LogoModel";

export type CategoryModel = {
  code: string;
  createdAt: Date;
  depthLevel: number;
  description: string;
  logo: LogoModel[];
  parentCategoryCode: string;
  sortIndex: number;
  tags: { code: string; name: string }[];
  totalItems: number;
  updatedAt: Date;
};

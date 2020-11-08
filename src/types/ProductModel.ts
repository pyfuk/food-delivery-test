import { Instance, types } from "mobx-state-tree";

export const ProductModel = types.model({
  calories: types.number,
  categories: types.array(types.string),
  code: types.string,
  createdAt: types.string,
  description: types.array(types.string),
  foodServices: types.array(types.string),
  // images: LogoModel[],
  ingredients: types.array(types.string),
  measureUnitCode: types.string,
  name: types.string,
  price: types.number,
  shopCode: types.string,
  size: types.number,
  sortIndex: types.number,
  status: types.string,
  step: types.number,
  tags: types.array(types.string),
  type: types.string,
  updatedAt: types.string,
  weight: types.number,
});

export interface Product extends Instance<typeof ProductModel> {}

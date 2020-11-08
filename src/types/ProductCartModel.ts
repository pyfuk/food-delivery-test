import { ProductModel } from "./ProductModel";
import { types } from "mobx-state-tree";

export const ProductCartModel = types.model({
  product: ProductModel,
  count: types.number,
  // activity: ActivityModel,
  // dateStart: types.frozen(),
  // startInterval: types.maybe(TimeIntervalModel),
  // closedByException: types.boolean,
  // openEveryDay: types.boolean,
});

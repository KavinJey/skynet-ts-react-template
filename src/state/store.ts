import { createStore } from "easy-peasy";
import { uiModel, UiModelType } from "./uiModel";
import { mySkyModel, MySkyModelType } from "./mySkyModel";
import { todoModel, TodoModelType } from "./todoModel";
import { hnsModel, HnsModelType } from "./hnsModel";

export interface StoreModel {
  ui: UiModelType;
  mySky: MySkyModelType;
  todos: TodoModelType;
  hns: HnsModelType;
}

export const initialState: StoreModel = {
  mySky: mySkyModel,
  todos: todoModel,
  hns: hnsModel,
  ui: uiModel,
};

export const store = createStore<StoreModel>(initialState, { version: 1 });

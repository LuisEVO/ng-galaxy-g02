import { Action } from '../store';
import { Product } from '../../interfaces/product.interface';

export enum ShoppingCartActionType {
  POPULATE = '[SHOPPING CART] POPULATE',
  ADD_PRODUCT = '[SHOPPING CART] ADD PRODUCT',
  DELETE_PRODUCT = '[SHOPPING CART] DELETE PRODUCT',
  INCREMENT_PRODUCT_QUANTITY = '[SHOPPING CART] INCREMENT PRODUCT QUANTITY',
  DECREMENT_PRODUCT_QUANTITY = '[SHOPPING CART] DECREMENT PRODUCT QUANTITY',
}

export class ShoppingCartActionPopulate implements Action {
  public readonly type = ShoppingCartActionType.POPULATE;
}

export class ShoppingCartActionAddProduct implements Action {
  public readonly type = ShoppingCartActionType.ADD_PRODUCT;
  constructor(public payload: { product: Product }) {}
}

export class ShoppingCartActionDeleteProduct implements Action {
  public readonly type = ShoppingCartActionType.DELETE_PRODUCT;
  constructor(public payload: { productId: number }) {}
}

export class ShoppingCartIncrementActionProduct implements Action {
  public readonly type = ShoppingCartActionType.INCREMENT_PRODUCT_QUANTITY;
  constructor(public payload: { productId: number }) {}
}

export class ShoppingCartDecrementActionProduct implements Action {
  public readonly type = ShoppingCartActionType.DECREMENT_PRODUCT_QUANTITY;
  constructor(public payload: { productId: number }) {}
}

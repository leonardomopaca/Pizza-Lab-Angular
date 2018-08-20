import { Action } from '@ngrx/store'
import { ProductModel } from '../../../components/products/models/ProductModel'
import { ReviewModel } from '../../../components/products/models/ReviewModel'

export const GET_ALL = '[PRODUCTS] GET_ALL'
export const ADD_REVIEW = '[PRODUCTS] ADD_REVIEW'
export const LIKE_PRODUCT = '[PRODUCTS] LIKE'
export const UNLIKE_PRODUCT = '[PRODUCTS] UNLIKE'

export class GetAllProducts implements Action {
  readonly type: string = GET_ALL

  constructor (public payload: ProductModel[]) { }
}

export class AddProductReview implements Action {
  readonly type: string = ADD_REVIEW

  constructor (public review: ReviewModel, public productId: string) { }
}

export class LikeProduct implements Action {
  readonly type: string = LIKE_PRODUCT

  constructor (public id: string, public username: string) { }
}

export class UnlikeProduct implements Action {
  readonly type: string = UNLIKE_PRODUCT

  constructor (public id: string, public username: string) { }
}

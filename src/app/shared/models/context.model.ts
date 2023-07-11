import { ActionModel } from "./action.model"

export interface ContextModel {
  code: string
  background_url: string
  description?: string
  class_name?: string
  actions: ActionModel[]
}

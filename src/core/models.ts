import { RouteItem, SiteSettings } from "core/entities"

export interface Error {
  code: number
  message: string
}

export interface SiteSettingsResponse extends SiteSettings {
  initial: RouteItem
}

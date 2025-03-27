export type Nullable<T> = T | null
export interface ThirdpartyInfo {
    name: string
    email: string
    platform_id?: string
    provider_id: string
    game_name: string
    state: string
    type: string
}
export interface thirdpartyInfo {
    thirdpartyInfo: Nullable<ThirdpartyInfo>
    platform: Nullable<string>
    loading: boolean
    isMobileS: boolean
}
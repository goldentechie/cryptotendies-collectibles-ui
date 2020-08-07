export * from './nuxt'


declare global {
  interface Window {
    platform?: any;
  }
}

export interface DropInfo {
  cards: number,
  guaranteed: {
    common: number,
    uncommon: number,
    rare: number,
    epic: number,
    legendary: number
  },
  rates: {
    common: number,
    uncommon: number,
    rare: number,
    epic: number,
    legendary: number
  }
}

export interface CardInfo {
  image: number,
  rarity: number,
  copies: number
}

export interface BoxInfo {
  id: number,
  size: number
}
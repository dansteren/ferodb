export default interface FeedResponse {
  version: string
  encoding: string
  feed: Feed
}

export interface Feed {
  xmlns: string
  xmlns$openSearch: string
  xmlns$gsx: string
  id: Field
  updated: Field
  category: Category[]
  title: TypedField
  link: Link[]
  entry: Entry[]
}

export interface Category {
  scheme: string
  term: string
}

export interface Field {
  $t: string
}

export interface TypedField {
  type: string
  $t: string
}

export interface Entry {
  // id: Field,
  // updated: Field
  // category: Category[]
  // title: TypedField
  // content: TypedField
  // link: Link[]
  [key: string]: Field
}

export interface Link {
  rel: string
  type: string
  href: string
}

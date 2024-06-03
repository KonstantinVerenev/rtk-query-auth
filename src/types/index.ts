// ------- TYPES -------
export type ValidationError = {
  field: string
  message: string
}

export type Admin = {
  _id: string
  username: string
  email: string
  status: number
  role: AdminRoles
  phone: string

  // shop_id: string;
  shop: Shop | null
  plan: AdminPlan | null

  member_dob?: number
  member_id_date?: number

  has_category?: boolean
  has_product?: boolean
}

export enum AdminRoles {
  SUPER_ADMIN = 0,
  SHOP_ADMIN = 10,
  SHOP_MANAGER = 100,
}

export enum AdminPlan {
  BASIC = 10,
  START = 100,
  PROFY = 1000,
}

export type Shop = {
  _id: string
  branches: Branch[]
  title: string
  email: string
  status: number
  domain: string
  phones: string[]
  socials: { [key: string]: string }

  title_show: boolean
  logo_show: boolean
  logo: TypeFile | null
  settings: Setting

  payme_seller_id?: string

  slug?: string
  seller_data?: {
    legal_id: string
    legal_name: string
    phone: string
  }
  seller_dashboard_signup_link?: string
  seostrider_id?: number
}

export type Branch = {
  _id: string
  status: number
  title: string
  email: string
  phones: string[]
  seller_id: string
  address: {
    google_address?: any
    //google_address?: google.maps.GeocoderResult
  }
  shipment?: string
  // shop_id: string;
  user: {
    name: string
    phone: string
  }
  installments?: number
  seller_public_key: string | null
  payme_prod?: boolean
}

export type TypeFile = {
  created_at: number
  extention: string
  mime_type: string
  size: number
  title: string
  _id: string
  url: string
}

export type Template = {
  _id: string
  title: string
  description: string
  schemas: string[][]
  settingConfig?: {
    label: string
    name: string
    type: string
    list: string[]
    aboutTop: string
    benefitsTop: string
    aboutHeight: string
    benefitsHeight: string
    mainBannerHeight: string
    categoryes: string[]
  }
  status: number
}

export type Setting = {
  _id: string
  shop_id: string
  template_id: string
  template?: Template
  schema: number
  template_settings: any
  shop?: Shop
  languages: string[]

  benefits: BenefitsType
  about: AboutType
  // gett_delivery?: GettShipment;
  yango_delivery?: YangoShipment
}

export type BenefitsType = {
  active: boolean
  title: { [key: string]: string }
  text: { [key: string]: string }
  benefits: {
    image: TypeFile | null
    title: { [key: string]: string }
    text: { [key: string]: string }
  }[]
}

export type AboutType = {
  active: boolean
  title: { [key: string]: string }
  text: { [key: string]: string }
  image: TypeFile | null
  with_button: boolean
  button_text: { [key: string]: string }
  button_url: string
}

export type YangoShipment = {
  _id: string
  title: string
  free_from?: number
  tooltip: string
  status: number
  user: {
    name: string
    phone: string
  }
  address: {
    city: ""
    street: ""
    building: ""
    location: {
      lat: 0
      lng: 0
    }
    google_address?: {
      place_id: string
      formatted_address: string
    }
  }
}

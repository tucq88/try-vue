
export as namespace Types

export interface PlainObject {
    [key: string]: any
}

export interface FulfillmentManager  {
  email: string,
  password: string,
  name: string
}

export interface AuthToken {
  token: string,
}


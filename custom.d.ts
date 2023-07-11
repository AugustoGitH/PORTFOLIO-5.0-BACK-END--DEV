declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string
    MODE?: 'development' | 'production'
    MONGO_CONNECTION_URL_DEV?: string
    MONGO_CONNECTION_URL_PROD?: string
    NAME_ADMIN?: string
    TOKEN_SECRET?: string
    PASSWORD_ADMIN?: string
    AUTORIZATION_TOKEN_GITHUB?: string
    TOKEN_AUTHENTICATION?: string
    HOST_NAME_FRONT_PROD?: string
    HOST_NAME_FRONT_DEV?: string
    CUSTOMER_ID?: string
  }
}

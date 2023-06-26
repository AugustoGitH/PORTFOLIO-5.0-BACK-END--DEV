const env = {
  PORT: process.env.PORT ?? String(3000),
  MODE: process.env.MODE ?? 'development',
  MONGO_CONNECTION_URL: function (): {
    MODE: string
    URL: string | null
  } {
    const URL =
      this.MODE === 'production'
        ? process.env.MONGO_CONNECTION_URL_PROD ?? null
        : process.env.MONGO_CONNECTION_URL_DEV ?? null

    return {
      MODE: this.MODE,
      URL: URL,
    }
  },
}

export default env

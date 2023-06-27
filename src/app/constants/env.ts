const env = {
  PORT: process.env.PORT ?? String(3000),
  MODE: process.env.MODE ?? 'development',
  API_ROUTE_GITHUB: 'https://api.github.com/users/AugustoGitH/repos',
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
      URL,
    }
  },
}

export default env

const env = {
  PORT: process.env.PORT ?? String(3000),
  MODE: process.env.MODE ?? 'development',
  API_ROUTE_GITHUB: 'https://api.github.com/users/AugustoGitH/repos',

  HOST_NAME_FRONT: function () {
    const { HOST_NAME_FRONT_DEV, HOST_NAME_FRONT_PROD } = process.env
    const HOST_NAME =
      (this.MODE === 'production'
        ? HOST_NAME_FRONT_PROD
        : HOST_NAME_FRONT_DEV) ?? null
    return {
      url: HOST_NAME,
      domain:
        HOST_NAME?.replace(/^(https?:\/\/)([^:/\s]+)(:\d+)?/i, '') ?? null,
    }
  },
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

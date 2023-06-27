/* eslint-disable @typescript-eslint/restrict-template-expressions */
const handleBaseURL = <T extends string>(
  base: string,
  routes: Record<T, string>
): Record<T, string> => {
  const refactoryRoutes = Object.fromEntries(
    Object.entries(routes).map(([name, route]) => [
      name,
      `${base}${String(route)[0] !== '/' ? '/' : route} `,
    ])
  )
  return refactoryRoutes as Record<T, string>
}

export default handleBaseURL

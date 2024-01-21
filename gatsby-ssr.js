import React from "react"
import Providers from "./src/providers"

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>
}

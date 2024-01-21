import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


import "./src/styles/index.css"
import "./src/styles/packages.css"
import "./src/styles/services.css"
import "./src/styles/Gallery.css"
import React from "react"
import Providers from "./src/providers"

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>
}
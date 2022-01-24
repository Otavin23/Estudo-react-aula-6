import React from "react"
import Produto from './produto'
import { GlobalStorage } from "./GlobalContext"

const App = ()=>{
  return (
    <>
    <GlobalStorage>
      <Produto></Produto>
    </GlobalStorage>
    </>
  )
}
export default App
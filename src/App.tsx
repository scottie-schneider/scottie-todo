import React from "react"
import { LibraryRouter, CustomRouter } from "router"
import { Interactor } from "core/interactor"
import { useInteractor } from "hooks"

// Toggle between custom routing and react-router library
const routeWithLibrary = false
const AppRouter = routeWithLibrary ? LibraryRouter : CustomRouter

export const App = () => {
  const interactor = useInteractor(Interactor, ["todos", "cms", "route"])
  return <AppRouter interactor={interactor} />
}

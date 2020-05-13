import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const History = ({ interactor }: any) => {
  const history = useHistory()
  const [route, setRoute] = useState(interactor.route)
  const reroute = () => {
    if (interactor.route.component !== route.component) {
      const path =
        interactor.route.param === ""
          ? `/${interactor.route.component}`
          : `/${interactor.route.component}/${interactor.route.param}`
      history.push(path)
      setRoute(interactor.route)
    }
  }
  useEffect(reroute, [interactor.route.component])
  return null
}

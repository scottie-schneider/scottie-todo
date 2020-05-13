import React from "react"
import * as Presenters from "presenters"

export const CustomRouter = ({ interactor }: any) => {
  const Screens: { [key: string]: React.FunctionComponentElement<any | null> } = {
    about: <Presenters.About />,
    contact: <Presenters.Contact />,
    detail: <Presenters.Detail interactor={interactor} />,
    overview: <Presenters.Overview interactor={interactor} />,
  }
  return (
    <Presenters.Layout
      reroute={interactor.reroute}
      header={interactor.cms.header}
      footer={interactor.cms.footer}
    >
      {Screens[interactor.route.component]}
    </Presenters.Layout>
  )
}

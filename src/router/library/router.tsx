import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { History } from "./history"
import * as Presenters from "presenters"

export const LibraryRouter = ({ children, interactor }: any) => {
  return (
    <Router>
      <Presenters.Layout
        reroute={interactor.reroute}
        header={interactor.cms.header}
        footer={interactor.cms.footer}
      >
        {children}
        <History interactor={interactor} />
        <Route path="/about" exact component={Presenters.About} />
        <Route path="/contact" exact component={Presenters.Contact} />
        <Route
          path="/overview"
          exact
          component={() => <Presenters.Overview interactor={interactor} />}
        />
        <Route
          path="/detail"
          exact
          component={() => <Presenters.Detail interactor={interactor} />}
        />
        <Route
          path="/detail/:id"
          exact
          component={() => <Presenters.Detail interactor={interactor} />}
        />
      </Presenters.Layout>
    </Router>
  )
}

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));
const Project = lazy(() => import("./pages/project"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <section>
            <div className="flex h-screen">
              <div className="m-auto">
                <img
                  className=""
                  width="128px"
                  height="128px"
                  src="/images/loader.gif"
                  alt="loader"
                />
              </div>
            </div>
          </section>
        }
      >
        <Switch>
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.PROJECT} component={Project} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

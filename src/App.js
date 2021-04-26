// @ts-check
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";

import Header from "./components/header";
import Footer from "./components/footer";

const Home = lazy(() => import("./pages/home"));
const AllProjects = lazy(() => import("./pages/all-projects"));
const Project = lazy(() => import("./pages/project"));
const NotFound = lazy(() => import("./pages/not-found"));

export default function App() {
  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <section>
            <div className="flex h-screen">
              <div className="m-auto">
                <img
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
          <Route path={ROUTES.HOME} component={Home} exact />
          <Route path={ROUTES.ALL_PROJECTS} component={AllProjects} />
          <Route path={ROUTES.PROJECT} component={Project} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

import React from "react"
import PathConstants from "./pathConstants"

const Home = React.lazy(() => import("../pages/Home"))
const Team = React.lazy(() => import("../pages/Team"))
const Portfolio = React.lazy(() => import("../pages/Portfolio"))
const About = React.lazy(() => import("../pages/About"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.TEAM, element: <Team /> },
    { path: PathConstants.PORTFOLIO, element: <Portfolio /> },
    { path: PathConstants.ABOUT, element: <About /> },
]
export default routes

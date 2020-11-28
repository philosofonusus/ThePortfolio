import React,{lazy, Suspense} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import {Loader} from "./Components/Loader";

const MainPage = lazy(() => import('./pages/MainPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const WorksListPage = lazy(() => import('./pages/WorksListPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

export const useRoutes = () => {
    return(
        <Suspense fallback={<Loader />}>
            <NavBar />
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/works" exact component={WorksListPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/about" exact component={AboutPage} />
                <Redirect to="/"/>
            </Switch>
        </Suspense>
    )
}
import React from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import SinglePage from "./SinglePage";

const About = (props) => {
    console.log(props)
    const { url, path } = useRouteMatch()
    return (
        <div>
            <ul>
            <li>
                <Link to={`${url}/about-app`}>About App</Link>
            </li>
            <li>
                <Link to={`${url}/about-author`}>About Author</Link>
            </li>
            </ul>
            <Route path={`${path}/:slug`}>
            <SinglePage />
            </Route>
        </div>
    )
    return <div>hello from about page</div>;
}
export default About;
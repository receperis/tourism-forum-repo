import React from "react";
import Auth from '../../services/Auth';

function HomePage() {

    const user = Auth.getUser()

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">SDA starter template</h4>
                {user &&  <p> Welcome!!! <b>{user.name} !!</b> </p> }
                <ul>
                    <li><a href="https://spring.io/projects/spring-boot">Spring</a></li>
                    <li><a href="https://www.postgresql.org">PostgreSQL</a></li>
                    <li><a href="https://reactjs.org">React</a></li>
                    <li><a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a></li>
                    <li><a href="https://github.com/axios/axios">Axios</a></li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
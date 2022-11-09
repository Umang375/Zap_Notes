import React from "react";
import {useState } from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""});
    // const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     email: e.target.email.value,
            //     password: e.target.password.value
            // })
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        });
        const json = await response.json();
        console.log(json);
        if(json.authToken){
            localStorage.setItem('token', json.authToken);
            navigate("/");
        }else{
            alert("Invalid Credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
      };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            id="email"
            name="email"
            onChange = {onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange = {onChange}
            id="password"
            name="password"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Keep me Logged in
          </label>
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

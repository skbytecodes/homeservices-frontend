import React from "react";
import Header from "./Header";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <Header />
      <section className="login_container">
        <form className="login_form_container">
          <div>
            <h1 id="login_head">LOGIN</h1>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>

            <input type="checkbox" id="check" />
            <label for="check" id="checkb">
              Remember me
            </label>

            <div>
              <button className="login_btn">LOGIN</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;

import "./Login.css";
import logo from "./img/logo.png";
import spark from "./img/spark.svg";

export default function Login() {
	return (
		<div className="Login">
			<img className="logo" src={logo} alt="Company's logotype" />
            <section className="form-section">
                <h2 className="h2">NERV<br />AGENCY</h2>
                <h1 className="h1">SIGN IN</h1>
                <form>
                    <label className="label" htmlFor="email">EMAIL</label>
                    <input
                        className="input"
                        type="email"
                        id="email"
                        autoComplete="off"
                    />
                    <label className="label" htmlFor="pwd">PASSWORD</label>
                    <input
                        className="input"
                        type="password"
                        id="pwd"
                        autoComplete="off"
                    />
                    <div className="form__actions">
                        <button className="button">SIGN IN</button>
                        <p className="text form__sign-up">Need an account? <a href="signup">Sign up</a></p>
                    </div>
                </form>
                <div className="form-section__sparkles">
                    <img
                        className="spark"
                        src={spark}
                        role="presentation"
                        alt="Decorative spark" 
                    />
                    <img
                        className="spark"
                        src={spark}
                        role="presentation"
                        alt="" 
                    />
                    <img
                        className="spark"
                        src={spark}
                        role="presentation"
                        alt="" 
                    />
                    <img
                        className="spark"
                        src={spark}
                        role="presentation"
                        alt="" 
                    />
                </div>
            </section>
            <footer className="footer">
                © <a href="http://jenya.me">Jenya Matveyev</a>
            </footer>
            <div className="noise" role="presentation" />
		</div>
	);
};
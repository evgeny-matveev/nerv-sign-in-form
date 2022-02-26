import { useRef, useState, useEffect } from "react";
import "./Login.css";
import logo from "./img/logo.png";
import spark from "./img/spark.svg";
import successImg from "./img/success.png"

const ErrorMsg = () => <>Sorry, we cannot find an account with that email. Can we help you <a href="/recover">recover your account</a> or <a href="/signup">create a new one</a>?</>

export default function Login() {
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [err, setErr] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErr(false);
    }, [email, pwd]);

    function handleSubmit(e) {
        e.preventDefault();
        if (email === "err@err.err") {
            setErr(true);
            errRef.current.focus();
        } else {
            setSuccess(true);
            setEmail("");
            setPwd("");
        }
    }

	return (
        <>
            {isSuccess ? (
                <section className="Success">
                    <img
                        src={successImg}
                        alt="A woman showing a card 'Welcome to NERV'"
                    />
                    <button
                        className="button"
                        onClick={() => setSuccess(false)}
                    >
                        BACK
                    </button>
                    <div className="noise" role="presentation" />
                </section>
            ) : (
                <section className="Login">
                    <img className="logo" src={logo} alt="Company's logotype" />
                    <div className="form-group">
                        <h2 className="h2">NERV<br />AGENCY</h2>
                        <h1 className="h1">SIGN IN</h1>
                        <p
                            className={err ? "err" : "offscreen"}
                            ref={errRef}
                            aria-live="assertive"
                        >
                            {err ? <ErrorMsg /> : ""}
                        </p>
                        <form onSubmit={handleSubmit}>
                            <label className="label" htmlFor="email">EMAIL</label>
                            <input
                                className="input"
                                type="email"
                                id="email"
                                autoComplete="off"
                                required
                                ref={emailRef}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <label className="label" htmlFor="pwd">PASSWORD</label>
                            <input
                                className="input"
                                type="password"
                                id="pwd"
                                required
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                            />
                            <div className="form__actions">
                                <button className="button">SIGN IN</button>
                                <p className="text form__sign-up">Need an account? <a href="/signup">Sign up</a></p>
                            </div>
                        </form>
                        <div className="form-group__sparkles">
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
                    </div>
                    <footer className="footer">
                        © <a href="http://jenya.me">Jenya Matveyev</a>
                    </footer>
                    <div className="noise" role="presentation" />
                </section>
            )}
        </>
	);
}
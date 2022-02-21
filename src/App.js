import "./App.css";
import logo from './img/logo.png';
import spark from './img/spark.svg'

function App() {

    return (
        <main className="App">
            <div className="oval" />
            <img src={logo} alt="NERV logotype" className="logo" />
            <section className="form-section">
                <h2>NERV<br />AGENCY</h2>
                <h1>SIGN IN</h1>
                <form>
                    <label htmlFor="email">EMAIL</label>
                    <input
                        type="email"
                        id="email"
                        autoComplete="off"
                    />
                    <label htmlFor="pwd">PASSWORD</label>
                    <input
                        type="password"
                        id="pwd"
                        autoComplete="off"
                    />
                    <div className="form-actions">
                        <button>SIGN IN</button>
                        <p className="sign-up">Need an account? <a href="#">Sign up</a></p>
                    </div>
                </form>
                <div className="sparkles">
                    <img className="spark" src={spark} alt="Spark" />
                    <img className="spark" src={spark} alt="Spark" />
                    <img className="spark" src={spark} alt="Spark" />
                    <img className="spark" src={spark} alt="Spark" />
                </div>
            </section>
            <div className="sky">
                <div className="stars" />
            </div>
            <div className="noise" />
            <footer>© <a href="http://jenya.me">Jenya Matveyev</a></footer>
        </main>
    );
};

export default App;

// deixar o header com só a logo e um footer apenas de copyright
import "../../css/account/login/login.css";

function Login() {
  return (
    <section className="login-page">
        <div className="account-login-container">
          <header className="account-login-container-header">
              <h1>Digite seu E-mail para iniciar sessão</h1>
          </header>

          <div className="account-login-container-main">
              <form className="login-email-form">
                  <label className="login-email-label" htmlFor="newsletter-email" aria-label="Digite seu E-mail">E-mail.</label>
                  
                  <input type="email" className="login-email-input" placeholder="Digite seu e-mail" id="newsletter-email"/>

                  <button type="submit" className="login-email-button">Continuar</button>
              </form>
              <button type="submit" className="login-email-button">Criar conta</button>
          </div>

          <footer className="account-login-container-footer">
              <a href="#">Algum problema? Clique aqui</a>
          </footer>
      </div>
    </section>
  );
}

export default Login;
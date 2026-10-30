import { Link } from "react-router-dom";
// deixar o header com só a logo e um footer apenas de copyright


function Login() {
  return (
    <div className="login-page-container flex flex-column">
        <header className="login-header flex items-center justify-center">
            <h1 className="login-logo flex items-center">
                <a className="login-logo-link" href="/" data-discover="true">MERCADÃO</a>
            </h1>
        </header>

        <main className="login-page flex justify-center items-center">
            <div className="account-login-container flex justify-between items-center gap-8 flex-column">
                <div className="account-login-container-header">
                    <h2>Coloque seu e-mail para iniciar sessão.</h2>
                </div>

                <div className="account-login-container-main">
                    <form className="login-email-form flex flex-column gap-4" action="/login" method="POST">
                        <div className="login-email-group flex flex-column gap-2">                          
                            <input type="email" className="login-email-input" placeholder="Digite seu e-mail" name="email" required autoComplete="email" id="login-email"/>
                        </div>

                        <div className="login-email-group flex flex-column justify-center items-center gap-4">
                            <button type="submit" className="login-email-button">Continuar</button>
                            
                            <Link to="/register" className="sign-up-email-link">Não tem uma conta? Crie uma agora!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>

        <footer className="account-login-container-footer flex flex-column justify-center items-center gap-4">
            <Link className="account-login-help-link" to="/help">Algum problema? Clique aqui</Link>

            <div className="footer-bottom flex justify-center items-center gap-4">
                <p>&copy; 2026 Mercadão. Todos os direitos reservados.</p>
            </div>
        </footer>
    </div>
  );
}

export default Login;
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(event) {
    if (password !== passwordConfirmation) {
      event.preventDefault();
      setPasswordError("As senhas precisam ser iguais.");
    }
  }

  return (
    <div className="register-page-container flex flex-column">
      <header className="register-header flex items-center justify-center">
        <h1 className="register-logo flex items-center">
          <a className="register-logo-link" href="/">MERCADÃO</a>
        </h1>
      </header>

      <main className="register-page flex justify-center items-center">
        <div className="account-register-container flex justify-between items-center gap-8 flex-column">
          <div className="account-register-container-header">
            <h2>Crie sua conta no mercadão</h2>
          </div>

          <div className="account-register-container-main">
            <form className="register-form flex flex-column gap-4" action="/register" method="POST" onSubmit={handleSubmit}>
              <div className="register-field-group flex flex-column gap-2">
                <label className="register-label" htmlFor="register-name">Nome.</label>
                <input
                  type="text"
                  className="register-input"
                  placeholder="Digite seu nome"
                  id="register-name"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="register-field-group register-field-email flex flex-column gap-2">
                <label className="register-label" htmlFor="register-email">E-mail.</label>
                <input
                  type="email"
                  className="register-input"
                  placeholder="Digite seu e-mail"
                  id="register-email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="register-field-group register-field-password flex flex-column gap-2">
                <label className="register-label" htmlFor="register-password">Senha.</label>
                <input
                  type="password"
                  className="register-input"
                  placeholder="Digite sua senha"
                  id="register-password"
                  name="password"
                  autoComplete="new-password"
                  minLength="8"
                  aria-describedby="password-hint"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setPasswordError("");
                  }}
                  required
                />
                <small id="password-hint" className="register-input-hint">
                  Use pelo menos 8 caracteres.
                </small>
              </div>

              <div className="register-field-group register-field-password-confirmation flex flex-column gap-2">
                <label className="register-label" htmlFor="register-password-confirmation">Confirme sua senha.</label>
                <input
                  type="password"
                  className={`register-input${passwordError ? " register-input-error" : ""}`}
                  placeholder="Digite sua senha novamente"
                  id="register-password-confirmation"
                  name="passwordConfirmation"
                  autoComplete="new-password"
                  value={passwordConfirmation}
                  onChange={(event) => {
                    setPasswordConfirmation(event.target.value);
                    setPasswordError("");
                  }}
                  aria-invalid={Boolean(passwordError)}
                  aria-describedby={passwordError ? "password-error" : undefined}
                  required
                />
                {passwordError && (
                  <small id="password-error" className="register-error" role="alert">
                    {passwordError}
                  </small>
                )}
              </div>

              <label className="register-terms flex items-start gap-2">
                <input type="checkbox" name="terms" required />
                <span>
                  Aceito os <Link to="/terms">termos de uso</Link> e a{" "}
                  <Link to="/privacy">política de privacidade</Link>.
                </span>
              </label>

              <div className="register-actions flex flex-column justify-center items-center gap-4">
                <button type="submit" className="register-button">Continuar</button>
                <Link to="/login" className="login-link">Já tenho uma conta</Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="account-register-container-footer flex flex-column justify-center items-center gap-4">
        <Link className="account-register-help-link" to="/help">Algum problema? Clique aqui</Link>
        <div className="register-footer-bottom flex justify-center items-center gap-4">
          <p>&copy; 2026 Mercadão. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Register;
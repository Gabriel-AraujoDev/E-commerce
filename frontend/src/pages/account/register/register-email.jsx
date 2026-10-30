import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterPassword from "./register-password";
import { checkEmail, checkName, register } from "./register";

function Register() {
    const [title, setTitle] = useState("Crie sua conta no mercadão");
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    function handleRegister(userData) {
        return register(userData.name, userData.email, userData.password);
    }

    async function handleContinue(event) {
        event.preventDefault();

        setNameError("");
        setEmailError("");

        try {
            const result = await checkName(formData.name);

            if (!result.available) {
                setNameError("Este nome de usuário já está cadastrado.");
                return;
            }
        } catch (error) {
            setNameError(error.message || "Não foi possível verificar o nome.");
            return;
        }

        try {
            const result = await checkEmail(formData.email);

            if (!result.available) {
                setEmailError("Este e-mail já está cadastrado.");
                return;
            }
        } catch (error) {
            setEmailError(error.message || "Não foi possível verificar o e-mail.");
            return;
        }

        setTitle("Crie sua senha.");
        setShowPassword(true);
    }

    return (
        <div className="register-page-container flex flex-column">
            <header className="register-header flex items-center justify-center">
                <h1 className="register-logo flex items-center">
                    <Link className="register-logo-link" to="/">MERCADÃO</Link>
                </h1>
            </header>

            <main className="register-page flex justify-center items-center">
                <div className="account-register-container flex justify-between items-center gap-8 flex-column">
                    <div className="account-register-container-header">
                        <h2>{title}</h2>
                    </div>

                    <div className="account-register-container-main">
                        {!showPassword ? (
                            <form className="register-form flex flex-column gap-4" onSubmit={handleContinue}>
                                <div className="register-field-group flex flex-column gap-2">
                                    <label className="register-label" htmlFor="register-name">Nome.</label>
                                    <input
                                        type="text"
                                        className={`register-input${nameError ? " register-input-error" : ""}`}
                                        placeholder="Digite seu nome"
                                        id="register-name"
                                        name="name"
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={(event) => {
                                            setFormData({ ...formData, name: event.target.value });
                                            setNameError("");
                                        }}
                                        aria-invalid={Boolean(nameError)}
                                        aria-describedby={nameError ? "register-name-error" : undefined}
                                        required
                                    />
                                    {nameError && (
                                        <span className="register-error" id="register-name-error" role="alert">
                                            {nameError}
                                        </span>
                                    )}
                                </div>

                                <div className="register-field-group register-field-email flex flex-column gap-2">
                                    <label className="register-label" htmlFor="register-email">E-mail.</label>
                                    <input
                                        type="email"
                                        className={`register-input${emailError ? " register-input-error" : ""}`}
                                        placeholder="Digite seu e-mail"
                                        id="register-email"
                                        name="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={(event) => {
                                            setFormData({ ...formData, email: event.target.value });
                                            setEmailError("");
                                        }}
                                        aria-invalid={Boolean(emailError)}
                                        aria-describedby={emailError ? "register-email-error" : undefined}
                                        required
                                    />
                                    {emailError && (
                                        <span className="register-error" id="register-email-error" role="alert">
                                            {emailError}
                                        </span>
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
                        ) : (
                            <RegisterPassword name={formData.name} email={formData.email} onRegister={handleRegister}/>
                        )}
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
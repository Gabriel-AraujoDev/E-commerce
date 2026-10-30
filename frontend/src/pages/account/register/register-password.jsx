import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPassword({ name, email, onRegister }) {
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordError, setPasswordError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            setPasswordError("As senhas precisam ser iguais.");
            return;
        }

        if (password.length < 8) {
            setPasswordError("A senha precisa ter pelo menos 8 caracteres.");
            return;
        }
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
            setPasswordError("A senha tem que ter uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
            return;
        }

        setPasswordError("");
        await onRegister({ name, email, password });
    }

    return (
        <form className="register-form flex flex-column gap-4" onSubmit={handleSubmit}>
            <div className="register-field-group flex flex-column gap-2">
                <label className="register-label" htmlFor="register-password">Senha.</label>
                <input
                    type="password"
                    className={`register-input${passwordError ? " register-input-error" : ""}`}
                    placeholder="Digite sua senha"
                    id="register-password"
                    name="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                        setPasswordError("");
                    }}
                    aria-invalid={Boolean(passwordError)}
                    aria-describedby={passwordError ? "register-password-error" : undefined}
                    required
                />
            </div>

            <div className="register-field-group flex flex-column gap-2">
                <label className="register-label" htmlFor="register-password-confirmation">
                    Confirme sua senha.
                </label>
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
                    aria-describedby={passwordError ? "register-password-error" : undefined}
                    required
                />
                {passwordError && (
                    <span className="register-error" id="register-password-error" role="alert">
                        {passwordError}
                    </span>
                )}
            </div>

            <div className="register-actions flex flex-column justify-center items-center gap-4">
                <button type="submit" className="register-button">Criar conta</button>
                <Link to="/login" className="login-link">Já tenho uma conta</Link>
            </div>
        </form>
    );
}

export default RegisterPassword;
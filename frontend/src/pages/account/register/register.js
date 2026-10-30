export async function register(name, email, password) {
    const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erro no cadastro.");
    }

    return data;
}

export async function checkEmail(email) {
    const response = await fetch(
        `http://localhost:3000/api/auth/check-email?email=${encodeURIComponent(email)}`
    );
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Não foi possível verificar o e-mail.");
    }

    return data;
}

export async function checkName(name) {
    const response = await fetch(
        `http://localhost:3000/api/auth/check-name?name=${encodeURIComponent(name)}`
    );
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Não foi possível verificar o nome.");
    }

    return data;
}
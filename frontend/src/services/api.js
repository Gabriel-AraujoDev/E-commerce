export async function getProducts() {
    const response = await fetch("http://localhost:3000/api/produtos");
    const data = await response.json();

    return data;
}
export default function AddToCart() {

    const handleAddToCart = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://localhost:7098/carrinho", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ usuarioId: 1, produtoId: 1, })
            });

            if (!response.ok) throw new Error("Erro ao adicionar ao carrinho");

            alert("Produto adicionado ao carrinho com sucesso!");
        } catch (error) {
            alert("Erro: " + error.message);
        }
    } 
    return (
        <button onClick={handleAddToCart} className=" bg-black w-[100%] text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer " >Add to Cart</button>
    ) 
}
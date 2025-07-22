

function Check() {

}

function GetUserId() {
    let name = "userId";
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

// async function handleAddToCart(itemId) {


//     const userId = GetUserId();
//     if (!userId) {
//         setModal(true);
//         return;
//     }

//     const cartItem = {
//         userId: Number(userId),
//         addressId: "null", // Or provide real address if available
//         itemId: Number(itemId),
//     };

//     try {
//         const response = await fetch("/api/carts", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(cartItem),
//         });

//         if (response.ok) {
//             const addedCartItem = await response.json();
//             const newProduct = {
//                 itemId: addedCartItem.itemId,
//                 title: title,
//                 imageUrl: image,
//                 price: price,
//                 quantity: 1,
//             };
//             setOrderCart((prevCart) => [...prevCart, newProduct]);
//             alert("Item added to cart successfully!");
//         } else {
//             const errorText = await response.text();
//             alert("Failed to add to cart: " + errorText);
//         }
//     } catch (error) {
//         console.error("Error adding to cart:", error);
//         alert("Something went wrong while adding to cart.");
//     }
// }

export { GetUserId };
export default Check;
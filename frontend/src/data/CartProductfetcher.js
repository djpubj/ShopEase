
// const OrderInCart = [
//     {
//         orderId: "",
//         UserId: "",
//         products: [{
//             productId: "",
//             title: "",
//             imageUrl: "",
//             price: "",
//             quantity: ""
//         }],
//     }
// ]

// components/OrderCartFetcher.js
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { orderInCartState, totalAmountState } from './atoms/atoms';

export const OrderInCartFetcher = () => {
    const [, setOrderCart] = useRecoilState(orderInCartState);
    // const [, setTotal] = useRecoilState(totalAmountState);

    useEffect(() => {
        fetchOrderData();
    }, []);

    const fetchOrderData = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products?limit=5'); // Sample API with cart data
            const data = await res.json();

            const mappedOrders = convertToOrderModel(data);
            setOrderCart(mappedOrders);
            // const total = calculateTotalAmount(mappedOrders);
            // console.log('Total Amount:', total);
            // setTotal(total);
            console.log(mappedOrders);
        } catch (err) {
            console.error('Error fetching order cart:', err);
        }
    };

    const convertToOrderModel = (data) => {
        return data.map((item) => ({
            productId: item.id,
            title: item.title,
            imageUrl: item.image,
            price: item.price,
            quantity: 2,
        }));
    };

    // const calculateTotalAmount = (products) => {
    //     return products.reduce((total, product) => {
    //         return total + (product.price || 0) * (product.quantity || 1);
    //     }, 0);
    // };

    return null; // no UI, just for data fetching
};

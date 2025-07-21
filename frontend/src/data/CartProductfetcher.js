
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { orderInCartState, totalAmountState } from './atoms/atoms';

export const OrderInCartFetcher = () => {
    const [, setOrderCart] = useRecoilState(orderInCartState);

    // useEffect(() => {
    //     fetchOrderData();
    // }, []);

    const fetchOrderData = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products?limit=5');

            // const resw = await fetch(`http://localhost/api/carts/${id}`, {
            //     method: "GET",
            //     headers: {
            //         "Authorization": `Bearer ${token}`,
            //         "Content-Type": "application/json"
            //     }}
            // );

            const data = await res.json();

            const mappedOrders = convertToOrderModel(data);
            setOrderCart(mappedOrders);

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

    return null;
};

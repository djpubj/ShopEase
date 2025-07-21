import { useRecoilState } from "recoil"
import { productDataState1, productDataState2 } from "./atoms/atoms"
import { useEffect } from "react"

export const Productsfetcher = () => {
    const [, setProductList1] = useRecoilState(productDataState1)
    const [, setProductList2] = useRecoilState(productDataState2)

    useEffect(() => {
        fetchproductlist();
    }, []);

    const fetchproductlist = async () => {
        const res1 = await fetch('/api/externalproduct/all');
        const data1 = await res1.json();
        const converteddata1 = convertproductmodel1(data1);
        // console.log(converteddata1)
        setProductList1(converteddata1);
        const res2 = await fetch('https://dummyjson.com/products');
        const data2 = await res2.json();
        const converteddata2 = convertproductmodel2(data2.products);
        setProductList2(await converteddata2)
    }

    const convertproductmodel1 = (data) => {
        const productlists = data.map((item) => ({
            itemId: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            rating: item.rating.rate,
            category: item.category,
            imageUrl: item.image
        }));
        return productlists;
    }
    const convertproductmodel2 = async (data) => {
        const productlists = await Promise.all(
            data.map(async (item) => {
                const imageList = item.images || [];

                // Find first image that does not return 404
                let validImageUrl = null;
                for (const imgUrl of imageList) {
                    if (await isImageValid(imgUrl)) {
                        validImageUrl = imgUrl;
                        break;
                    }
                }

                // Skip product if no valid image found
                if (!validImageUrl) return null;

                return {
                    _id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    rating: item.rating,
                    category: item.category,
                    imageUrl: validImageUrl,
                };
            })
        );

        // Filter out any nulls (i.e. products with no valid image)
        return productlists.filter(Boolean);
    };

    const isImageValid = async (url) => {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok; // true if status is 200–299
        } catch {
            return false;
        }
    };
    return null;
}


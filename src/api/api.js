import axios from "axios";

export async function productData() {
            const products = await axios.get(
                "https://fakestoreapiserver.vercel.app/amazonproducts"
            );
            return products;
        }
        
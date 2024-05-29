import axios from 'axios'

export async function productdata(){
    const products = await axios.get(
        'https://fakestoreapi.com/products'
    )
    return products
}
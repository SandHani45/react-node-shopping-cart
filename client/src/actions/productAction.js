import axios from 'axios';

import{ PRODUCT_SERVER } from '../components/utiles/Routes'
import { 
    GET_PRODUCTS_BY_SELL,
     GET_PRODUCTS_BY_ARRIVAL,
     GET_BRANDS,
     GET_WOODS
} from './type';

export const getProductBySells = () => {
    //article?sortBy=sold&order=desc&limit=100&skip=5
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
                            .then(res => res.data.product);
         return {
             type:GET_PRODUCTS_BY_SELL,
             payload:request
         }                   
};

export const getProductByArrival = () => {
    //article?sortBy=createdAt&order=desc&limit=4
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
                            .then(res => res.data.product);
         return {
             type:GET_PRODUCTS_BY_ARRIVAL,
             payload:request
         }     
};

export const woodAction = () =>{
    const request = axios.get(`${PRODUCT_SERVER}/woods`)
                        .then(res => res.data.wood)
        return {
            type:GET_WOODS,
            payload:request
        }                
}
export const brandAction = () =>{
    const request = axios.get(`${PRODUCT_SERVER}/brands`)
                        .then(res => res.data.brand)
        return {
            type:GET_BRANDS,
            payload:request
        }                
}
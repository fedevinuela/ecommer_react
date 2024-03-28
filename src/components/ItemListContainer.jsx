import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import data from '../data/products.json';
import {ItemList} from './ItemList';
import {useParams} from "react-router-dom";


export const ItemListConteiner = () => {
    const [products,setProducts]= useState ([]);

    const {id} = useParams();

    useEffect ( ()=> {
        const get = new Promise((resolve, reject) => {
            setTimeout(()=> resolve (data), 2000) ; 
        });

        get.then ((data)=> {
            if (id) {
                const filteredData = data.filter((d) => d.category===id);
                setProducts(filteredData);
            } else {
                setProducts (data);
            }

        }); 
        }, []
    )

    return (
        <Container className="mt-3"> 
        <ItemList products = {products} />
           
        </Container>
    )

}
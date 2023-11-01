import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

//context
import {ProductsContext} from '../context/ProductContextProvider';

//Style
import styles from './ProductDetails.module.css';


const ProductDetails = (props) => {
    
    const id = props.match.params.id;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, titel, price, description, category} = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product"/>
            <div className={styles.textContainer}>
                <h3>{titel}</h3>
            <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>category:</span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to='/products'>Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
import Link from "next/link";
import styles from "./ProductCard.module.css";
import { Product } from "../../types/product";
import Image, { ImageProps } from "next/image"

const placeholderImg = "http://lorempixel.com/310/295/abstract/";

const ProductCard = ({ product } : {product: Product}) => {

    return (
       <div className={styles.container}>
           <Link href={'/'}>
               <a>
                   <Image
                       src={placeholderImg}
                       alt="product"
                       height={220}
                       width={220}
                       layout={"fixed"}
                   />
                   <div>
                       {product.name}
                   </div>
                   <div>
                       {product.description}
                   </div>
               </a>
           </Link>
       </div>
    )
}

export default ProductCard;
import React, { useState } from 'react'
import classes from './index.module.scss'
import Link from 'next/link'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import Image from 'next/image'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'

const CartItem = ({product,title,qty,index,metaImage,addItemToCart}) => {

    const  [quantity, setquantity] = useState(qty)
    const decrementQty=()=>{
        const updatedQuantity= quantity+1
        setquantity(updatedQuantity)

        addItemToCart({product,quantity:Number(updatedQuantity)})
    }
    const incrementQty=()=>{
        const updatedQuantity=quantity > 1 ? quantity-1 :1
        setquantity(updatedQuantity)

        addItemToCart({product,quantity:Number(updatedQuantity)})
    }
    const enterQty=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const updatedQuantity=Number(e.target.value)
        setquantity(updatedQuantity)

        addItemToCart({product,quantity:Number(updatedQuantity)})
    }
  return (
    <li className={classes.item} key={title}>
        <Link href={`/products/${product.slug}`} 
        className={classes.mediaWrapper}>
            {!metaImage && <span>No Image</span>}
            {metaImage && typeof metaImage !=='string' && (
            <Media className={classes.media} 
            imgClassName={classes.image} 
            resource={metaImage}
            fill/>
            )}
            </Link>

            <div className={classes.itemDetails}>
                <div className={classes.titleWrapper}>
                    <h6>{title}</h6>
                    <Price product={product} button={false}/>
                </div>
                <div className={classes.quantity}>
                    <div className={classes.quantityBtn} onClick={decrementQty}>
                    <Image 
                    src='/assets/icons/minus.svg'
                    alt='minus'
                    width={24}
                    height={24}
                    className={classes.qtnBt}/>
                    </div>

                    <input 
                    type='text'
                    className={classes.quantityInput}
                    value={quantity}
                    onChange={enterQty}
                    />

                    <div className={classes.quantityBtn} onClick={incrementQty}>
                    <Image 
                    src='/assets/icons/plus.svg'
                    alt='plus'
                    width={24}
                    height={24}
                    className={classes.qtnBt}/>

                    </div>

                </div>

            </div>
            <div className={classes.subtotalWrapper}>
                <Price product={product} button={false} quantity={quantity}/>
                <RemoveFromCartButton product={product}/>
            </div>
    </li>
  )
}

export default CartItem
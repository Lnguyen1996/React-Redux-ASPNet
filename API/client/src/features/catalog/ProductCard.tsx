import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import React from 'react'
import { Product } from '../../app/model/products'
interface Props{
    product:Product;
}
export const ProductCard = ({product}:Props) => {
    return (
        <ListItem key={product.id}>
        <ListItemAvatar>
          <Avatar src={product.pictureUrl} />
        </ListItemAvatar>
        <ListItemText>
          {product.name} - {product.price}
        </ListItemText>
      </ListItem>
    )
}

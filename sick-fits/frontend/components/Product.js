import Item from './styles/ItemStyles';
import Link from 'next/link';

import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from './../lib/formatMoney';

export default function Product({ product }) {
    return (
        <Item>
            <img
                src={product?.photo?.image?.publicUrlTransformed}
                alt={product.name}
            />
            <Title>
                <Link href={`product/${product.id}`}>{product.name}</Link>
            </Title>
            <PriceTag>{formatMoney(product.price)}</PriceTag>
            <p>{product.description}</p>
            {/*  TODO: add buttons to edit and delete item */}
        </Item>
    );
};
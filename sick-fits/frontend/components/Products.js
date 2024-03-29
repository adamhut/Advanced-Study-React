import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styeld from 'styled-components'
import Product from './Product';

export const ALL_PRODUCTS_QUERY = gql`
query ALL_PRODUCTS_QUERY{
  allProducts{
    id,
    name,
    price,
    description,
    photo{
      id,
      image{
      	publicUrlTransformed
      }
    }
  }
}

`;

const ProductListStyle = styeld.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:60px;
`

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error:{error.message}</p>;
  }

  return (
    <div>
      <ProductListStyle>
        {data.allProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductListStyle>
    </div>
  );
}

export { }
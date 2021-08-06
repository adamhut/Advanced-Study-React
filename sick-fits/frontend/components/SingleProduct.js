import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import DisplayError from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
    query {
    Product(where: {
            id:  "60e468e7a9e7eb800430b77a"
        }) {
        name
        price
        description
    }
    }
`

export default function SingleProduct({ id }) {

    const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);

    if (loading) return <p>Loading !!!</p>;
    if (error) return <DisplayError error={error} />;
    return (
        <p>Single Product</p>
    )

}
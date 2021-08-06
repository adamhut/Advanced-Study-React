import SingleProduct from '../../components/SingleProduct';


export default function SingleProductPage({ query }) {

    // console.log(props);

    return <SingleProduct id={ query.id }></SingleProduct>;
}

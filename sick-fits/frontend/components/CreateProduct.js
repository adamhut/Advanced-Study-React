import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { Router } from 'next/router';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';


const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
      # which variables are getting passed in? and what types are they.
      $name: String!
      $description: String!
      $price: Int!
      $image: Upload
  ){
    createProduct(
      data:{
        name: $name
        description:$description
        price: $price
        status: "AVAILABLE",
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;


export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Nice shoe',
    price: 3432,
    description: 'description'
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );
//   console.log(createProduct);

  function handleSubmit(e) {
    e.preventDefault();
  }

    return (
        <Form
            onSubmit={async (e) => {
                e.preventDefault();
                console.log(inputs);
                //submit the inputfields to the backend:
                const res = await createProduct();
                //console.log(res)
                clearForm();
                // go to the product's page!+
                // router.push(`/product/${res.data.createProduct.id}`);
                Route.push({
                  pathname: `/product/[id]`,
                  query: { id: res.data.createProduct.id },
                });
            }}>
            <DisplayError error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="image">
                    Image
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                    />
                </label>
            <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={inputs.name}
                        onChange={handleChange}

                    />
                </label>
                <label htmlFor="price">
                Price
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="price"
                    value={inputs.price}
                    onChange={handleChange}
                />
                </label>

            <label htmlFor="description">
                Description
                <textarea
                    id="description"
                    name="description"
                    placeholder="description"
                    value={inputs.description}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">+ Add Product</button>
            {/* <button type="submit" onClick={clearForm}> + Add Product</button>
            <button type="button" onClick={resetForm}> Reset Form</button> */}
            </fieldset>
        </Form>
    )
}

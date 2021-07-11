import { useState } from 'react'

export default function useForm(initialState = {}) {
    //create a state object for our input
    const [inputs, setInputs] = useState(initialState);

    // {
    //      name: 'adam',
    //      description: 'nice shoes',
    //      price:1000,
    // }

    function handleChange(e) {
        let { value, name, type } = e.target;
        if (type === 'number') {
            value: parseInt(value);
        }
        if (type === 'file') {
            value[0] = e.target.files;
        }
        setInputs({
            //copy the existing state
            ...inputs,
            [name]: value,
        })
    }

    function resetForm() {
        setInputs(initialState);
    }

    function clearForm() {

        const blankState = Object.fromEntries(
            Object.entries(inputs).map(([key, value]) => {
                return [key, ''];
            })
        );
        setInputs(blankState);

    }

    //return the things we want to surface from this custom hook

    return {
        inputs,
        handleChange,
        resetForm,
        clearForm
    };
}
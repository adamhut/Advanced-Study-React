import { useState } from 'react';

export default function CreateProduct() {
    const [name, setName] = useState('Wes');

    let handleInput = (e) => {
        setName(e.target.value);
    };

    return (
        <form htmlFor="name">
            Name
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleInput}
            />
        </form>
    )
}

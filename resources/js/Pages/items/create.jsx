import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';

const create = () => {
    const [name, setName] = useState();
    const [qty, setQty] = useState();
    const handelSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/items',{name,qty});
    };
    return (
        <div>
        <form
            action=""
            onSubmit={handelSubmit}
            className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
        >
            <h1 className="text-2xl font-bold text-gray-700 text-center">
                Create Item
            </h1>

            {/* Title Input */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="name"
                    className="text-gray-600 font-medium"
                >
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the name"
                />
            </div>

            {/* Content Textarea */}
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor="qty"
                    className="text-gray-600 font-medium"
                >
                  Quantity
                </label>
                <input

                    onChange={(e) => setQty(e.target.value)}
                    type='number'
                    name="qty"
                    id="qty"
                    rows="5"
                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your blog content here..."
                ></input>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Save
            </button>
        </form>
    </div>
    );
};

export default create;

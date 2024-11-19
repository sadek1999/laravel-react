import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";


const create = () => {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const handelSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/blogs',{title,content});
    };
    return (
        <div>
            <form
                action=""
                onSubmit={handelSubmit}
                className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
            >
                <h1 className="text-2xl font-bold text-gray-700 text-center">
                    Create Blog
                </h1>

                {/* Title Input */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="title"
                        className="text-gray-600 font-medium"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter the blog title"
                    />
                </div>

                {/* Content Textarea */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="content"
                        className="text-gray-600 font-medium"
                    >
                        Content
                    </label>
                    <textarea
                        onChange={(e) => setContent(e.target.value)}
                        name="content"
                        id="content"
                        rows="5"
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your blog content here..."
                    ></textarea>
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
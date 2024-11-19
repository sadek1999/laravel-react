import React from 'react';

const index = ({items}) => {
    console.log(items)
    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                            ID
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                            Title
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                            Content
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample Row */}
                    {items.map((item) => (
                        <tr key={item.id} className="border-t border-gray-200">
                            <td className="px-6 py-4 text-sm text-gray-800">
                                {item.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                {item.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                {item.qty}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <button  className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition duration-200 mr-2">
                                    Edit
                                </button>
                                <button
                                // onClick={Inertia.delete(`/blogs/${blog.id}`)}
                                 className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition duration-200">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
};

export default index;

import { useState } from 'react';

function ValueDefaultValueComponent() {
    const [name, setName] = useState("value")

    // const handleOnChange = (e: any) => {
    //     // This will not reflect on value of input
    //     console.log(e.target.value);

    //     // to set the value use a state
    //     // setName(e.target.value)
    // }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Uncontrolled Form</h2>

                <div className="mb-4">
                    <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="name"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        defaultValue="default value"
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-300`}
                    />

                    {/* <input
                        id="name"
                        defaultValue="default value"
                        value="value"
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-300`}
                    /> */}

                    {/* <input
                        id="name"
                        value={name}
                        onChange={handleOnChange}
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-300`}
                    /> */}

                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ValueDefaultValueComponent;

import { useForm } from "react-hook-form";
import './App.css';
import { useEffect, useRef } from "react";

function UncontrolledComponent() {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const myFormRef = useRef<HTMLFormElement | null>(null);
    // const { onChange, onBlur, name, ref } = register('name');

    const onSubmit = (data: any) => {
        console.log(data);
        // reset();
        if (myFormRef.current) {
            myFormRef.current.reset();
        }
        // reset({});
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    useEffect(() => {
        reset({ example: "heda"})
    }, []);

    // console.log(register);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded shadow-md w-96"
                ref={myFormRef}
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
                        {...register("example")}
                        id="name"
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
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

export default UncontrolledComponent;

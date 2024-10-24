import { useRef } from "react";
import { useForm } from "react-hook-form";

function UncontrolledComponent() {
    const { register, handleSubmit, watch, formState: { errors, isValid, isSubmitting, isLoading, submitCount }, reset, control } = useForm();

    // Show Default value on input fields
    // const { register, handleSubmit, watch, formState: { errors, isValid, isSubmitting, isLoading, submitCount }, reset, control } = useForm({
    //     defaultValues: {
    //         name: "John Cena"
    //     }
    // });

    console.log(control);

    // register methods
    const { onChange, onBlur, name, ref } = register('name');

    const myFormRef = useRef<HTMLFormElement | null>(null);


    const onSubmit = (data: any) => {
        console.log(data);

        // it will reset to the default values
        reset();

        // This will reset to null
        // if (myFormRef.current) {
        //     myFormRef.current.reset();
        // }
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    // API call on mount to prefill on edit mode
    // useEffect(() => {
    //     reset({ name: "John Doe"})
    // }, []);

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

                    {/* <input
                        ref={ref}
                        name={name}
                        onChange={onChange}
                        id="name"
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    /> */}

                    {/* <input
                        {...register("name")}
                        id="name"
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    /> */}

                    {/* <input
                        {...register("name", { required: true })}
                        id="name"
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    /> */}

                    <input
                        {...register("name", { required: "Name field is required" })}
                        id="name"
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name?.message && typeof errors.name.message === 'string' && (
                        <span className="text-red-500">{errors.name.message}</span>
                    )}

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

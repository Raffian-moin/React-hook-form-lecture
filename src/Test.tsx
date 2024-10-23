import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Test() {
    const { register, handleSubmit, reset } = useForm();
    const resetAsyncForm = useCallback( () => {
        // const result =  fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
        reset({ firstName: 'test', lastName: 'test2' }); // asynchronously reset your form values
    }, [reset]);

    useEffect(() => {
        resetAsyncForm()
    }, [resetAsyncForm])

    return (
        <form onSubmit={handleSubmit((data: any) => { })}>
            <input {...register("firstName")} />
            <input {...register("lastName")} />

            <input type="button" onClick={() => {
                reset({
                    firstName: "bill"
                }, {
                    keepErrors: true,
                    keepDirty: true,
                });
            }} />

            <button
                onClick={() => {
                    reset(formValues => ({
                        ...formValues,
                        lastName: 'test',
                    }))
                }}
            >
                Reset partial
            </button>
        </form>
    );
}

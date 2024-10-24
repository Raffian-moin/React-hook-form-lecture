import { Input } from '@nextui-org/react';
import { Controller, useForm } from "react-hook-form";

function ControlledComponent() {

    const methods = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Controller
                    control={methods.control}
                    name="name"
                    render={({ field }) => (
                        <Input
                            // {...field}
                            // ref={field.ref}
                            // onChange={field.onChange}
                            className="mb-3"
                            label="Name"
                            labelPlacement="outside"
                            variant="bordered"
                            // value={field.value}
                            // errorMessage={methods.formState.errors.example?.message as string | undefined}
                            // isInvalid={methods.formState.errors.example ? true : false}
                        />
                    )}
                    rules={{ required: "This field is required" }}
                />
                <input type="submit" />
            </form>


            {/* <FormProvider {...methods} key="register">
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <TextInput name="name" />
                    <input type="submit" />
                </form>
            </FormProvider> */}

        </>

    );
}

export default ControlledComponent
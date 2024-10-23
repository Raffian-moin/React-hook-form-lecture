import { Input } from '@nextui-org/react';
import './App.css'
import { Controller, useForm } from "react-hook-form";

function ControlledComponent() {

    const methods = useForm();
    const onSubmit = (data: any) => console.log(data);

    // console.log(methods.formState.submitCount);

    // console.log(methods.watch("example")); // watch input value by passing the name of it
    // console.log(methods); // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Controller
                control={methods.control}
                name="example"
                render={({ field }) => (
                    <Input
                        {...field}
                        className="mb-3"
                        label="email"
                        labelPlacement="outside"
                        placeholder="&nbsp;" // 🙃 Hack for placing the labels "outside".
                        radius="sm"
                        variant="bordered"
                    // value={field.value}
                    // errorMessage={methods.formState.errors.example?.message as string | undefined}
                    // isInvalid={methods.formState.errors.example ? true : false}


                    />
                )}
                rules={{ required: "this field is requird" }}
            />



            <input type="submit" />
        </form>
    );
}

export default ControlledComponent
import { Input } from "@nextui-org/react";
import { Controller, useFormContext, RegisterOptions } from "react-hook-form";

interface IProps {
    isDisabled?: boolean;
    name: string;
    labelText?: string; // Recommended instead of 'label'. Will adhere to the Framework's design.
    labelPlacement?: "outside-left" | "outside" | "inside" | undefined;
    rules?: RegisterOptions;
    placeholder?: string;
    [key: string]: any;
}

const TextInput = (props: IProps) => {
    const { control, formState } = useFormContext(); // retrieve all the hook methods
    const { name, rules, labelText, isDisabled } = props;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <Input
                    {...field}
                    className="mb-3"
                    // errorMessage={formState.errors[name]?.message as string | undefined}
                    // isDisabled={isDisabled}
                    // isInvalid={formState.errors[name] ? true : false}
                    label={<strong>{labelText} </strong>}
                    labelPlacement="outside"
                    rules={rules}
                    variant="bordered"
                    {...props}
                />
            )}
            rules={rules}
        />
    );
};

export default TextInput;

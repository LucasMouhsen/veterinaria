import { ChangeEvent } from "react";

type InputType = 'text' | 'number' | 'password' | 'date';

export interface InputFormProps {
    label: string;
    type: InputType;
    name: string;
    error?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm = ({
    label,
    type,
    name,
    error,
    value,
    placeholder,
    className,
    onChange
}: InputFormProps) => {
    return (
        <div className={`mb-5 ${className}`}>
            <label
                htmlFor={name}
                className="block text-gray-700 uppercase font-bold text-start"
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                className={`border w-full p-2 mt-2 placeholder-gray-300 ${error ? 'border-red-700' : 'border-gray'}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <p className="text-sm text-red-700 ms-2">{error}</p>
        </div>
    )
}

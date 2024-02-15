import { Dispatch, FormEvent, SetStateAction } from "react"
import { useForm } from "../hooks/useForm"
import { InputForm } from "./input-form"

export interface FormValues {
    mascota: string;
    duenio: string;
    email: string;
    raza: string;
}

export const Formulario = ({ setPacientes }: { setPacientes: Dispatch<SetStateAction<FormValues[]>> }) => {

    const { formValues, handleChange, reset } = useForm<FormValues>({
        mascota: '',
        raza: '',
        duenio: '',
        email: ''
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setPacientes((prev: FormValues[]) => {
            return [...prev, formValues]
        })
        reset()
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3x1 mb-10 text-center">
                Registrar
                <span className="text-indigo-700">
                    Nuevo Paciente
                </span>
                <form
                    className="bg-white shadow-lg rounded py-10 px-6 mb-10"
                    onSubmit={handleSubmit}>
                    <InputForm
                        label="Mascota"
                        name="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        onChange={handleChange}
                    />
                    <InputForm
                        label="Raza"
                        name="raza"
                        type="text"
                        placeholder="Nombre de la raza"
                        onChange={handleChange}
                    />
                    <InputForm
                        label="Dueño"
                        name="duenio"
                        type="text"
                        placeholder="Nombre del dueño"
                        onChange={handleChange}
                    />
                    <InputForm
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="Email de contacto"
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white font-bold py-4 px-8 rounded w-full uppercase hover:bg-indigo-500 transition ease-in duration-200"
                    >
                        Agregar paciente
                    </button>
                </form>
            </h2>
        </div>
    )
}

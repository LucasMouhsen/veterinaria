import { FormEvent, useState } from "react"
import { useForm } from "../hooks/useForm"
import { InputForm } from "./input-form"
import { Pacient } from "../context/patientContext"
import { usePacient } from "../hooks/usePatient"
import { schemaFormAddPatient } from "../validations/schema-form-add"



type FormValues = Omit<Pacient, 'id'>

// export const Form = ({ setPacients }: { setPacients: Dispatch<SetStateAction<FormValues[]>> }) => {

export const Form = () => {
    const { savePacient } = usePacient()
    const [errors, setErrors] = useState<FormValues>({} as FormValues)

    const { formValues, handleChange, reset } = useForm<FormValues>({
        pet: '',
        breed: '',
        owner: '',
        email: ''
    })
    const { pet, owner, email, breed } = formValues;
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const result = schemaFormAddPatient.validate(formValues, {
            abortEarly: false
        })
        if (result.error) {
            setErrors(result.error.details.reduce((acc, err) => {
                const inputName = err.context?.key as string;
                const message = err.message;
                return {
                    ...acc,
                    [inputName]: message
                };
            }, {} as FormValues))
        } else {
            const newPacient = {
                id: crypto.randomUUID(),
                ...formValues
            }
            savePacient(newPacient)
            setErrors({} as FormValues)
            reset()
        }


    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3x1 mb-10 text-center">
                Registrar{' '}
                <span className="text-indigo-700">
                    Nuevo Paciente
                </span>
                <form
                    className="bg-white shadow-lg rounded py-10 px-6 mb-10"
                    onSubmit={handleSubmit}>
                    <InputForm
                        label="Mascota"
                        name="pet"
                        type="text"
                        placeholder="Nombre de la pet"
                        onChange={handleChange}
                        value={pet}
                        error={errors.pet}
                    />
                    <InputForm
                        label="Raza"
                        name="breed"
                        type="text"
                        placeholder="Nombre de la breed"
                        onChange={handleChange}
                        value={breed}
                        error={errors.breed}
                    />
                    <InputForm
                        label="Dueño"
                        name="owner"
                        type="text"
                        placeholder="Nombre del dueño"
                        onChange={handleChange}
                        value={owner}
                        error={errors.owner}
                    />
                    <InputForm
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="Email de contacto"
                        onChange={handleChange}
                        value={email}
                        error={errors.email}
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

import { Pacient } from "../context/patientContext"

export const PacienteCard = ({
    patient: { pet, owner, breed, email }
}: { patient: Pacient }) => {
    return (
        <div className='bg-white shadow-sm px-5 py-10 rounded mb-3 mx-3'>
            <p className='block mb-3 text-gray-700 uppercase font-bold'>
                Mascota: <span className='font-normal normal-case'>{pet}</span>
            </p>
            <p className='block mb-3 text-gray-700 uppercase font-bold'>
                Raza: <span className='font-normal normal-case'>{breed}</span>
            </p>
            <p className='block mb-3 text-gray-700 uppercase font-bold'>
                Dueño: <span className='font-normal normal-case'>{owner}</span>
            </p>
            <p className='block mb-3 text-gray-700 uppercase font-bold'>
                Email: <span className='font-normal normal-case'>{email}</span>
            </p>

        </div>
    )
}

import { usePacient } from "../hooks/usePatient";
import { PacienteCard } from "./patient-card";

export const ListPatients = () => {
    const { patients } = usePacient()
    return (
        <div className="md:w-1/2 lg:w-3/5 px-3">
            <h2 className="font-bold text-3x1 mb-10 text-center">
                Listado de {' '}
                <span className="text-indigo-700 font-bold">Pacients</span>
            </h2>
            <div className="h-screen overflow-y-scroll mb-10">
                {patients && patients.map(patient => (
                <PacienteCard key={patient.id} patient={patient}/>
                ))}

            </div>
        </div>
    )
};

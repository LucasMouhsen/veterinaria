import { PropsWithChildren, useState } from "react"
import { Pacient, PatientContext, PacientContextProps } from "./patientContext"


export const PatientProvider = ({ children }: PropsWithChildren) => {
    const [patients, setPacients] = useState<Pacient[]>([]);

    const savePacient = (patient: Pacient) => {
        setPacients((prev: Pacient[]) => {
            return [...prev, patient]
        })
    }
    /* function deletePacient(id: number) {
        setPacients(patients.filter((patient: Pacient[]) => patient.id !== id))
    } */
    const values: PacientContextProps = {
        patients,
        savePacient,
    }
    return (
        <PatientContext.Provider value={values}>
            {children}
        </PatientContext.Provider>
    )
}

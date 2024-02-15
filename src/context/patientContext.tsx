import { createContext } from "react";

export interface Pacient {
    id: string,
    pet: string;
    owner: string;
    email: string;
    breed: string;
}

export interface PacientContextProps {
    patients: Pacient[];
    savePacient : (patient: Pacient) => void;
    deletePacient ?: (id: string) => void;
}
export const PatientContext =  createContext<PacientContextProps>({} as PacientContextProps)

import { useContext } from 'react'
import { PatientContext } from '../context/patientContext'

export const usePacient = () => {
    return useContext(PatientContext)
}

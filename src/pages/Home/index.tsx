import { Header } from '../../components/header'
import { Form } from '../../components/form'
import { ListPatients } from '../../components/list-patients'

export const Home = () => {
    return (
        <div className="container mx-auto mt-10">
            <Header />
            <div className="mt-12 p-3 md:flex">
                <Form />
                <ListPatients />
            </div>
        </div>
    )
}

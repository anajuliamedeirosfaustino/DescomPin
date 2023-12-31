import Container from "react-bootstrap/Container";
import { ListGroup } from "../../../components/ListGroup/ListGroup";
import { useAppContext } from '../../store/AppContext'

const adapterItems = (items) => {
    return items.map(item => ({
        ...item,
        title: item.name,
        total: items.pins.length
    }))
}

export const MinhasPastasPage = () => {
    const { state } = useAppContext();
    state.folders
    return (
        <Container>
            <ListGroup items={adapterItems(state.folders)}/>
        </Container>
   )
}
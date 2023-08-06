
import EmployersListItem from '../employees-list-item/employees-list-item';
import './employers-list.css';

const EmployersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem name="Саша" salary={800}/>
            <EmployersListItem name="Маша" salary={200}/>
            <EmployersListItem name="Паша" salary={1000}/>
        </ul>
    );
}

export default EmployersList;
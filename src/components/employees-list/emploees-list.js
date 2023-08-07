
import EmployersListItem from '../employees-list-item/employees-list-item';
import './employers-list.css';

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...ietmProps} = item;
        return (
            <EmployersListItem key={id} {...ietmProps}/>
            // <EmployersListItem name={item.name} salary={item.salary} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;
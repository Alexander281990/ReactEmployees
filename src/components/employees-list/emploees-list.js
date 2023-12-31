
import EmployersListItem from '../employees-list-item/employees-list-item';
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    const elements = data.map(item => {
        const {id, ...ietmProps} = item;
        return (
            <EmployersListItem 
                key={id} 
                {...ietmProps}
                onDelete ={() => onDelete(id) }
                onToggleIncrease={() => onToggleIncrease(id)}
                onToggleRise={() => onToggleRise(id)}/>
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
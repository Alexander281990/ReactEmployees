
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employees-list/emploees-list';
import EmployersAddForm from '../employees-add-form/employees-add-form';
import './app.css';


function App() {

    const data = [
        {name: "Саша", salary: 800, increase: false, id: 1},
        {name: "Маша", salary: 200, increase: true, id: 2},
        {name: "Паша", salary: 1000, increase: false, id: 3},
        {name: "Вася", salary: 1000, increase: false, id: 4},
        {name: "Миша", salary: 500, increase: false, id: 5},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;
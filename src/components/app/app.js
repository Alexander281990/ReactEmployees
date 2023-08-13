
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employees-list/emploees-list';
import EmployersAddForm from '../employees-add-form/employees-add-form';
import './app.css';

import { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Саша", salary: 800, increase: false, like: true, id: 1},
                {name: "Маша", salary: 200, increase: true, like: false, id: 2},
                {name: "Паша", salary: 1000, increase: false, like: false, id: 3},
                {name: "Вася", salary: 1000, increase: false, like: false, id: 4},
                {name: "Миша", salary: 500, increase: false, like: false, id: 5},
                {name: "Коля", salary: 650, increase: false, like: false, id: 6},
                {name: "Олег", salary: 850, increase: false, like: false, id: 7},
            ],
            term: '',
            filter: 'all',
        }
    }

    // function WhoAmi({name, surname, link}) {
    //     return (
    //         <div>
    //             <h1>My name is {name()}, surname - {surname}</h1>
    //             <a href={link}>My profile</a>
    //         </div>
    //     )
    // }

    // class WhoAmi extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             yerars: 27,
    //             text: "+++",
    //             position: "",
    //         }
    //     }
    //     nextYear = () => {
    //         this.setState(state => ({
    //             yerars: state.yerars + 1,
    //             text: "++",
    //         }))
    //     }
    //     commitInputChanges = (e) => {
    //         this.setState({
    //             position: e.target.value,
    //         })
    //     }
    //     render() {
    //         const {name, surname, link} = this.props;
    //         const {position, yerars} = this.state;
    //         return (
    //             <div>
    //                 <button onClick={this.nextYear}>{this.state.text}</button>
    //                 <h1>My name is {name}, surname - {surname}, age - {yerars}, position - {position}</h1>
    //                 <a href={link}>My profile</a>
    //                 <form>
    //                     <span>Введите должность</span>
    //                     <input type="text" onChange={this.commitInputChanges}/>
    //                 </form>
    //             </div>
    //         )
    //     }
    // }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id),
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, increase: !old.increase};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr,
            }
        })
    }

    onToggleRise = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr,
            }
        })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(items => {
            return items.name.indexOf(term) > -1
        }) 
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.like);
            case 'moreThen1000':
                return items.filter(item => item.salary > 500);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                {/* <WhoAmi name='John' surname="Smith" link="facebook.com"></WhoAmi>
                <WhoAmi name='John' surname="Shepard" link="vk.com"></WhoAmi> */}
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}/>
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
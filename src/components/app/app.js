
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
                {name: "Саша", salary: 800, increase: false, id: 1},
                {name: "Маша", salary: 200, increase: true, id: 2},
                {name: "Паша", salary: 1000, increase: false, id: 3},
                {name: "Вася", salary: 1000, increase: false, id: 4},
                {name: "Миша", salary: 500, increase: false, id: 5},
                {name: "Коля", salary: 650, increase: false, id: 6},
            ],
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
                data: data.filter(item => item.id != id),
            }
        })
    }

    render() {
        return (
            <div className="app">
                {/* <WhoAmi name='John' surname="Smith" link="facebook.com"></WhoAmi>
                <WhoAmi name='John' surname="Shepard" link="vk.com"></WhoAmi> */}
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
                <EmployersAddForm/>
            </div>
        );
    }
}

export default App;
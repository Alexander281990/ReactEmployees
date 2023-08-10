import { Component } from 'react';
import './employers-add-form.css';

// const EmployersAddForm = () => {
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?" />
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?" />

//                 <button type="submit"
//                         className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     );
// }

class EmployersAddForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }
    onValueChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        name="name"
                        value={name}
                        placeholder="Как его зовут?" 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        name="salary"
                        value={salary}
                        placeholder="З/П в $?" 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}

export default EmployersAddForm;
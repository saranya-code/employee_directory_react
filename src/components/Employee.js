import React,{ Component } from "react";
import axios from "axios"
class Employee extends Component{

    state= {
        employees:[]
    }

    getEmployeeDetails = () => {
        return axios.get('https://randomuser.me/api/?results=10&inc=phone,name,email,picture')
        .then(response => {
            this.setState({employees:response.data.results})
        })
    }

    componentDidMount(){
        this.getEmployeeDetails();
    }

    

    render(){
        console.log('employeeList', this.state.employeeList)
        return(
            <div>
                <div class="text-center">
                    <label for="search"> Search Name </label>
                    <input type="text"/> <br/>
                    <br/>
                </div>
           
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                
                    {this.state.employees.length ? this.state.employees.map(employee => 
                        <tr>
                            <td> <img src ={employee.picture.thumbnail} alt= "thumbnail"/> </td>
                            <td>{employee.name.first} {employee.name.last}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                        </tr>)
                        : <div>No Employee to show</div>
                    }
            </table>
            </div>
        );
    }
}

export default Employee;
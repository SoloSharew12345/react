
import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';


function Employees() {
  const [employees,setEmployees] = useState(
    [
      {
        id: 1,
        name:"Solomon",
        role:"Developer",
        img:"https://images.pexels.com/photos/19343942/pexels-photo-19343942/free-photo-of-the-vatican-is-a-beautiful-place-to-visit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 2,
      name:"Messi"
      ,role:"Engineer",
      img:"https://images.pexels.com/photos/2123778/pexels-photo-2123778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name:"Asteshi",
      role:"Dev",
      img:"https://images.pexels.com/photos/2071881/pexels-photo-2071881.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
     {
      id:4,
      name:"Emu",
      role:"Big Data",
      img:"https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:5,
      name:"Solomon",
      role:"Developer",
      img:"https://images.pexels.com/photos/19343942/pexels-photo-19343942/free-photo-of-the-vatican-is-a-beautiful-place-to-visit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id:6,
      name:"Emu",
      role:"Big Data",
      img:"https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:7,
      name:"Asteshi",
      role:"Dev",
      img:"https://images.pexels.com/photos/2071881/pexels-photo-2071881.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    
  ]);

  function updateEmployee(id,newName,newRole){
   const updateEmployees = employees.map((employee) => {
       if ( id == employee.id){
        //return new
        return {...employee,name:newName, role: newRole}
       }
       return employee;
   });
   setEmployees(updateEmployees);
  }

  function newEmployee(name,role,img){
   const newEmployee = {
      id:uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmployees([...employees,newEmployee])
  }
  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen my-2">
      {showEmployees ? ( 
      <>
      <div className="flex flex-wrap justify-center">
      {employees.map((employee) => {
        const editEmployee = ( 
        <EditEmployee 
        id = {employee.id}
        name={employee.name} 
        role={employee.role} 
        updateEmployee={updateEmployee} 
        />
        );
        return (
          <Employee 
        key = {employee.id}
        id = {employee.id}
        name = {employee.name} 
        role={employee.role} 
        img={employee.img}
        editEmployee = {editEmployee}
        />
        );
        
      })}
        </div>
        <AddEmployee newEmployee={newEmployee} />
      </>
      ):( 
      <p>You cannot see the employees</p>
        )}  
    </div>
  );
}

export default Employees;

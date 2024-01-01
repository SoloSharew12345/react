
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role,setRole] = useState('dev');
  const [employees,setEmployees] = useState(
    [
      {name:"Solomon",role:"Developer",img:"https://images.pexels.com/photos/19343942/pexels-photo-19343942/free-photo-of-the-vatican-is-a-beautiful-place-to-visit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {name:"Sol",role:"Engineer",img:"https://images.pexels.com/photos/2123778/pexels-photo-2123778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {name:"Asteshi",role:"Dev",img:"https://images.pexels.com/photos/2071881/pexels-photo-2071881.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
     {name:"Emu",role:"Big Data",img:"https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {name:"Solomon",role:"Developer",img:"https://images.pexels.com/photos/19343942/pexels-photo-19343942/free-photo-of-the-vatican-is-a-beautiful-place-to-visit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {name:"Emu",role:"Big Data",img:"https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {name:"Asteshi",role:"Dev",img:"https://images.pexels.com/photos/2071881/pexels-photo-2071881.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    ]
  );
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? ( 
      <>
      <input 
      type='text'
       onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value);
      }}
      />
      <div className="flex flex-wrap justify-center">
      {employees.map((employee) => {
        console.log(uuidv4());
        return (
          <Employee 
        key = {uuidv4()}
        name = {employee.name} 
        role={employee.role} 
        img={employee.img}
        />
        );
        
      })}
        </div>
      </>
      ):( 
      <p>You cannot see the employees</p>
        )}  
    </div>
  );
}

export default App;

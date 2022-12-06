import { useState } from "react";
import './App.css';
import FormInput from './components/formInput';

const App = () => {
  const [values, setValues] = useState({  
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:""
  })
  // const usernameRef = useRef();

  console.log("render");

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage: "should be 3-6 characters",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage: "should be 3-6 characters",
      label:"Email",
      required: true,

    },
    {
      id:3,
      name: "birthday",
      type:"date",
      placeholder:"Birthday",
      label: "Birthday",
    },
    {
      id:4,
      name: "password",
      type: "password",
      placeholder:"Password",
      errorMessage: "should be 3-6 characters",
      label:"Password",
      pattern:"^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$",
      required: true,
    },
    {
      id:5,
      name: "confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage: "should be 3-6 characters",
      label:"Confirm Password",
      pattern:values.password,
      required: true,
    },
  ]


  const handleSubmit =(e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(data);
  };

  const onChange =(e) =>{
    setValues({...values, [e.target.name]: e.target.value});
  }


  console.log(values);

  return <div className="App">  
    <form onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      {inputs.map((input) =>(
      <FormInput 
      key={input.id} 
      {...input} 
      value={values[inputs.name]}  
      onChange={onChange} 
      />
      ))}
      <button>Submit</button>
    </form>
  </div>
};

export default App;

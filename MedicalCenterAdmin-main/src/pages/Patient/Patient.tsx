import React, { ChangeEvent, Component } from 'react'
import TextField from '@mui/material/TextField'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';import { relative } from 'path';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import axios from '../../axios';


type PatientDetails = {
  email:string;
  userName:string;
  password:string;
};
type PatientProps = {};
type PatientState = {
  patientList: PatientDetails[];
  email:string;
  userName:string;
  password:string;
};
export default class Patient extends Component  <PatientProps, PatientState>{
  constructor(props: PatientProps) {
    super(props);
    this.state = {
      patientList: [],
      email:"",
      userName:"",
      password:"",
      
    };
  };
  componentDidMount(): void {
    this.getAllPatient();
  };
  getAllPatient =()=>{
    axios.get ("http://localhost:5000/api/v1/patient").then((res)=>{
       console.log(res.data.responseData);
       this.setState((prevState)=>({
         ...prevState,
         patientList:res.data.responseData,
       }))
    })
 };
 searcPatient = () =>{
  axios.get(`patient/${this.state.email}`).then((res)=>{
    const { email,userName,password} = res.data.responseData;
      this.setState((prevState )=>({
        ...prevState,
        email:email,
       userName:userName,
       password:password,
      })); 
  });
 };
 handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const { email,userName,password } = this.state;
  let newPatient = {
        email:email,
       userName:userName,
       password:password,
  };}

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const inputValue = type == "number" ? parseInt(value) : value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  deletePatient = () =>{
    axios.delete(`patient/${this.state.email}`).then((res)=>{
      alert(res.data.message);
      this.getAllPatient()
      this.clearData();
    }).catch((error)=>{
      alert('not deleted')
    });
  };
  
  clearData = () =>{
    this.setState((prevState)=>({
      ...prevState,
      email:"",
      userName:"",
      password:"",
    }));
  }
  render() {
    return (
      <div className='mt-10 '>

<section>
            <div className="cursor-pointer w-full pt-2 border-2 border-white pb-2 pl-6 bg-sky-900 text-white rounded flex justify-between items-center ">
             <h1 className='text-2xl '>Patient's Details</h1>
            </div>
            <section className='grid grid-cols-2 gap-4 mt-10 pl-10 pr-10 w-auto h-auto'>
          
             <div className='h-auto mt-3 '>
                <table className="table">
                      <thead className="table-dark">
                      <tr >
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope='col'>Password</th>
                        <th scope="col"><DeleteIcon/></th>
                      </tr>
                     </thead>
                      <tbody>
                      {this.state.patientList.map((patient) => (
                        <tr>
                       <td>{patient.email}</td>
                       <td>{patient.userName}</td>
                       <td>. . . . . . .</td>
                       <td><CloseIcon/></td>
                        </tr>
                     ))};

                     </tbody>
                    </table>
                </div> 
            <div className="bg-transparent ">
            <div className="bg-slate-200 border-2 border-gray-700 p-4 rounded-3xl shadow-2xl shadow-black">
               <div className='flex space-x-5'>
               <form onSubmit={this.handleSubmit} className='text-2xl '>
                <div className='flex justify-center space-x-10 mb-5'>
                <TextField
                      margin="normal"
                      required
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      type="text"
                      variant="outlined"
                      value={this.state.email}
                      onChange={this.handleInput}
                      onClick={this.searcPatient}
                    />
            <button type="button" onClick={this.searcPatient} className="btn btn-success pb-2 h-11 mt-4 pl-4 pr-4">Search Patient<PersonSearchIcon/></button>
            
                </div>
                <div className='flex justify-start space-x-20 m-1'>
                <div className='text-xl'>Email Address
                <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          type="text"
                          variant="standard"

                          value={this.state.email}
                          onChange={this.handleInput}
                        />
                  </div>
                  <div className='text-xl'>User Name
                  <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="text"
                          label="User Name"
                          name="userName"
                          autoFocus
                          variant="standard"

                          value={this.state.userName}
                          onChange={this.handleInput}
                        />
                  </div>           
                </div>
                <button type="button" onClick={this.deletePatient} className="btn btn-danger">Delete Patient<CloseIcon/></button>
              </form>
               </div>
            </div>
           
            </div>
            </section>
            </section>
      </div>
    )
  }
}

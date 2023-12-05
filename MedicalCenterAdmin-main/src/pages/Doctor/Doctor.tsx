import React, { ChangeEvent, Component } from 'react'
import TextField from '@mui/material/TextField'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';import { relative } from 'path';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import axios from '../../axios';
import { Key } from '@mui/icons-material';
import { error } from 'console';

type DoctorDetails = {
  DId: string;
  DName: string;
  position: string;
  time: string;
  contact: string;
  DCharge: number;
  wardNo: number;
};
type DoctorProps = {};
type DoctorState = {
  DoctorList: DoctorDetails[];
  DId: string;
  DName: string;
  position: string;
  time: string;
  contact: string;
  DCharge: number;
  wardNo: number;
 
};

export default class Doctor extends Component <DoctorProps, DoctorState>{
  constructor(props: DoctorProps) {
    super(props);
    this.state = {
      DoctorList: [],
      DId: "",
      DName: "",
      position: "",
      time: "",
      contact: "",
      DCharge: 0,
      wardNo: 0,
      
    };
  };
  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const inputValue = type == "number" ? parseInt(value) : value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  componentDidMount(): void {
    this.getAllDoctors();
  };
  getAllDoctors =()=>{
     axios.get ("http://localhost:5000/api/v1/doctor").then((res)=>{
        console.log(res.data.responseData);
        this.setState((prevState)=>({
          ...prevState,
          DoctorList:res.data.responseData,
        }))
     })
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { DId, DName, position, time, contact, DCharge, wardNo } = this.state;
    let newDoctor = {
      DId: DId,
      DName: DName,
      position: position,
      time: time,
      contact: contact,
      DCharge: DCharge,
      wardNo: wardNo,
    };
    axios
    .post("http://localhost:5000/api/v1/doctor", newDoctor)
    .then((res) => {
      // this.setState((prevState)=>({
      //     PatientList:[...prevState.PatientList, res.data.responseData]
      // }));
      this.getAllDoctors();
      this.clearData();
      console.log(res);
    })
    .catch((error) => {});
   };
searchPatient=()=>{
  axios.get(`doctor/searchById/${this.state.DId}`).then((res)=>{
    const { DId, DName, position, time, contact, DCharge, wardNo } = res.data.responseData;
      this.setState((prevState )=>({
        ...prevState,
        DId: DId,
        DName: DName,
        position: position,
        time: time,
        contact: contact,
        DCharge: DCharge,
        wardNo: wardNo,
      })); 
  });
};
updateDoctor = () =>{
    let doctor ={
      DName: this.state.DName,
      position: this.state.position,
      time: this.state.time,
      contact: this.state.contact,
      DCharge: this.state.DCharge,
      wardNo: this.state.wardNo,
    }
    axios.put(`doctor/${this.state.DId}`,doctor).then((res)=>{
      alert(res.data.message);
      this.getAllDoctors();
      this.clearData();
    }).catch((error)=>{
      alert('something went wrong')
    })
};
deleteDoctor = () =>{
  axios.delete(`doctor/${this.state.DId}`).then((res)=>{
    alert(res.data.message);
    this.getAllDoctors();
    this.clearData();
  }).catch((error)=>{
    alert('not deleted')
  });
};
deleteDoctorTable = () =>{
  axios.delete(`doctor/${this.state.DId}`).then((res)=>{
    alert(res.data.message);
    this.getAllDoctors();
    this.clearData();
  }).catch((error)=>{
    alert('not deleted')
  });
};
clearData = () =>{
  this.setState((prevState)=>({
    ...prevState,
      DId: "",
      DName: "",
      position: "",
      time: "",
      contact: "",
      DCharge: 0,
      wardNo: 0,
  }));
}
  render() {
    return (
      <div>
         <section>
            <div className="cursor-pointer w-full pt-2 border-2 border-white pb-2 pl-6 bg-slate-900 text-white rounded flex justify-between items-center ">
             <h1 className='text-2xl '>Doctor's Details</h1>
            </div>
            <section className='grid grid-cols-2 gap-4 mt-10 pl-10 pr-10 w-auto h-auto'>
            <div className="bg-white border-2 border-gray-700 p-4 rounded-3xl shadow-2xl shadow-black">
               <div className='flex space-x-5'>
               <form onSubmit={this.handleSubmit} className='text-2xl '>
                <div className='flex justify-center space-x-10 mb-5'>
                <TextField
                      label="Doctor Id"
                      type="text"
                      variant="outlined"
                      name="DId"
                      value={this.state.DId}
                      onChange={this.handleInput}
                      placeholder="Enter Doctor Id"
                      id="DId"
                      
                      
                    />
            <button type="button" onClick={this.searchPatient} className="btn btn-success pl-4 pr-4">Search Doctor<PersonSearchIcon/></button>
            
                </div>
                <div className='flex justify-start space-x-20 m-1'>
                <div className='text-xl'>Doctor Id
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="DId"
                  label="Doctor Id"
                  name="DId"
                  autoFocus
                  type="text"
                  variant="standard"

                  value={this.state.DId}
                  onChange={this.handleInput}
                />
                  </div>
                  <div className='text-xl'>Doctor Name
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="Doctor Name"
                  name="DName"
                  autoFocus
                  variant="standard"

                   value={this.state.DName}
                   onChange={this.handleInput}
                />
                  </div>
                             
                </div>
                <div className='flex justify-start space-x-20 m-1'>
                <div className='text-xl'>Doctor Position
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="position"
                  label="position"
                  type="text"
                  id="position"
                  variant="standard"

                   value={this.state.position}
                   onChange={this.handleInput}
                />
                  </div>
                  <div className='text-xl'>Time
                  <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="time"
                  label="Time"
                  type="text"
                  id="time"
                  variant="standard"

                   value={this.state.time}
                   onChange={this.handleInput}
                
                />
                  </div>
                             
                </div>
                <div className='flex justify-start space-x-20 m-1'>
                <div className='text-xl'>Doctor Charges
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="DCharge"
                  label="DCharge"
                  type="number"
                  id="DCharge"
                  value={this.state.DCharge}
                   onChange={this.handleInput}
                  variant="standard"
                />
                  </div>
                  <div className='text-xl'>Ward No
                  <TextField
                   margin="normal"
                   required
                   fullWidth
                   name="wardNo"
                   label="WardNo"
                   type="number"
                   id="WardNo"
                  value={this.state.wardNo}
                  onChange={this.handleInput}
                  variant="standard"

                  
                
                />
                  </div>
                             
                </div>
                <div className='flex justify-start  m-1'>
                <div className='text-xl space-x-3 '>Doctor Contact
                <TextField
                  fullWidth
                  margin="normal"
                  required
                  name="contact"
                  label="contact"
                  type="text"
                  id="contact"
                  value={this.state.contact}
                  onChange={this.handleInput}
                  variant="standard"
                />
                  <button type="submit" className="btn btn-primary">Save</button>
                  <button type="button" onClick={this.deleteDoctor} className="btn btn-danger">Delete</button>
                  <button type="button" onClick={this.updateDoctor} className="btn btn-warning">Update</button>
                  </div>  
                  
                </div>
              </form>
               </div>
            </div>
            <div className="bg-transparent ">
            <div className='h-auto mt-3 '>
                <table className="table">
                      <thead className="table-dark">
                      <tr >
                        <th scope="col">DoctorId</th>
                        <th scope="col">DoctorName</th>
                        <th scope='col'>Position</th>
                        <th scope='col'>Time</th>
                        <th scope='col'>Contact</th>
                        <th scope='col'>Charges</th>
                        <th scope="col">WardsNo</th>
                        <th scope="col"><DeleteIcon/></th>
                      </tr>
                     </thead>
                      <tbody>
                     {this.state.DoctorList.map((doctor) => (
                        <tr>
                       <td>{doctor.DId}</td>
                       <td>{doctor.DName}</td>
                       <td>{doctor.position}</td>
                       <td>{doctor.time}</td>
                       <td>{doctor.contact}</td>
                       <td>{doctor.DCharge}</td>
                       <td>{doctor.wardNo}</td>
                       <td onClick={this.deleteDoctorTable}><CloseIcon/></td>
                        </tr>
                     ))};

                     </tbody>
                    </table>
                </div> 
            </div>
            </section>
            </section>
      </div>
    )
  }
}

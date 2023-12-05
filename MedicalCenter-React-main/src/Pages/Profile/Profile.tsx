import React, { ChangeEvent, Component } from "react";
import Header from "../../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TextField, {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextFieldVariants,
} from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button/Button";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import bgImage from "../../assets/rm222batch2-mind-03.jpg";
import axios from "../../axios";
import { Margin } from "@mui/icons-material";
import { stat } from "fs";

type DoctorDetails = {
  DId: string;
  DName: string;
  position: string;
  time: string;
  contact: string;
  DCharge: number;
  wardNo: number;
  // email: string;
  // userName: string;
  // password: string;
};
type ChannelDetails = {
  appoinmentNo: number;
  p_Name: string;
  p_Age: number;
  p_Address: string;
  appoinmentDate: string;
  d_Name: string;
  d_Charges: number;
  wardNo: number;
  bill: number;
  paymentDAte: string;
  time: string;
};
type DoctorProps = {};
type DoctorState = {
  DoctorList: DoctorDetails[];
  PatientDetails: PatientDetails[];
  ChannelDetails: ChannelDetails[];
  DateDetails: ChannelDetails[];
  email: string;
  userName: string;
  password: string;
  appoinmentNo: number;
  p_Name: string;
  p_Age: number;
  p_Address: string;
  appoinmentDate: string;
  d_Name: string;
  d_Charges: number;
  wardNo: number;
  bill: number;
  paymentDAte: string;
  time: string;
};

type PatientDetails = {
  email: string;
  userName: string;
  password: string;
};

export default class Profile extends Component<DoctorProps, DoctorState> {
  constructor(props: DoctorProps) {
    super(props);
    this.state = {
      DoctorList: [],
      PatientDetails: [],
      ChannelDetails: [],
      DateDetails: [],
      email: "",
      userName: "",
      password: "",
      appoinmentNo: 0,
      p_Name: "",
      p_Age: 0,
      p_Address: "",
      appoinmentDate: "",
      d_Name: "",
      d_Charges: 0,
      wardNo: 0,
      bill: 0,
      paymentDAte: "",
      time: "",
    };
  }
  componentDidMount(): void {
    this.getAllDoctors();
    this.getAllApponmentByDate();
  }

  getAllDoctors = () => {
    axios.get("doctor").then((res) => {
      console.log(res.data.responseData);
      this.setState((prevState) => ({
        ...prevState,
        DoctorList: res.data.responseData,
      }));
    });
  };

  load = (event: any) => {
    axios.get(`doctor/${event.target.value}`).then((res) => {
      console.log(res.data.responseData + "positions");
      this.setState((prevState) => ({
        ...prevState,
        DoctorList: res.data.responseData,
      }));
    });
  };
  /////////////////////////////////
  loadDoctors = () => {
    axios.get(`doctor/Doctor`).then((res) => {
      console.log(res.data.responseData + "position");
      this.setState((prevState) => ({
        ...prevState,
        DoctorList: res.data.responseData,
      }));
    });
  };
  loadHospital = () => {
    axios.get(`doctor/Hospital`).then((res) => {
      console.log(res.data.responseData + "position");
      this.setState((prevState) => ({
        ...prevState,
        hospitals: res.data.responseData,
      }));
    });
  };
  loadSpecialization = () => {
    axios.get(`doctor/Specialize`).then((res) => {
      console.log(res.data.responseData + "position");
      this.setState((prevState) => ({
        ...prevState,
        spe: res.data.responseData,
      }));
    });
  };
  ///////////////////////////////
  searcPatient = () => {
    axios.get(`patient/${this.state.email}`).then((res) => {
      const { email, userName, password } = res.data.responseData;
      this.setState((prevState) => ({
        ...prevState,
        email: email,
        userName: userName,
        password: password,
      }));
    });
  };
  updatePatient = () => {
    let patient = {
      email: this.state.email,
      userName: this.state.userName,
      password: this.state.password,
    };
    axios
      .put(`patient/${this.state.email}`, patient)
      .then((res) => {
        alert(res.data.message);
        // this.getAllDoctors();
        // this.clearData();
      })
      .catch((error) => {
        alert("something went wrong");
      });
  };
  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const inputValue = type == "number" ? parseInt(value) : value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, userName, password, appoinmentNo } = this.state;
    let newPatient = {
      email: email,
      userName: userName,
      password: password,
    };
  };
  deletePatient = () => {
    axios
      .delete(`patient/${this.state.email}`)
      .then((res) => {
        alert(res.data.message);
        // this.getAllDoctors();
        // this.clearData();
      })
      .catch((error) => {
        alert("not deleted");
      });
  };
  /////////////////////////////////
  searchChanneling = () => {
    axios.get(`channelingDetails/${this.state.appoinmentNo}`).then((res) => {
      const {
        appoinmentNo,
        p_Name,
        p_Age,
        p_Address,
        appoinmentDate,
        d_Name,
        d_Charges,
        wardNo,
        bill,
        paymentDAte,
        time,
      } = res.data.responseData;
      this.setState((prevState) => ({
        ...prevState,
        appoinmentNo: appoinmentNo,
        p_Name: p_Name,
        p_Age: p_Age,
        p_Address: p_Address,
        appoinmentDate: appoinmentDate,
        d_Name: d_Name,
        d_Charges: d_Charges,
        wardNo: wardNo,
        bill: bill,
        paymentDAte: paymentDAte,
        time: time,
      }));
    });
  };
  deleteChannelling = () => {
    axios
      .delete(`channelingDetails/${this.state.appoinmentNo}`)
      .then((res) => {
        alert(res.data.message);
        // this.getAllDoctors();
        // this.clearData();
      })
      .catch((error) => {
        alert("not deleted");
      });
  };
  updateChannelling = () => {
    let Channelling = {
      appoinmentNo: this.state.appoinmentNo,
      p_Name: this.state.p_Name,
      p_Age: this.state.p_Age,
      p_Address: this.state.p_Address,
      appoinmentDate: this.state.appoinmentDate,
      d_Name: this.state.d_Name,
      d_Charges: this.state.d_Charges,
      wardNo: this.state.wardNo,
      bill: this.state.bill,
      paymentDAte: this.state.paymentDAte,
      time: this.state.time,
    };
    axios
      .put(`channelingDetails/${this.state.appoinmentNo}`, Channelling)
      .then((res) => {
        alert(res.data.message);
        // this.getAllDoctors();
        // this.clearData();
      })
      .catch((error) => {
        alert("something went wrong");
      });
  };

  getAllApponmentByDate = () => {
    axios
      .get(`channelingDetails/search/${this.state.appoinmentDate}`)
      .then((res) => {
        console.log(res.data.responseData);
        this.setState((prevState) => ({
          ...prevState,
          DateDetails: res.data.responseData,
        }));
      });
  };
  render() {
    return (
      <>
        <Header />
        <div
          className="h-screen    bg-cover "
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="pr-14 pt-16 pl-14 w-full">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="grid grid-cols-2 gap-4 p-10  h-auto ">
                <div className="  w-auto space-y-5  ">
                  <section className="justify-center items-center">
                    <div className="flex justify-start space-x-8 mb-4">
                      <h1 className="text-3xl mt-3 ml-4 font-bold">
                        Enter Your Email Address
                      </h1>
                      <TextField
                        id="email"
                        sx={{ width: 290 }}
                        label="Email Address "
                        autoComplete="email"
                        variant="outlined"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInput}
                        onClick={this.searcPatient}
                      />
                      <button
                        type="button"
                        className="btn btn-primary space-x-4"
                        onClick={this.searcPatient}
                      >
                        Search <SearchIcon />
                      </button>
                    </div>
                    <div className="justify-center border-2 border-abc-100 mt-1 rounded-2xl pt-4 pb-3 bg-transparent backdrop-blur-3xl pl-8 shadow-2xl shadow-black">
                      <h1 className="text-green-700">Your Appoinment</h1>
                      <div className="flex justify-start space-x-8 mt-3">
                        <h1 className="text-3xl text-sky-900 mt-3">
                          *Appointment No
                        </h1>
                        <TextField
                          id="standard-basic"
                          label=" enter your appoinment number"
                          variant="standard"
                          type="text"
                          placeholder="enter your appoinment number"
                          name="appoinmentNo"
                          onClick={this.searchChanneling}
                          onChange={this.handleInput}
                          value={this.state.appoinmentNo}
                          sx={{ width: 235, fontSize: 20, marginBottom: 2 }}
                        />
                        <button
                          type="button"
                          className="btn btn-warning "
                          onClick={
                            (this.searchChanneling, this.getAllApponmentByDate)
                          }
                          // onClick={this.getAllApponmentByEmail}
                        >
                          Find Your Appoinment <SearchIcon />
                        </button>
                      </div>
                      <div className="flex justify-start space-x-8 mt-3">
                        <h1 className="text-3xl text-sky-900 mt-2">
                          *Patient Age{" "}
                        </h1>
                        <TextField
                          id="standard-basic"
                          label=" enter patient name"
                          variant="standard"
                          type="text"
                          placeholder="enter patient name"
                          name="p_Age"
                          onClick={this.searchChanneling}
                          onChange={this.handleInput}
                          value={this.state.p_Age}
                          sx={{ width: 70, fontSize: 20, marginBottom: 2 }}
                        />
                        <h1 className="text-3xl text-sky-900 mt-1">
                          *patient Name
                        </h1>
                        <TextField
                          id="standard-basic"
                          label=" enter patient name"
                          variant="standard"
                          type="text"
                          placeholder="enter patient name"
                          name="p_Name"
                          onClick={this.searchChanneling}
                          onChange={this.handleInput}
                          value={this.state.p_Name}
                          sx={{ width: 200, fontSize: 20, marginBottom: 2 }}
                        />
                        {/* <select
                          className=" form-select form-select-lg pl-10 pr-12 border-2 border-lime-500 bg-transparent h-14  w-auto text-3xl"
                          aria-label=".form-select-sm example"
                          onChange={this.load}
                        >
                          <option value={"Specialization"}>
                            Specialization
                          </option>
                          <option value={"Doctor"}>Doctors</option>
                          <option value={"Hospital"}>Hospital</option>
                        </select> */}
                        {/* <select
                          className=" form-select form-select-lg pl-10 pr-12 border-2 border-lime-500 bg-transparent h-14  w-auto text-3xl"
                          aria-label=".form-select-sm example"
                        >
                          {this.state.DoctorList.map((doctor) => (
                            <option value={doctor.DName}>{doctor.DName}</option>
                          ))}
                        </select> */}
                      </div>
                      <div className="flex justify-start space-x-8 mt-2">
                        <h1 className="text-3xl text-sky-900 mt-2 ">
                          *Appointment Date
                        </h1>
                        <TextField
                          id="standard-basic"
                          label=" "
                          variant="standard"
                          type="date"
                          sx={{ width: 235, fontSize: 20 }}
                          value={this.state.appoinmentDate}
                        />
                      </div>
                      <div className="flex justify-start space-x-8 mt-3">
                        <h1 className="text-3xl text-sky-900 ">
                          *Your Payment{" "}
                        </h1>
                        <h2 className="text-3xl">{this.state.bill}</h2>
                        <h1 className="text-3xl text-sky-900 ">*Doctor Name</h1>
                        <h1 className="text-2xl mt-1 ">{this.state.d_Name} </h1>
                      </div>
                      <div className="flex justify-start space-x-8 mt-3">
                        <h1 className="text-3xl text-sky-900 ">*Wards No </h1>{" "}
                        <h2 className="text-3xl">{this.state.wardNo}</h2>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={this.updateChannelling}
                        >
                          Update
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={this.deleteChannelling}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="h-auto mt-3 p-2">
                      <table className="table">
                        <thead className="table-dark">
                          <tr>
                            <th scope="col">Appoinment No</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Wards No</th>
                            <th scope="col">Date</th>
                          
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.DateDetails.map((channel) => (
                            <tr>
                              <td>{channel.appoinmentNo}</td>
                              <td>{channel.d_Name}</td>
                              <td>{channel.wardNo}</td>
                              <td>{channel.appoinmentDate}</td>
                              
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
                <div className=" p-4 space-y-5  ml-52  h-auto">
                  <section className="grid grid-rows-2">
                    <div className="flex justify-center items-center   h-auto">
                      <div className="flex justify-center items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="188"
                          height="188"
                          fill="currentColor"
                          className="bi bi-person-bounding-box shadow-2xl cursor-pointer hover:text-green-700"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className=" justify-center items-center  pl-5 h-auto pt-5">
                      <h1 className="text-2xl">{this.state.userName}</h1>
                      <div className="justify-start flex space-x-5">
                        <h2 className="text-xl mt-3">Patien Name :- </h2>
                        <TextField
                          id="standard-basic"
                          label="Patien Name "
                          variant="standard"
                          name="userName"
                          value={this.state.userName}
                          onChange={this.handleInput}
                          onClick={this.searcPatient}
                        />
                      </div>
                      <div className="justify-start flex space-x-5">
                        <h2 className="text-xl mt-3"> Patien Email:- </h2>
                        <TextField
                          id="email"
                          label="Email Address "
                          autoComplete="email"
                          variant="standard"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleInput}
                        />
                      </div>
                      <div className="justify-start flex space-x-5">
                        <h2 className="text-xl mt-3">Password :- </h2>
                        <TextField
                          id="standard-basic"
                          label="Password "
                          variant="standard"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleInput}
                        />
                      </div>
                      <div className="justify-start flex space-x-5">
                        <h2 className="text-xl mt-3">Re Enter Password :- </h2>
                        <TextField
                          id="standard-basic"
                          label="Password "
                          type="password"
                          variant="standard"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleInput}
                        />
                      </div>
                      <div className="justify-start flex space-x-5 mt-4">
                        <Button
                          variant="contained"
                          color="success"
                          onClick={this.updatePatient}
                        >
                          Update
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={this.deletePatient}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

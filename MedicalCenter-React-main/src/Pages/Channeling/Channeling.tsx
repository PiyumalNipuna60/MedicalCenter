import React, { ChangeEvent, Component } from "react";
import Header from "../../components/Header/Header";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SearchIcon from "@mui/icons-material/Search";
import one from "../../assets/image/national-cancer-institute-1c8sj2IO2I4-unsplash.jpg";
import two from "../../assets/image/martha-dominguez-de-gouveia-KF-h9HMxRKg-unsplash.jpg";
import three from "../../assets/image/martha-dominguez-de-gouveia-nMyM7fxpokE-unsplash.jpg";
import four from "../../assets/image/empty-hospital-room-with-nobody-it-having-single-bed.jpg";
import five from "../../assets/image/national-cancer-institute-701-FJcjLAQ-unsplash.jpg";
import six from "../../assets/image/pexels-zakir-rushanly-11748826.jpg";
import seven from "../../assets/image/7.jpg";
import eight from "../../assets/image/8.jpg";
import nine from "../../assets/image/9.jpg";
import ten from "../../assets/image/10.jpg";
import eleven from "../../assets/image/11.jpg";
import twelve from "../../assets/image/12.jpg";
import Button from "@mui/material/Button/Button";
import background from "../../assets/24590.jpg";
import visa from "../../assets/image/visa.png";
import masterd from "../../assets/image/atm-card.png";
import amex from "../../assets/image/american-express.png";
import axios from "../../axios";
import Doctors from "../Doctors/Doctors";
import { log } from "console";
import { title } from "process";
import Swal from "sweetalert2";

type DoctorDetails = {
  DId: string;
  DName: string;
  position: string;
  time: string;
  contact: string;
  DCharge: number;
  wardNo: number;
};
type CommonProps = {};
type CommonState = {
  p_Name: string;
  p_Age: string;
  p_Address: string;
  appoinmentDate: string;
  d_Name: string;
  d_Charges: string;
  wardNo: string;
  bill: string;
  paymentDAte: string;
  time: string;
  appoinmentNo: number;
  userName: string;
  email: string;
  channelingDate: string;
  DoctorList: DoctorDetails[];
  PatientDetails: PatientDetails;
  DoctorDetails: DoctorDetails;
  PatientAllDetails: PatientAllDetails;
  bileAmount: number;
  totalAmount: number;

  // DId: string;
  // DName: string;
  // position: string;
  // time:string;
  // contact:string;
  // DCharge:number;
  // wardNo:number;
};

type PatientDetails = {
  email: string;
};
type PatientAllDetails = {
  userName: string;
  addrress: string;
  age: number;
  appoinmentNo: number;
  appoinmentDate: string;
};

type PatientProps = {};
// type PatientState = {
//   patientList: PatientDetails[];
//   email:string;
//   userName:string;
// };

type Channel = {
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

export default class Channeling extends Component<CommonProps, CommonState> {
  constructor(props: CommonProps) {
    super(props);
    this.state = {
      appoinmentNo: 0,
      p_Name: "",
      p_Age: "",
      p_Address: "",
      appoinmentDate: "",
      d_Name: "",
      d_Charges: "",
      wardNo: "",
      bill: "",
      paymentDAte: "",
      time: "",
      userName: "",
      channelingDate: "",
      DoctorList: [],
      email: "",
      PatientDetails: { email: "" },
      DoctorDetails: {
        DId: "",
        DName: "",
        position: "",
        time: "",
        contact: "",
        DCharge: 0,
        wardNo: 0,
      },
      PatientAllDetails: {
        userName: "",
        addrress: "",
        age: 0,
        appoinmentNo: 0,
        appoinmentDate: "",
      },
      bileAmount: 0,
      totalAmount: 0,
    };
  }
  componentDidMount(): void {
    this.getAllDoctors();
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

  ////////////////////////////////

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const inputValue = type == "number" ? parseInt(value) : value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  searcPatient = () => {
    axios.get(`patient/${this.state.PatientDetails.email}`).then((res) => {
      const { email, userName, password } = res.data.responseData;
      this.setState({
        PatientAllDetails: {
          userName: userName,
          addrress: "",
          age: 0,
          appoinmentNo: 0,
          appoinmentDate: "",
        },
      });
    });
  };

  selectedDoctor = (doctorName: string) => {
    console.log(doctorName);

    axios.get(`doctor/searchName/${doctorName}`).then((res) => {
      console.log(res.data.responseData);

      const { DId, DName, contact, DCharge, time, wardNo } =
        res.data.responseData;

      this.setState({ bileAmount: DCharge });
      this.setState({ totalAmount: DCharge + 200 });

      this.setState({
        DoctorDetails: {
          DId: DId,
          DName: DName,
          position: "",
          time: time,
          contact: contact,
          DCharge: DCharge,
          wardNo: wardNo,
        },
      });
    });
  };
  /////////////////////////
  handleSubmit = (event: any) => {
    event.preventDefault();
    const { channelingDate, userName, appoinmentNo } = this.state;

    let channellingDetail = {
      appoinmentNo: this.state.appoinmentNo,
      p_Name: this.state.PatientAllDetails.userName,
      p_Age: this.state.p_Age,
      p_Address: this.state.p_Address,
      appoinmentDate: this.state.channelingDate,
      d_Name: this.state.DoctorDetails.DName,
      d_Charges: this.state.DoctorDetails.DCharge,
      wardNo: this.state.DoctorDetails.wardNo,
      bill: this.state.totalAmount,
      paymentDAte: this.state.paymentDAte,
      time: this.state.DoctorDetails.time,
      userName: this.state.userName,
      channelingDate: this.state.channelingDate,
      emial: this.state.email,
    };

    let channelling = {
      channelingDate: this.state.channelingDate,
      userName: this.state.PatientAllDetails.userName,
      appoinmentNo: appoinmentNo,
    };

    let obj = {
      channelling: channelling,
      channellingDetail: channellingDetail,
    };
    axios.post(`channeling`, obj).then((res) => {
      console.log(res.data);
      Swal.fire({
        title:
          "Appoiment Submited. your Appoiment Number is -" +
          res.data.responseData,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    });
  };

  selectOption = (amount: number) => {
    console.log(amount);

    let total = this.state.totalAmount + amount;

    this.setState({ totalAmount: total });
  };

  render() {
    return (
      <>
        <Header />
        <div
          className="pb-20 bg-cover h-screen"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex justify-center items-center pt-24">
            <h1 className="text-5xl">Channel Your Doctor</h1>{" "}
          </div>
          <div className="grid grid-cols-3 gap-3 pr-20 pl-20 p-3 w-auto">
            <section className=" w-auto">
              {/* column 01 */}
              <div className=" border-2 border-gray-700 pl-5 pb-12 rounded-3xl backdrop-blur-3xl bg-transparent pr-5 pt-3  shadow-2xl shadow-black">
                <form action="">
                  <div className="justify-start flex space-x-5 ">
                    <h2 className="text-2xl mt-3 text-sky-900 ">
                      Enter Your Email :-{" "}
                    </h2>
                    <TextField
                      onChange={(event) => {
                        this.setState({
                          PatientDetails: { email: event.target.value },
                        });
                      }}
                      id="email"
                      label="email "
                      type="email"
                      autoComplete="email"
                      variant="standard"
                    />
                    <button
                      type="button"
                      onClick={this.searcPatient}
                      className="btn btn-success space-x-4"
                    >
                      Search <SearchIcon />
                    </button>
                  </div>
                  <div className="justify-start flex space-x-5 ">
                    <h2 className="text-2xl  text-sky-900 mt-3">Name </h2>
                    <TextField
                      value={this.state.PatientAllDetails.userName}
                      onChange={(event) => {
                        this.setState({
                          PatientAllDetails: {
                            userName: event.target.value,
                            addrress: "",
                            age: 0,
                            appoinmentNo: 0,
                            appoinmentDate: "",
                          },
                        });
                      }}
                      id="standard-basic"
                      label="enter your name"
                      variant="standard"
                      type="text"
                    />
                  </div>
                  <div className="flex justify-start space-x-8 mt-2">
                    <h1 className="text-2xl text-sky-900 mt-3 ">Patien Age</h1>
                    <TextField
                      id="standard-basic"
                      label="enter your age"
                      variant="standard"
                      type="number"
                      name="p_Age"
                      value={this.state.p_Age}
                      onChange={this.handleInput}
                      // value={this.state.PatientAllDetails.age}
                      // onChange={(event) => {
                      //   this.setState({
                      //     p_Age: event.target.value,
                      //   });
                      // }}
                    />
                  </div>
                  <div className="flex justify-start space-x-8 mt-2">
                    <h1 className="text-2xl text-sky-900 mt-3 ">Address</h1>
                    <TextField
                      id="standard-basic"
                      label="enter your address"
                      variant="standard"
                      type="text"
                      name="p_Address"
                      value={this.state.p_Address}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="flex justify-start space-x-8 pt-2 ">
                    {/* <h1 className="text-2xl text-sky-900 ">Appoinment No</h1>
                    <h1 className="text-2xl ">01</h1> */}
                  </div>
                  <div className="flex justify-start space-x-8 ">
                    <h1 className="text-2xl text-sky-900 mt-3 ">
                      Appointment Date
                    </h1>
                    <TextField
                      id="standard-basic"
                      label=" "
                      variant="standard"
                      type="date"
                      name="channelingDate"
                      value={this.state.channelingDate}
                      onChange={this.handleInput}
                    />
                  </div>
                </form>
              </div>
            </section>
            <section className="">
              {/* column 02 */}
              <div className=" border-2 border-gray-700 pl-5 rounded-3xl backdrop-blur-3xl bg-transparent pr-5 pt-3  shadow-2xl shadow-black ">
                <form action="">
                  <div className="flex justify-start space-x-8 mt-3">
                    <h1 className="text-2xl text-sky-900 mt-2">Doctor Name</h1>
                    <select
                      className=" form-select form-select-md pl-10 pr-12 border-2 border-lime-500 bg-transparent h-14  w-auto text-3xl"
                      aria-label=".form-select-sm example"
                      onChange={this.load}
                    >
                      <option value={"Specialization"}>Specialization</option>
                      <option value={"Doctor"}>Doctors</option>
                      <option value={"Hospital"}>Hospital</option>
                    </select>
                    <select
                      className=" form-select form-select-md pl-10 pr-12 border-2 border-lime-500 bg-transparent h-14  w-auto text-3xl"
                      onChange={(event) => {
                        this.selectedDoctor(event.target.value);
                      }}
                      aria-label=".form-select-sm example"
                    >
                      {this.state.DoctorList.map((doctor) => (
                        <option value={doctor.DName}>{doctor.DName}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-start space-x-8 mt-3">
                    <h1 className="text-2xl text-sky-900 ">Doctor Chargers</h1>
                    <h1 className="text-2xl ">
                      {this.state.DoctorDetails.DCharge.toFixed(2)}
                      {this.state.d_Charges}
                    </h1>
                  </div>
                  <div className="flex justify-start space-x-8 mt-3">
                    <h1 className="text-2xl text-sky-900 ">Wards No</h1>
                    <h1 className="text-2xl ">
                      {this.state.DoctorDetails.wardNo}
                      {this.state.wardNo}
                    </h1>
                  </div>
                  <div className="flex justify-start space-x-8 mt-3">
                    <h1 className="text-2xl text-sky-900 ">Time</h1>
                    <h1 className="text-2xl ">
                      {this.state.DoctorDetails.time}
                      {this.state.time}
                    </h1>
                  </div>
                  <div className="flex justify-start space-x-8 mt-3">
                    <h1 className="text-2xl text-sky-900 ">Hospital</h1>
                    <h1 className="text-2xl ">Matarat General Hospital</h1>
                  </div>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 2, backgroundColor: "#283747" }}
                    onClick={this.handleSubmit}
                  >
                    Conform
                  </Button>
                </form>
              </div>
            </section>
            <section className="">
              <div className=" border-2 border-gray-700 pl-5 rounded-3xl backdrop-blur-3xl bg-transparent pr-2 pt-3  shadow-2xl shadow-black ">
                <div className="grid grid-rows-2   w-auto">
                  <h1 className="text-green-800 mb-7">Payment</h1>
                  <div className="flex justify-start space-x-4 pb-3">
                    <button
                      onClick={() => this.selectOption(4000)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Blood Testing :- Rs 4000.00
                    </button>
                    <button
                      onClick={() => this.selectOption(3500)}
                      type="button"
                      className="btn btn-primary"
                    >
                      X - Ray :- Rs 3500.00
                    </button>
                    <button
                      onClick={() => this.selectOption(2500)}
                      type="button"
                      className="btn btn-secondary"
                    >
                      Scan :- Rs 2500.00
                    </button>
                  </div>
                  <div className="flex justify-start">
                    <h1 className="text-2xl text-sky-900 ">Your Bill : Rs </h1>
                    <h1 className="text-2xl ml-2">
                      {(this.state.bileAmount + 200).toFixed(2)}
                    </h1>
                  </div>
                  <div className="flex justify-start space-x-9 ">
                    <h1 className="text-2xl text-sky-900 gap-5 space-x-5 mr-5 mt-2">
                      {" "}
                      Payment Method{" "}
                    </h1>

                    <div
                      className="bg-cover w-10 border-2 border-transparent h-10 pr-5 hover:border-red-500 cursor-pointer"
                      style={{ backgroundImage: `url(${visa})` }}
                    ></div>
                    <div
                      className="bg-cover w-10  p-3 border-2 border-transparent h-10 pr-5 hover:border-red-500 cursor-pointer"
                      style={{ backgroundImage: `url(${amex})` }}
                    ></div>
                    <div
                      className="bg-cover w-10 h-10 border-transparent border-2 cursor-pointer pr-5 hover:border-red-500"
                      style={{ backgroundImage: `url(${masterd})` }}
                    ></div>
                  </div>
                  <div className="flex justify-start mt-3">
                    <h1 className="text-2xl text-sky-900 mb-0  ">
                      Your Payment : Rs {" "}
                    </h1>
                    <h1 className="text-2xl ml-2">
                      {this.state.totalAmount.toFixed(2)}
                    </h1>
                  </div>
                  <div className="flex justify-start ">
                    <h1 className="text-2xl text-sky-900  mr-4 mt-3">
                      Payment Date :
                    </h1>
                    <TextField
                      id="standard-basic"
                      label=" "
                      variant="standard"
                      type="date"
                      name="paymentDAte"
                      value={this.state.paymentDAte}
                      onChange={this.handleInput}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="pl-28 pr-28 mt-3">
            <div
              id="carouselExampleInterval"
              className="carousel slide border-2 border-cyan-900 h-80 "
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active " data-bs-interval="5000">
                  <div className="grid grid-cols-5   w-auto">
                    <section
                      className="bg-cover h-80"
                      style={{ backgroundImage: `url(${one})` }}
                    ></section>
                    <section
                      className="bg-cover"
                      style={{ backgroundImage: `url(${two})` }}
                    ></section>
                    <section
                      className="bg-cover"
                      style={{ backgroundImage: `url(${three})` }}
                    ></section>
                    <section
                      className="bg-cover"
                      style={{ backgroundImage: `url(${four})` }}
                    ></section>
                    <section
                      className="bg-cover"
                      style={{ backgroundImage: `url(${five})` }}
                    ></section>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="5000">
                  <div className="grid grid-cols-3   w-auto">
                    <section
                      className="bg-cover h-80"
                      style={{ backgroundImage: `url(${six})` }}
                    ></section>
                    <section
                      className="bg-cover h-80"
                      style={{ backgroundImage: `url(${seven})` }}
                    ></section>
                    <section
                      className="bg-cover h-80"
                      style={{ backgroundImage: `url(${eight})` }}
                    ></section>
                  </div>
                </div>
                <div className="carousel-item " data-bs-interval="5000">
                  <div className="grid grid-cols-4   w-auto">
                    <section
                      className="bg-cover h-80"
                      style={{ backgroundImage: `url(${nine})` }}
                    ></section>
                    <section
                      className="bg-cover h-80"
                      style={{ backgroundImage: `url(${ten})` }}
                    ></section>
                    <section
                      className="bg-cover h-80"
                      style={{ backgroundImage: `url(${eleven})` }}
                    ></section>
                    <section
                      className="bg-cover h-80"
                      style={{ backgroundImage: `url(${twelve})` }}
                    ></section>
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

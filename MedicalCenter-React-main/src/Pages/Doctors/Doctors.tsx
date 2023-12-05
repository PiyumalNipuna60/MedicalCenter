import React, { ChangeEvent, Component } from "react";
import Header from "../../components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bgImage from "../../assets/26357.jpg";
import Card from "../../components/Card/Card";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../axios";

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
  hospitals: DoctorDetails[];
  doctors: DoctorDetails[];
  spe: DoctorDetails[];
};
export default class Doctors extends Component<DoctorProps, DoctorState> {
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
      hospitals: [],
      doctors: [],
      spe: [],
    };
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    const inputValue = type == "number" ? parseInt(value) : value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  componentDidMount(): void {
    //this.handleInput();
    this.loadHospital();
    this.loadDoctors();
    this.loadSpecialization();
  }
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

        console.log(res);
      })
      .catch((error) => {});
  };
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
  // getAllDoctors = ()=>{
  //   axios.get("doctor?position=Doctor").then((res)=>{
  //     console.log(res.data.responseData);
  //     this.setState((prevState)=>({
  //       ...prevState,
  //       DoctorList:res.data.responseData,
  //     }))
  //   });
  // }

  render() {
    return (
      <>
        <Header />
        <div
          className="mt-16 p-36 h-screen bg-cover flex justify-center items-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="border-gray-400 p-10  w-5/6 border-2 backdrop-blur-3xl rounded-3xl shadow-2xl shadow-black">
            <div className="justify-center items-center flex">
              <h2 className="text-6xl text-green-700">Channel Your Doctor</h2>
           
            </div>
            <div className="justify-center items-center flex">
              <ul className="nav nav-tabs" role="tablist">
                <li
                  className="nav-item text-2xl font-bold "
                  role="presentation"
                >
                  <button
                    className="nav-link active  "
                    id="pillsprofileHometab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                    onClick={this.loadDoctors}
                  >
                    Doctors
                    
                  </button>
                </li>
                <li
                  className="nav-item text-2xl font-bold "
                  role="presentation"
                >
                  <button
                    className="nav-link "
                    id="pillsprofiletab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                    onClick={this.loadSpecialization}
                  >
                    Specialization
                  </button>
                </li>
                <li className="nav-item text-2xl font-bold" role="presentation">
                  <button
                    className="nav-link "
                    id="navcontacttab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                    onClick={this.loadHospital}
                  >
                    Hospital
                  </button>
                </li>
              </ul>
            </div>

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="container text-center">
                  <div
                    className=" flex justify-center items-center"
                    id="premiumTab"
                  >
                    {this.state.DoctorList.map((doctor) => (
                      <Card
                        position="Doctor"
                        DName={doctor.DName}
                        DCharge={doctor.DCharge}
                        wardNo={doctor.wardNo}
                        time={doctor.time}

                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="container text-center">
                  <div
                    className="flex justify-center items-center"
                    id="generalTab"
                  >
                    {/* {this.state.spe.map(() => (
                      <Card position="Specialization" DName={Speciali} DCharge={100} wardNo={5} time="12.30"/>
                    ))} */}
                      {this.state.spe.map((doctor) => (
                      <Card
                        position="Specialization"
                        DName={doctor.DName}
                        DCharge={doctor.DCharge}
                        wardNo={doctor.wardNo}
                        time={doctor.time}

                      />
                    ))}
                    {/* <Card position={"Specialization"}/><Card position={"Specialization"}/><Card position={"Specialization"}/> */}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="container text-center">
                  <div
                    className="flex justify-center items-center"
                    id="luxuryTab"
                  >
                    {/* {this.state.hospitals.map(() => (
                      <Card position="Hospital" DName="Gihan" DCharge={100} wardNo={5} time="12.30" />
                    ))} */}
                          {this.state.hospitals.map((doctor) => (
                      <Card
                        position="Hospital"
                        DName={doctor.DName}
                        DCharge={doctor.DCharge}
                        wardNo={doctor.wardNo}
                        time={doctor.time}

                      />
                    ))}
                    {/* <Card position={"Hospital"}/> <Card position={"Hospital"}/>  <Card position={"Hospital"}/>  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade p-40"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
        >
       
        </div>
      </>
    );
                    }
}

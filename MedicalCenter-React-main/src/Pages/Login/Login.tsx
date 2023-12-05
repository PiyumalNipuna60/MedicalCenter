import React, { ChangeEvent, Component, FormEvent } from "react";
import backgroundImage from "../../assets/Kerfin7-NEA-2129.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LoginIcon from "@mui/icons-material/Login";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
/////////////
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Title from "../../components/Title/Title";
import axios from "axios";
import axioss from "../../axios";
// import { Link } from "react-router-dom";
const theme = createTheme();

type PatientDetails = {
  email: string;
  userName: string;
  password: string;
};
type PatientProps = {};
type PatientState = {
  PatientList: PatientDetails[];
  email: string;
  userName: string;
  password: string;
};

export default class Login extends Component<PatientProps, PatientState> {
  constructor(props: PatientProps) {
    super(props);
    this.state = {
      PatientList: [],
      email: "",
      userName: "",
      password: "",
    };
  }
  componentDidMount(): void {
    //this.handleInput();
  }

  handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target;
    //const inputValue =type == "number"?parseInt(value):value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, userName, password } = this.state;
    let newPatient = {
      email: email,
      userName: userName,
      password: password,
    };
    axios
      .post("http://localhost:5000/api/v1/patient", newPatient)
      .then((res) => {
        // this.setState((prevState)=>({
        //     PatientList:[...prevState.PatientList, res.data.responseData]
        // }));
        if (res.status == 200) {
          window.location.href = "http://localhost:3000/home";
        }
        console.log(res);
      })
      .catch((error) => {});
  };
  //////////////////////////////
  loadAllPatient = () => {
    axios.get("http://localhost:5000/api/v1/patient").then((res) => {
      console.log(res.data.responseData + "patient");
      this.setState((prevState) => ({
        ...prevState,
        patients: res.data.responseData,
      }));

    });
  };
  loginPatient = () => {
    axioss.get(`patient/${this.state.email}`).then((res) => {
      const { email, userName, password } = res.data.responseData;
     
      this.setState((prevState) => ({
        ...prevState,
        email: email,
        userName: userName,
        password: password,
      }));
      window.location.href = "http://localhost:3000/home";
      // if (
      //   res.data.responseData.email == this.state.email &&
      //   res.data.responseData.password == this.state.password
      // ) {
      //   window.location.href = "http://localhost:3000/home";
      // }
      // else {
      //   alert('Please Check Your Password &  Email')
      // }
    });
  };
  render() {
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
      throw new Error("Function not implemented.");
    }

    return (
      <>
        <div
          className="h-screen bg-cover  "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Title />
          <div className=" flex justify-center items-center ">
            <div className="border-2 border-gray-500  w-1/2 h-96 rounded-3xl shadow-black shadow-2xl hover:drop-shadow-xl backdrop-blur-3xl mt-20 ">
              <div className="flex justify-center space-x-5 pt-10">
                <h2 className="text-4xl mb-0">
                  {" "}
                  INTENSIFYING <span> </span>
                </h2>{" "}
                <h2 className="text-4xl mb-0">
                  {" "}
                  LIFE <span> </span>
                </h2>
                <h2 className="text-4xl mb-0"> AND </h2>
                <h2 className="text-4xl mb-0">CARE</h2>
              </div>
              <div className=" mt-20 space-x-10 flex justify-center ">
                <button
                  type="button"
                  className="btn btn-danger h-16 w-48 space-x-5 shadow-lg p-3 mb-5 rounded "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalToggle"
                >
                  <span> Login</span> <LoginIcon />
                </button>
                <button
                  type="button"
                  className="btn btn-success h-16 w-48 space-x-5 shadow-lg p-3 mb-5 rounded "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalToggle1"
                >
                  <span>Register</span>
                  <ManageAccountsIcon />{" "}
                </button>
              </div>
              <div className=" mt-7 space-x-10 flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
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
          <div
            className=" modal-dialog modal-dialog-centered backdrop-blur-3xl border-2  border-white rounded-3xl text-white "
            id="exampleModalToggleDiv"
          >
            <div className="modal-content  h-72 w-56 justify-center items-center rounded-3xl bg-transparent   text-emerald-50">
              <div>
                <h1>Login</h1>
              </div>
              <form action="">
                <ThemeProvider theme={theme}>
                  <Container component="main" maxWidth="xs">
                    <Box
                      sx={{
                        marginTop: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        text: "white",
                      }}
                    >
                      <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                      >
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          value={this.state.email}
                          onChange={this.handleInput}
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          value={this.state.password}
                          onChange={this.handleInput}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox value="remember" color="primary" />
                          }
                          label="Remember me"
                        />
                        
                          <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            type="button"
                            onClick={this.loginPatient}
                          >
                            Sign In
                          </Button>
                        
                      </Box>
                    </Box>
                  </Container>
                </ThemeProvider>
              </form>
            </div>
          </div>
        </div>

        <div
          className="modal fade p-40"
          id="exampleModalToggle1"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
        >
          <div
            className=" modal-dialog modal-dialog-centered backdrop-blur-3xl border-2  border-white rounded-3xl text-white "
            id="exampleModalToggleDiv"
          >
            <div className="modal-content pr-5 pl-5 h-72 w-56 justify-center items-center rounded-3xl bg-transparent   text-emerald-50">
              <div>
                <h1>Register</h1>
              </div>
              <form onSubmit={this.handleSubmit} className="text-white">
                {/* <Box
                      sx={{
                        marginTop: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        text: "white",
                      }}
                    >
                      <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                      > */}
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
                  value={this.state.email}
                  onChange={this.handleInput}
                />
                <TextField
                  style={{
                    color: "red",
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  label="User Name"
                  name="userName"
                  autoFocus
                  value={this.state.userName}
                  onChange={this.handleInput}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handleInput}
                />
                {/* <Link to={"/home"}> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
                {/* </Link> */}
                {/* </Box>
                    </Box>
                  </Container>
                </ThemeProvider> */}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import React, { Component } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import axios from "../../axios";


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

type ChannellingProps = {}
type ChannellingState = {
  channelDetails: ChannelDetails[];
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
export default class Channelling extends Component<ChannellingProps, ChannellingState> {
  constructor(props: ChannellingProps) {
    super(props);
    this.state = {
      channelDetails: [],
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
    this.getAllChannelling();
  }
  getAllChannelling = () => {
    axios.get("http://localhost:5000/api/v1/channelingDetails").then((res) => {
      console.log(res.data.responseData);
      this.setState((prevState) => ({
        ...prevState,
        channelDetails: res.data.responseData,
      }));
    });
  };
  render() {
    return (
      <div className="mt-10">
        <section>
          <div className="cursor-pointer w-full pt-2 border-2 border-white pb-2 pl-6 bg-cyan-900 text-white rounded flex justify-between items-center ">
            <h1 className="text-2xl ">Channel List</h1>
          </div>
          <div className="p-4">
            <div className="h-auto mt-3 ">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">AppoinmentNo</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Patient Age</th>
                    <th scope="col">Patient Address</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Doctor Charge</th>
                    <th scope="col">Ward No</th>
                    <th scope="col">Bill</th>
                    <th scope="col">Payment Date</th>
                    <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                  
                    {this.state.channelDetails.map((channel) => (
                      <tr>
                        <td>{channel.appoinmentNo}</td>
                        <td>{channel.p_Name}</td>
                        <td>{channel.p_Age}</td>
                        <td>{channel.p_Address}</td>
                        <td>{channel.d_Name}</td>
                        <td>{channel.d_Charges}</td>
                        <td>{channel.wardNo}</td>
                        <td>{channel.bill}</td>
                        <td>{channel.paymentDAte}</td>
                        <td>{channel.time}</td>
                      </tr>
                    ))}

                    <td>
                      <CloseIcon />
                    </td>
                  
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

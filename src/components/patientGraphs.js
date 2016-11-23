import React, {Component} from 'React';
import { Link } from 'react-router';
import {LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip} from 'Recharts';
import Table from 'rc-table';

const data = [
      {name: 'January', uv: 4000, pv: 9000},
      {name: 'Febuary', uv: 3000, pv: 7222},
      {name: 'March', uv: 2000, pv: 6222},
      {name: 'April', uv: 1890, pv: 5400},
      {name: 'May', uv: 1682, pv: 3200},
      {name: 'June', uv: 1402, pv: 2500},
      {name: 'July', uv: 1000, pv: 1209},
];

const columns = [{
  title: 'PSA', dataIndex: 'psa', key:'psa', width: 150,
}, {
  title: 'TSA', dataIndex: 'tsa', key:'tsa', width: 100,
},
{
  title: 'Therapy', dataIndex: 'therapy', key:'therapy', width: 100,
},
{
    title: 'Imaging Required', dataIndex: 'imaging', key:'imaging', width: 160,
}];

const data2 = [
  { psa: '4', tsa: 28,therapy : 'Radiotherapy', imaging:'No', key:'1' },
  { psa: '3.8', tsa: 36,therapy : 'Radiotherapy',imaging:'No', key:'2' },
  { psa: '3.4', tsa: 32,therapy : 'Radiotherapy',imaging:'Yes', key:'3' },
  { psa: '4.3', tsa: 53,therapy : 'Radiotherapy',imaging:'No', key:'4' },
  { psa: '2.1', tsa: 28,therapy : 'Radiotherapy',imaging:'Yes', key:'5' },
  { psa: '3.8', tsa: 36,therapy : 'Radiotherapy',imaging:'No', key:'6' },

];


export default class PatientGraphs extends Component {
    render() {
        return(
            <div>
        <div id="navbar" className="navbar navbar-default">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
          <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Search..."/>
          </form>
        </div>
            <div>
                <Link className = "btn btn-link" to={"dashboard"} >Back</Link><br/>
</div>
 <div className="col-sm-9 col-md-10  main">
<br/>
<h2><strong>Ervin Howell</strong></h2>
<br/>

<Table columns={columns} data={data2} />
<br/><br/><br/>


<div className="div1" >
        <p>PSA Levels</p>
         <LineChart width={600} height={200} data={data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </LineChart>
        </div>
        <div className="div2">
        <p>Totestorone Levels</p>
        <LineChart width={600} height={200} data={data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
          
        </LineChart>
        </div>
        <AreaChart width={600} height={200} data={data} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d' />
        </AreaChart>

   

              </div>
    </div>
        );

    }
}
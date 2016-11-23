import React , {Component} from 'react';
import { Link } from 'react-router';

export default class LiveSearch extends Component {

    constructor(props){
        console.log("LiveSearch", props)
        super(props);
        this.state = {
            searchTerm : ''
        };
        this.renderCard = this.renderCard.bind(this);
    }

    handleChange(event){
        this.setState({
            searchTerm : event.target.value
        })
    }


     renderCard(patient){
        return(
              <div className="col-xs-6 col-sm-3 placeholder" id={patient.id}>
                <div className="card card-block">
                    <h4 className="card-title">{patient.name}</h4>
                    <p className="card-text">{patient.company.name}</p>
                    <Link className="btn btn-primary" to={"patient"+patient.id}>Link</Link>
                </div>
              </div>
        );

    }
 filterPatients(patient){
        var searchString = this.state.searchTerm.toLowerCase();
        return patient.name.toLowerCase().match(searchString);
    }

    render () {

        var rows = [];
        if(this.state.searchTerm.length>0){
            rows.push(this.props.patients.map(this.filterPatients));
           console.log(,rows);
           
         }
        console.log(this.props.children);
        return (
            <div>
             <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="Search..."/>
                <div className="row placeholders">
                    {this.props.children.map(this.renderCard)}
                 </div>
           </div>
        );
    }



 }
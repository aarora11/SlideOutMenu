import React , {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import Modal from 'react-modal';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};


 class Dashboard extends Component{
    
 constructor(props){
        super(props);
        this.state = {
            searchTerm : '',
            modalIsOpen : false,
            initalSearchParams : []
        };

        this.filterPatients = this.filterPatients.bind(this);
    }

     static contextTypes = {
         router : PropTypes.object
     };

    componentWillMount(){
         this.props.patientCounter();
    }

    searchOnChange(event){
        this.setState({
            searchTerm : event.target.value
        })
    }
    
    renderCard(patient){
        return(
              <div className="col-xs-6 col-sm-3 placeholder" id={patient.id} key={patient.id}>
                <div className="card card-block">
                    <h4 className="card-title">{patient.name}</h4>
                    <p className="card-text">{patient.company.name}</p>
                    <button className="btn btn-primary" onClick={this.openModal.bind(this)}>Details</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal.bind(this)}
                        onRequestClose={this.closeModal.bind(this)}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >

                        <h2>Search Details</h2>
                        <form>
                            <CheckboxGroup name = "searchParams"
                                           value = {this.state.initalSearchParams}
                                           onChange={this.searchParameters.bind(this)}>
                                <label> <Checkbox value="PSA"/>PSA</label><br/>
                                <label> <Checkbox value="Testosterone"/>Testosterone</label><br/>
                                <label> <Checkbox value="age"/>Radiotherapy</label><br/>
                                <label> <Checkbox value="age"/>Imaging</label><br/>
                                <label> <Checkbox value="age"/>TSA Levels</label><br/>

                            </CheckboxGroup>
                        </form>
                        <button className="btn btn-primary" onClick={this.handleFormSubmit.bind(this)} action="submit" >Submit</button>
                        <button className="btn btn-danger" onClick={this.closeModal.bind(this)}>Cancel</button>
                    </Modal>
                </div>
              </div>
        );

    }

    filterPatients(patient){
        var searchString = this.state.searchTerm.toLowerCase();
        if(patient.name.toLowerCase().match(searchString)){
            return patient;
        } 
        return ;
    }

    //Modal Stuff starts
     openModal(){

         this.setState({modalIsOpen : true});
         console.log(this.state.modalIsOpen);
     }

     afterOpenModal() {
     // references are now sync'd and can be accessed.
     this.refs.subtitle.style.color = '#f00';
 }
     closeModal() {
     this.setState({modalIsOpen: false});
 }
     searchParameters(searchParams){
         this.setState({
             initalSearchParams: searchParams
         });
     }

     handleFormSubmit(){

         // this.props.searchPatientData(this.state.initalSearchParams);
         if(this.state.initalSearchParams.includes("PSA") && this.state.initalSearchParams.includes("Testosterone")){
             console.log(this.state.initalSearchParams);

             this.props.searchPatientData();
             this.context.router.push('patientDetails');

         }



     }


 //modal code ends

     render(){
         var rows;
         if(this.state.searchTerm.length>0){
             rows = this.props.patients.map(this.filterPatients);
             rows = rows.filter(function(n){ return n != undefined }); 
           console.log(rows);    
         }
         if(this.state.searchTerm.length == 0){
             rows = this.props.patients;
        }

           return(
        <div>
        <div id="navbar" className="navbar navbar-default" >
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

        <div className="col-sm-9 col-md-10  main">
        
          <h1 className="page-header">Dashboard</h1>
          <input type="text" className="form-control" onChange={this.searchOnChange.bind(this)} placeholder="Search..."/>
          <div className="row placeholders">
            {rows.map(this.renderCard.bind(this))}
           </div>
          </div>
                    </div>



        );
    }
}


function mapStateToProps(state){
    return {patients: state.patients};
}

export default connect(mapStateToProps, actions) (Dashboard);
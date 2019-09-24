import React, { Component } from 'react';
import {Link} from "react-router-dom";
// import TaskItem from './tasks/TaskItem';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state={
            // test:"",
            tasks:[],
            TODO:[],
            INPROGRESS:[],
            DONE:[]
        }
    }

    componentDidMount() {
  
        fetch('http://localhost:8080/api/board/all')
          .then(response => response.json())
          .then(data => {

            this.setState({ tasks: data });
            this.handleResponse();
          })
          .catch(console.log);

      }

      handleResponse() {
        var temptodo=[];
        var tempinpr=[];
        var tempdone=[];

        this.state.tasks.map(item =>{
          
            if(item.status ==="TO_DO"){
                this.setState({
                    TOD:this.state.TODO.push(item)
                })
                // .push(item);
            }
            else if(item.status ==="IN_PROGRESS"){
                tempinpr.push(item);
            }
            else if(item.status ==="DONE"){
                tempdone.push(item);
            }

            return null;
          
        });


        this.setState({
            TODO: temptodo,
            INPROGRESS:tempinpr,
            DONE:tempdone
        })
      }

    render() {

        // const {tasks } = this.state;
        // const {TODO} = this.state.DONE;
        // const {INPROGRESS} = this.state.INPROGRESS;
        // const {DONE} = this.state.DONE;
        console.log(this.state.TODO);
        return (
            
            <div className="container">
                <Link to="/addTask" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>

                <br />
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>TO DO</h3>
                                </div>
                            </div>
                            {/* <TodoList data={tasks} type={1}/> */}
                            <Test data='sijo'/>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                            {/* <TodoList data={tasks} type={2}/> */}
                            {/* <InprogressList data={INPROGRESS} /> */}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            {/* <TodoList data={tasks} type={3}/> */}
                            {/* <DoneList data={DONE} /> */}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
function Test(props){
    console.log(props.data);
    return <div>

    </div>
}
// function TodoList({  }) {
//     const data = this.props.TODO;
//     return data.map(item =>{
//         return (
//             <div key={item.id} className="card mb-1 bg-light">
        
//                         <div className="card-header text-primary">
//                             {item.taskname}
//                         </div>
//                         <div className="card-body bg-light">
//                             <p className="card-text text-truncate ">
//                                 {item.description}
//                             </p>
//                             <a href="#" className="btn btn-primary">
//                                 View / Update
//                             </a>
                
//                             <button className="btn btn-danger ml-4">
//                                 Delete
//                             </button>
//                         </div>
//                     </div>);
//     });
// }

// function InprogressList({ data }) {
    // console.log(this.state.tasks);
    // return data.map(item =>{
//         return (
//             <div key={item.id} className="card mb-1 bg-light">
        
//                         <div className="card-header text-primary">
//                             {item.taskname}
//                         </div>
//                         <div className="card-body bg-light">
//                             <p className="card-text text-truncate ">
//                             </p>
//                                 {item.description}
//                             <a href="#" className="btn btn-primary">
//                                 View / Update
//                             </a>
                
//                             <button className="btn btn-danger ml-4">
//                                 Delete
//                             </button>
//                         </div>
//                     </div>);
//     });
// }

// function DoneList({ data }) {
//     return data.map(item =>{
//         return (
//             <div key={item.id} className="card mb-1 bg-light">
        
//                         <div className="card-header text-primary">
//                             {item.taskname}
//                         </div>
//                         <div className="card-body bg-light">
//                             <p className="card-text text-truncate ">
//                                 {item.description}
//                             </p>
//                             <a href="#" className="btn btn-primary">
//                                 View / Update
//                             </a>
                
//                             <button className="btn btn-danger ml-4">
//                                 Delete
//                             </button>
//                         </div>
//                     </div>);
//     });
// }

// function TodoList({ data, type }) {
    
//     console.log(data);
//     switch(type) {
//         case 1: {
//             return data.map(item => {
//                 var status = item.status;
//                 if(status ==="TO_DO") {
//                     console.log(status);
//                     return (
//                         <div key={item.id} className="card mb-1 bg-light">
        
//                         <div className="card-header text-primary">
//                             {item.taskname}
//                         </div>
//                         <div className="card-body bg-light">
//                             <p className="card-text text-truncate ">
//                                 {item.description}
//                             </p>
//                             <a href="#" className="btn btn-primary">
//                                 View / Update
//                             </a>
                
//                             <button className="btn btn-danger ml-4">
//                                 Delete
//                             </button>
//                         </div>
//                     </div>);
                   
//                 }
//                 else {
//                     return null;
//                 }
//             });
//         }
//         case 2: {
//             return data.map(item => {
//                 var status = item.status;
//                 if(status ==="IN_PROGRESS") {
//                     console.log(status);
//                     return (
//                         <div key={item.id} className="card mb-1 bg-light">
        
//                         <div className="card-header text-primary">
//                             {item.taskname}
//                         </div>
//                         <div className="card-body bg-light">
//                             <p className="card-text text-truncate ">
//                                 {item.description}
//                             </p>
//                             <a href="#" className="btn btn-primary">
//                                 View / Update
//                             </a>
                
//                             <button className="btn btn-danger ml-4">
//                                 Delete
//                             </button>
//                         </div>
//                     </div>);
                   
//                 }
//                 else {
//                     return null;
//                 }
//             });
//         }
//         case 3: {
//             return data.map(item => {
//                 var status = item.status;
//                 if(status ==="DONE") {
//                     console.log(status);
//                     return (
//                         <div key={item.id} className="card mb-1 bg-light">
        
//                         <div className="card-header text-primary">
//                             {item.taskname}
//                         </div>
//                         <div className="card-body bg-light">
//                             <p className="card-text text-truncate ">
//                                 {item.description}
//                             </p>
//                             <a href="#" className="btn btn-primary">
//                                 View / Update
//                             </a>
                
//                             <button className="btn btn-danger ml-4">
//                                 Delete
//                             </button>
//                         </div>
//                     </div>);
                   
//                 }
//                 else {
//                     return null;
//                 }
//             });
//         }



//         default:
//             return null;
//     }
    
// }
    
    //     if (type===1 && item.status ==="TO_DO") ? 
    
    //     : (type===2 && item.status ==="IN_PROGRESS") ? 
    //     <div key={item.id} className="card mb-1 bg-light">

    //        <div className="card-header text-primary">
    //            {item.taskname}
    //        </div>
    //        <div className="card-body bg-light">
    //            <h5 className="card-title">summary</h5>
    //            <p className="card-text text-truncate ">
    //                acceptanceCriteria
    //            </p>
    //            <a href="#" className="btn btn-primary">
    //                View / Update
    //            </a>

    //            <button className="btn btn-danger ml-4">
    //                Delete
    //            </button>
    //        </div>
    //    </div>
    //     : 
    //     <div key={item.id} className="card mb-1 bg-light">

    //        <div className="card-header text-primary">
    //            {item.taskname}
    //        </div>
    //        <div className="card-body bg-light">
    //            <h5 className="card-title">summary</h5>
    //            <p className="card-text text-truncate ">
    //                acceptanceCriteria
    //            </p>
    //            <a href="#" className="btn btn-primary">
    //                View / Update
    //            </a>

    //            <button className="btn btn-danger ml-4">
    //                Delete
    //            </button>
    //        </div>
    //    </div>
    // }));

export default Dashboard;
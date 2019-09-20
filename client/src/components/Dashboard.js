import React, { Component } from 'react';
import {Link} from "react-router-dom";
// import TaskItem from './tasks/TaskItem';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state={
            // test:"",
            tasks:[]
        }
    }

    componentDidMount() {
  
        fetch('http://localhost:8080/api/board/all')
          .then(response => response.json())
          .then(data => {

            
            this.setState({ tasks: data });
          })
          .catch(console.log);

        //   this.setState({
        //       test:"sijo"
        //   })
    
    
      }
    render() {
        const {tasks } = this.state;
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
                            {/* {this.state.tasks.map((todo) => (
                                <div className="card">
                                    <div className="card-body">
                                    <h5 className="card-title">{todo.taskname}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                    { todo.status==="In Progress" &&
                                        <span>
                                        Completed
                                        </span>
                                    }
                                    { todo.status ==="Done" &&
                                        <span>
                                        Pending
                                        </span>
                                    }              
                                    </h6>
                                    </div>
                                </div>
                                ))} */}
                            <TodoList data={tasks} />
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                            {/* <TaskItem/> */}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            {/* <!-- SAMPLE PROJECT TASK STARTS HERE -->

                            <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


function TodoList({ data }) {
    return data.map(item => (
        <div className="card mb-1 bg-light">

           <div className="card-header text-primary">
               {item.taskname}
           </div>
           <div className="card-body bg-light">
               <h5 className="card-title">summary</h5>
               <p className="card-text text-truncate ">
                   acceptanceCriteria
               </p>
               <a href="#" className="btn btn-primary">
                   View / Update
               </a>

               <button className="btn btn-danger ml-4">
                   Delete
               </button>
           </div>
       </div>
    ));
}

export default Dashboard;
import React, { Component } from 'react';

class TodoList extends Component {
    state = {  }
    
    render() { 
        return (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <th>S/N</th>
                        <th>What to do</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todos.map((item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item}</td>
                            <td>
                            <button className="btn btn-danger btn-sm mr-2" onClick={()=>this.handleDelete(index)}>D</button>
                            <button className="btn btn-primary btn-sm">E</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
        );
    }
}
 
export default TodoList;
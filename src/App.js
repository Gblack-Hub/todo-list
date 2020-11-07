import React from 'react';

class App extends React.Component{
  state = {
    todo: "",
    data: []
  }

  handleChange=(e)=>{
    this.setState({ [e.target.id]: e.target.value });
  }

  handleDelete=(item)=>{
    let newTodo = this.state.data.filter((value, index)=>{
      return index !== item;
    })
    this.setState({data: newTodo});
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    
    if(this.state.todo !== ""){
      this.setState(prevState => ({ data: [...prevState.data, this.state.todo ]}), ()=> {console.log(this.state.data)});
    }
  }

  render(){
    return (
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-8 col-xl-8">
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control mb-2" onChange={this.handleChange} id="todo" placeholder="Enter Todo Item" />
                <button type="submit" className="btn btn-primary btn-block">Add Todo</button>
              </div>
            </form>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>What to do</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((item, index) => (
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
          </div>
        </div>
      </div>
    )

  }

}

export default App;
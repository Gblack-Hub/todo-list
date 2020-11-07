import React from 'react';
import TodoList from './components/TodoList'; //imported TodoList component from inside components folder

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
            <TodoList todos={this.state.data} />
          </div>
        </div>
      </div>
    )

  }

}

export default App;
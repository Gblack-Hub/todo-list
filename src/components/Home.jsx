import React from 'react';
import TodoList from './TodoList';
import FacebookImg from '../assets/images/facebook-icon.png'

class Home extends React.Component{
  state = {
    todo: "",
    data: []
  }

  handleChange=(e)=>{
    this.setState({ [e.target.id]: e.target.value });
  }

  onDelete=(item)=>{
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
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control mb-2" onChange={this.handleChange} id="todo" placeholder="Enter Todo Item" />
                <button type="submit" className="btn btn-primary btn-block">Add Todo</button>
              </div>
            </form>
            <img src={FacebookImg} className="img-fluid" alt="..." />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <TodoList todos={this.state.data} myName="Olawale" onDeleteOfTodo={this.onDelete} />
          </div>
        </div>
      </div>
    )

  }

}

export default Home;
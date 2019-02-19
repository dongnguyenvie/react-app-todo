import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todoItems: [
        { 
          title :'Mua bim bim' ,
          status : false
        },
        {
          title: 'Đi đỗ xăng',
          status: true
        },
        {
          title: 'Play game',
          status: false
        }
      ]
    }
    this.onItemClicked = this.onItemClicked.bind(this)
  } // contructor

  onItemClicked(item) {
    // console.log(item)
    return (event) => {
      console.log('clicked')
      const { status } = item
      const { todoItems } = this.state
      const index = todoItems.indexOf(item)
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            status: !status
          },
          ...todoItems.slice(index+1)
        ]
      })
      console.log(this.state.todoItems)
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.todoItems.length > 0 &&
          this.state.todoItems.map( (item, index) => 
            <TodoItems key={index} index={index} item={item} onClick={ this.onItemClicked(item) } />
          )
        }
        {
          this.state.todoItems.length === 0 &&
          'Nothing here'
        }
          
      </div>
    );
  }
}

export default App;

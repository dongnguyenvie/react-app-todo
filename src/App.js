import React, { Component } from 'react';
import './App.css';
import TodoItems from './components/TodoItems'
import tick from './components/img/tick.svg'
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
      ],
      newItem: ''
    }
    //this.onItemClicked = this.onItemClicked.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onChange = this.onChange.bind(this)
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
  }// on click

  onKeyUp(event) {
    if(event.keyCode == 13) {
      let text = event.target.value
      console.log(text)
      if(!text) return;
      text = text.trim()
      if(!text) return;
      this.setState({
        todoItems: [
          {title: text, status: false },
          ...this.state.todoItems
        ]
      })
      this.setState({
        newItem: ''
      })
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={tick} width={32} height="32" />
          <input type="text" placeholder="Add new item" 
            value={this.state.newItem}
            onChange={this.onChange}
             onKeyUp={this.onKeyUp} />
        </div>
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

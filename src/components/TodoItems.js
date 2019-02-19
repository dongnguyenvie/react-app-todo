import React, { Component } from 'react';
import './TodoItems.css'
class TodoItems extends Component{

    render () {
        const { item, onClick } = this.props
        let className = 'TodoItem'
        if( item.status ) {
            className += ' Todo-Compolete'
        }
        return (
            <div className={className} onClick={ onClick } >
                <p>{ item.title }</p>
            </div>
        );
    }
};

export default TodoItems
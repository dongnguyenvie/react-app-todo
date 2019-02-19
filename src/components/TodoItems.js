import React, { Component } from 'react';
import './TodoItems.css'
import checkImg from './img/checked.svg'
import checkComplete from './img/check-complete.svg'
import classNames from 'classnames'

class TodoItems extends Component{

    render () {
        const { item, onClick } = this.props
        let url = checkImg
        if(item.status) {
            url = checkComplete
        }
        return (
            <div className={classNames('TodoItem', {
                'Todo-Compolete': item.status
            })} onClick={ onClick } >
                <img src={url} width={32} height={32} />
                <p>{ item.title }</p>
            </div>
        );
    }
};

export default TodoItems
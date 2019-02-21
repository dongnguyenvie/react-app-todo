import React, { Component } from 'react';
import './TodoItems.css'
import checkImg from './img/checked.svg'
import checkComplete from './img/check-complete.svg'
import classNames from 'classnames'
import Protypes from 'prop-types'

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

TodoItems.propTypes = {
    item: Protypes.shape({
        status: Protypes.bool
    }),
    onClick: Protypes.func
}

export default TodoItems
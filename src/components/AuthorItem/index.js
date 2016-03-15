import React, { Component, PropTypes } from 'react';
import styles from './AuthorItem.css';
import { Link } from 'react-router';
class AuthorItem extends Component {
    render() {
        let {title,path}=this.props;
        return (
            <li className='list-group-item'>
                <Link to={path}>
                    <p>{title}</p>
                </Link>
            </li>
        );
    }
}


AuthorItem.propTypes = {
    title: PropTypes.string.isRequired
};

export default AuthorItem;



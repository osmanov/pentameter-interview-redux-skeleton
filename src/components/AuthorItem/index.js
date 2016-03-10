import React, { Component, PropTypes } from 'react';
import styles from './AuthorItem.css';

class AuthorItem extends Component {
    render() {
        let {title,path}=this.props;
        return (
            <li className={styles.root}>
                <Link to={path}>
                    <p>{title}</p>
                </Link>
            </li>
        );
    }
}


AuthorItem.propTypes = {
    name: PropTypes.string.isRequired
};

export default AuthorItem;



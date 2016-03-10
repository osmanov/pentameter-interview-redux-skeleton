import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './AuthorsList.css';
import AuthorItem from 'components/AuthorItem';

class AuthorsList extends Component {
    render() {
        let {list}=this.props;
        let items=list.map((author, i) => <AuthorItem title={author.name} key={i} />);
        return (
            <ul className={styles.root}>
                {items}
            </ul>
        );
    }
}


AuthorsList.propTypes = {
    list: PropTypes.array.isRequired
};

export default AuthorsList;


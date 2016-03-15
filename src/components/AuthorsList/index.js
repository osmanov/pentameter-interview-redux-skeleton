import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './AuthorsList.css';
import AuthorItem from '../AuthorItem';

class AuthorsList extends Component {
    render() {
        let {list}=this.props;

        let items='Loading...';
        if(list.length){
            items=list.map((author, i) =>  <AuthorItem title={author.name} path={author.path} key={i}/>);
        }


        return (
            <ul className='list-group'>
                {items}
            </ul>
        );
    }
}


AuthorsList.propTypes = {
    list: PropTypes.array.isRequired
};

export default AuthorsList;


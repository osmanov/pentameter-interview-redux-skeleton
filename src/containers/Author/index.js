import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authorActions from '../../actions/author';

import styles from './Author.css';




class Author extends Component {
    componentDidMount() {
        let { actions } = this.props;
        let { id } = this.props.params;
        actions.fetchAuthor(id);
    }

    render() {
        let { author } = this.props;
        let { name } = author;

        let content="Loading...";
        if(name && this.props.params.id==author.id){
            let poems=author.poems.map(poem=>{
                return <tr key={poem.id}>
                        <td>{poem.title}</td>
                        <td>{poem.date}</td>
                        </tr>

            });
            content=<div>
                <h1>Hello my name is {author.name}</h1>
                <h2>My books are:</h2>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {poems}
                    </tbody>
                </table>
            </div>;
        }

        return (
            <div>
                <div >
                    {content}
                </div>
            </div>
        );
    }
}

Author.propTypes = {
    author: PropTypes.object.isRequired
};


function mapStateToProps({author}) {
    return {
        author
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);


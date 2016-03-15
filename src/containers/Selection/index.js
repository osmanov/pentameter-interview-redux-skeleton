import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as authorsActions from '../../actions/authors';
import styles from './Selection.css';
import AuthorList from '../../components/AuthorsList';


class Selection extends Component {
    componentDidMount() {
        let { actions } = this.props;
        actions.fetchAuthors();

    }

    render() {
        return (
            <div>
                <h1>Authors:</h1>
                <AuthorList list={this.props.list} />
            </div>
        );
    }
}


Selection.propTypes = {
    actions: PropTypes.object.isRequired
};


function mapStateToProps({ authors }) {
    return {
        list:  authors.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);


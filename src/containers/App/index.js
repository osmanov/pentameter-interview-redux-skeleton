import React, { cloneElement } from 'react';
import Welcome from '../../components/Welcome';
import styles from './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorsActions from '../../actions/authors';

export default class App extends React.Component {
    render() {
        let {history} = this.props;
        let { pathname } = this.props.location;
        return (
            <div className={styles.root}>
                    {cloneElement(this.props.children || <Welcome history={history} path='/selection'/>, { key: pathname })}
            </div>);
    }
}

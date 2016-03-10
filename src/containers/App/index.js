import React from 'react';

import Welcome from 'components/Welcome';
import styles from './App.css';

export default class App extends React.Component {
    render() {
        let {history} = this.props;
        return (
            <div className={styles.root}>
                <Welcome history={history} path='/selection'/>
            </div>);
    }
}

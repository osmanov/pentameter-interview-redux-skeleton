import React from 'react';
import styles from './Welcome.css';

export default class Welcome extends React.Component {

    navigate(history, path){
        let { push } = history;
        return (event) => {
            event.preventDefault();
            push(path);
        }
    }

    render() {
        let {history,path} = this.props;
        return (
            <div>
                <div className={styles.root}>
                    <div className={styles.title}>
                        <h1>pentameter</h1>
                        <p>A better way to discover poetry online.</p>
                        <button onClick={this.navigate(history, path)}>Select author,read and enjoy</button>
                    </div>
                </div>
            </div>);
    }
}

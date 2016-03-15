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
                <div className="jumbotron">
                    <div className="container">
                        <h1>pentameter</h1>
                        <p>A better way to discover poetry online.</p>
                        <p><a onClick={this.navigate(history, path)} className="btn btn-primary btn-lg" href="#" role="button">Select author,read and enjoy</a></p>
                    </div>
                </div>
            </div>);
    }
}

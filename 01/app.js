import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        counter: 0,
    };

    render() {
        console.log('render');

        return <h1>{this.state.counter}</h1>
    };

    componentDidMount() {
        console.log('componentDidMount');
        this.id = setInterval(this.changeCounter, 5000);
    };

    componentDidUpdate() {
        console.log('componentDidUpdate');
    };

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.id);
    };

    changeCounter = () => {
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));
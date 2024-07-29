import React from 'react';

interface AppProps {
    color?: string;
}

interface AppState {
    counter: number;
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { counter: 0 };
    }

    onIncrement = (): void => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    onDecrement = () => {
        this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    };

    render() {
        return (
            <div>
                <button onClick={this.onIncrement}> Increment </button>
                <button onClick={this.onDecrement}> Decrement </button>
                {this.state.counter}
            </div>
        );
    }
}

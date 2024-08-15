import React from 'react';
import { fetchTodos, deleteTodo, Todo } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
    todos: Todo[];
    fetchTodos: Function; // typeof fetchTodos;
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { fetching: false };
    }

    componentDidUpdate(
        prevProps: Readonly<AppProps>,
        prevState: Readonly<AppState>
    ): void {
        // if (!prevProps.todos.length && this.props.todos.length) {
        if (prevProps.todos !== this.props.todos) {
            this.setState({ ...prevState, fetching: false });
        }
    }

    onButtonClick = (): void => {
        this.setState({ fetching: true });
        this.props.fetchTodos();
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderList = (): JSX.Element[] => {
        // this.setState({ fetching: false });
        return this.props.todos.map((todo, index) => {
            return (
                <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
                    {index + ') ' + todo.title}
                </div>
            );
        });
    };

    render() {
        // console.log(this.props.todos);
        return (
            <div>
                <button onClick={this.onButtonClick}> Fetch </button>
                {this.state.fetching ? 'Loading...' : null}
                {this.renderList()}
            </div>
        );
    }
}

// const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
//     return { todos: state.todos }
// }
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }; // { todos: state.todos }
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

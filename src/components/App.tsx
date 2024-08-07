import React from 'react';
import { fetchTodos, deleteTodo, Todo } from '../actions';
import { StoreState } from '../reducers';
import { connect } from 'react-redux';

interface AppProps {
    todos: Todo[];
    fetchTodos: Function; // typeof fetchTodos;
    deleteTodo: typeof deleteTodo;
}

// interface AppState {
//     todos: Todo[]
// }

class _App extends React.Component<AppProps> {
    onButtonClick = (): void => {
        this.props.fetchTodos();
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderList = (): JSX.Element[] => {
        return this.props.todos.map((todo, index) => {
            return (
                <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
                    {index + ') ' + todo.title}
                </div>
            );
        });
    };

    render() {
        console.log(this.props.todos);
        return (
            <div>
                <button onClick={this.onButtonClick}> Fetch </button>
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

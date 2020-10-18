import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AddMedicine from './AddMedicine';
import ItemsList from './ItemsList';
import Stats from './Stats';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import './Medicine.css';

class Medicine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: props.todos || [],
            finished: props.finished || 0,
            percentDone: props.done || 0
        };
        this.completeTask = this.completeTask.bind(this);
        this.updateListAfterDeletion = this.updateListAfterDeletion.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    render() {
        let todoList = this.state.todoList;
        return (
            <div className="Medicine">
                <h2 class="m-5" style={{
                    textAlign: 'center'
                }}>Medicine List</h2>
                <Stats
                    list={todoList}
                    finished={this.state.finished}
                    percent={this.state.percentDone}
                />
                <AddMedicine addNewItem={this.addItem}/>
                <ItemsList
                    items={todoList}
                    completeTask={this.completeTask}
                    updateList={this.updateListAfterDeletion}
                />
                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me to learn how to use!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Type in the medicine name and then press "Enter". If you have eaten it, mark it as "completed" by press the box again.                         Oh, what if you want to delete one? Just click on the circle on the right hand side!
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }

    addItem(item) {
        let todoList = this.state.todoList,
            task = {task: item, completed: false};
        todoList.push(task);
        this.setState({todoList}, () => {
            this.countFinished();
        });
    }

    completeTask(med) {
        let listItems = this.state.todoList;
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i] === med) {
                listItems[i].completed = !listItems[i].completed;
                this.countFinished();
                break;
            }
        }
    }

    countFinished() {
        let listItems = this.state.todoList;
        let finished = 0;
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].completed) {
                finished++;
            }
        }
        this.setState({ finished }, () => {
            localStorage.setItem('finished', finished);
            this.updateFromLocalStorage();
            this.percentCompletion();
        });
    }

    // Stores todoList in localStorage object
    updateFromLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.state.todoList));
    }

    // Calculates % of completed tasks
    percentCompletion() {
        let totalTasks = this.state.todoList.length,
            finishedTasks = this.state.finished,
            percentDone = Math.floor((finishedTasks / totalTasks) * 100);
        percentDone = isNaN(percentDone) ? 0 : percentDone;
        this.setState({percentDone}, () => {
            localStorage.setItem('done', percentDone);
        });
    }

    // Updates list after deletion of a task
    updateListAfterDeletion(todoList) {
        this.setState({todoList}, () => {
            this.countFinished();
        });
    }
}

Medicine.propTypes = {
  todos: PropTypes.array,
  finished: PropTypes.number,
  percent: PropTypes.number
}

Medicine.defaultProps = {
  todos: [],
  finished: 0,
  percent: 0
}

export default Medicine;

class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {is_done: false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({is_done: !this.state.is_done})
	}

	render() {
		return (
			<li
				onClick={this.handleClick}
				style={
					this.state.is_done
						? {textDecoration: 'line-through'}
						: {textDecoration: 'none'}
				}
				key={this.props.index}
			>
				{this.props.task}
			</li>
		);
	}
}	

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			to_do_list: ['Finish this test', 'Get hired', 'Change the world'],
			value: ''
		};
		this.addTask = this.addTask.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	addTask() {
		if (this.state.value) {
			this.setState({
				to_do_list: [...this.state.to_do_list, this.state.value]
			});
		}
	}

  handleChange(event) {
		this.setState({value: event.target.value});
  }

	render() {
		return (
			<div>
				<h2>Add a new task to your to-do list</h2>
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>

				<button onClick={this.addTask}>Add</button>
				
				<ul>
					{this.state.to_do_list.map((task_text, index) =>
						<ToDoItem task={task_text} key={index}/>
					)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<ToDoList/>,
	document.getElementById('root')
);
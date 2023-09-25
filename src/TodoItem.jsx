export function TodoItem({id, completed, title ,toggleTodo, deleteTodo}) {
	return (
		<li key={id}>
			<label>
				<input onChange={e=>toggleTodo(id, e.target.checked)} type="checkbox" checked={completed}/>
				{title}
			</label>
			<button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
		</li>
	)
}
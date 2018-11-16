import { Seed } from './seed';
export const store = {
	state: {
		Seed
	},
	setActiveColumn(colId) {
		this.state.Seed.map(
			col => (col.id === colId ? (col.active = true) : (col.active = false))
		);
	},
	getActiveColumn() {
		return this.state.Seed.find(col => col.active === true);
	},
	addTask(taskTitle) {
		const tasks = this.getActiveColumn().tasks;
		tasks.push({ id: tasks.length + 1, title: taskTitle, edit: false });
	},
	editTask(colId, taskId) {
		const index = this.state.Seed.findIndex(col => col.id === colId);
		const tasks = this.state.Seed[index].tasks;
		const taskIndex = tasks.findIndex(task => task.id === taskId);
		tasks[taskIndex].edit = true;
		//reset or update the edit property to false of other tasks
		tasks.map(
			task => (task.id === taskId ? (task.edit = true) : (task.edit = false))
		);
	},
	updateTask(colId, taskId, taskTitle) {
		const col = this.state.Seed.find(col => col.id === colId);
		const taskIndex = col.tasks.findIndex(task => task.id === taskId);
		col.tasks[taskIndex].title = taskTitle;
		col.tasks[taskIndex].edit = false;
	},
	deleteTask(colId, taskId) {
		const col = this.state.Seed.find(col => col.id === colId);
		const taskIndex = col.tasks.findIndex(task => task.id === taskId);
		col.tasks.splice(taskIndex, 1);
	}
};

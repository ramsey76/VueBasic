export interface ToDoItem {
    name: string;
    done: boolean;
}

export interface ToDoState {
    toDoList: ToDoItem[];
}
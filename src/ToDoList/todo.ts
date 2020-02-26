import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import {namespace} from "vuex-class";
import WithRender from "./todo.html";
import {ToDoItem} from "@/store/types";

const ToDoStore = namespace("toDoStore");

@WithRender
@Component
export default class todo extends Vue {
    @ToDoStore.Getter public currentToDo!: ToDoItem[];
    @ToDoStore.Action public addToDoItem!: (item: string) => void;

    public newItem: string = "";

    public add() {
        this.addToDoItem(this.newItem);
        this.newItem = "";
    }
}
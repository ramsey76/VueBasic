import {GetterTree, MutationTree, ActionTree, Module, ActionContext } from "vuex";
import {ToDoState, ToDoItem} from "@/store/types";

const state: ToDoState = {
    toDoList: [{name: "Get Milk", done: false}]
}

export const getters: GetterTree<ToDoState, any> = {
    currentToDo: (state) => state.toDoList,
};

export const mutations: MutationTree<ToDoState> ={
    addToDoItemToState(ToDoState, item: string) {
        ToDoState.toDoList.push({name: item, done: false});
    }
}

export const actions: ActionTree<ToDoState, any> = {
    addToDoItem({commit}: ActionContext<ToDoState, any>, item: string) {
        //Send to an API
        commit("addToDoItemToState", item);
    }
}

export const toDoStore: Module<any,any> = {
    state,
    getters,
    mutations,
    actions,
    namespaced: true,
}
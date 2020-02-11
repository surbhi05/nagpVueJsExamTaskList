  
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoitems: []
  },
  mutations: {
    addTask(state, payload) {
      payload.id = state.todoitems.length
      payload.createdAt = new Date()
      state.todoitems.push(payload)
    },
    sortStatus(state){
      console.log(state.todoitems)
      var doneTasks = state.todoitems.filter(function(item) {
        return item.done;
      })
      var pendingTasks = state.todoitems.filter(function(item) {
        return !item.done;
      })
      state.todoitems = [];
      state.todoitems.concat(pendingTasks);
      state.todoitems.concat(doneTasks);
    }
  },
  actions: {

  }
})
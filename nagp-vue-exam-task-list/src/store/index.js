  
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
      state.todoitems.sort(function(a,b){
          if((a.done && b.done) || (!a.done && !b.done)){
            return 0;
          }
          else if(a.done && !b.done){
            return 1;
          }
          else if(!a.done && b.done){
            return -1;
          }
      })
    },
    sortDeadline(state){
      state.todoitems.sort(function(a,b){
        if(a.deadline == b.deadline){
          return 0;
        }
        else if(a.deadline > b.deadline){
          return 1;
        }
        else if(a.deadline < b.deadline){
          return -1;
        }
    })
  },
  addNotes(state, data){
    var taskId = data.id;
    var notes = data.notes;
    state.todoitems[taskId].notes = notes;
  }
  },
  actions: {

  }
})
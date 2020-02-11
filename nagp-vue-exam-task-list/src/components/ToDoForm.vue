<template>
    <div class="row">
      <div class="col-4">
        <b-form-input v-model="newTodoTask"></b-form-input>
        <b-form-textarea v-model="description"></b-form-textarea>
        <b-form-input v-model="deadline" type="date"></b-form-input>
      </div>
      <div class="col-2">
        <b-button @click="addTask()" variant="success">
          Add Task
        </b-button>
      </div>
      <div class="col-2">
        <b-button @click="sortStatus()" variant="success">
          Sort by status
        </b-button>
      </div>
    </div>
</template>

<script>
import store from "../store/index";
export default {
    data() {
      return {
        newTodoTask: "",
        description: "",
        deadline: new Date().toLocaleDateString()
      };
    },
    methods: {
      addTask() {
        store.commit("addTask", { 
          title: this.newTodoTask,
          description: this.description,
          deadline: this.deadline,
          done: false 
        });
        this.newTodoTask = "";
        this.description = "";
        this.deadline = new Date().toLocaleDateString();
    },
      sortStatus() {
        store.commit("sortStatus");
    }
  }
};
</script>
<template>
  <div>
    <div class="row">
      <div class="col-4">
        Title
        <b-form-input v-model="newTodoTask" placeholder="Enter Title"></b-form-input>
      </div>
      <div class="col-4">
        Description
        <b-form-textarea v-model="description" placeholder="Enter Description"></b-form-textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        Deadline
        <b-form-input v-model="deadline" type="date"></b-form-input>
      </div>
    </div>
    <div class="row">
      <div class="col-2">
        <br />
        <b-button @click="addTask()" variant="success">Add Task</b-button>
      </div>
      <div class="col-2">
        <br />
        <b-button @click="sortStatus()" variant="success">Sort by status</b-button>
      </div>
      <div class="col-2">
        <br />
        <b-button @click="sortdeadline()" variant="success">Sort by deadline</b-button>
      </div>
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
    },
    sortdeadline() {
      store.commit("sortDeadline");
    }
  }
};
</script>

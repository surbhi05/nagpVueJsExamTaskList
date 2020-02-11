<template>
  <div>
    <div v-if="task">
        Status: {{task.done}}
        <br/>
        Title: {{task.title}}
        <br/>
        Description: {{task.description}}
        <br/>
        Deadline: {{task.deadline}}
        <br/>
    </div>
  </div>
</template>

<script>
import store from "../store/index";
export default {
  name: "DetailPage",
  mounted() {
    console.log("ListItem", "mounted");
    this.taskId = this.$route.params.taskId;
  },
  computed: {
    task: function() {
      return store.state.todoitems[this.$route.params.taskId];
    }
  },
  data() {
    return {
      taskId: false
    };
  }
};
</script>
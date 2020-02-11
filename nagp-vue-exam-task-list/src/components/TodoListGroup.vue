<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="todo in todolist" :key="todo.id">
        <b-form-checkbox v-model="todo.done">
        <router-link v-if="!todo.done" :to="'/task/' + todo.id">
          {{ todo.title }}
        </router-link>
        <router-link v-else :to="'/task/' + todo.id">
          <strike>{{ todo.title }}</strike>
        </router-link>
        <p>{{todo.description}}</p>
      </b-form-checkbox>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  computed: {
    todolist: () => store.state.todoitems
  }
};
</script>
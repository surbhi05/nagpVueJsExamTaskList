<template>
    <div id="todoApp">
        <div >
            <TodoForm/>
        </div>
        <br/>
        <div >
            <TodoListGroup/>
        </div>
    </div>
</template>

<script>
import TodoListGroup from "../components/TodoListGroup.vue";
import TodoForm from "../components/ToDoForm.vue";

export default {
    name: 'TodoList',
    components: {
        TodoListGroup,
        TodoForm
  }
};
</script>
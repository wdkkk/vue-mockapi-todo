<template>
      <TransitionGroup class="tasks" name="tasks">
            <todo-task
                  v-for="task in tasks"
                  :key="task.id"
                  :task="task"
                  @deleteTask="this.$emit('deleteTask', task)"
            ></todo-task>
      </TransitionGroup>
</template>
<script>
      import TodoTask from "./TodoTask.vue";

      export default {
            props: {
                  tasks: {
                        type: Array,
                  },
            },
            components: {
                  TodoTask,
            },
            methods: {},
      };
</script>
<style scoped>
      .tasks-enter-from,
      .tasks-leave-to {
            opacity: 0;
            transform: translateY(-20px);
      }
      .tasks-leave-active {
            position: absolute;
      }
      .tasks-move,
      .tasks-enter-active,
      .tasks-leave-active {
            transition: all 0.3s ease;
      }
</style>

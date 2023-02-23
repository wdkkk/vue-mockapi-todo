<template>
      <div>
            <todo-form @addTask="addTask"></todo-form>

            <loading-anim v-if="!isResponse">{{ fetchTasks }}</loading-anim>
            <todo-task-list
                  v-else
                  :tasks="this.tasks"
                  @deleteTask="deleteTask"
            ></todo-task-list>
      </div>
</template>

<script>
      import TodoForm from "@/components/TodoForm.vue";
      import TodoTaskList from "@/components/TodoTaskList.vue";

      export default {
            components: {
                  TodoForm,
                  TodoTaskList,
            },
            data() {
                  return {
                        name: "",
                        tasks: [],
                        isResponse: false,
                        task: {},
                  };
            },
            methods: {
                  addTask(t) {
                        this.tasks.push(t);
                  },
                  getTasks(t) {
                        this.isResponse = true;
                        this.tasks = t;
                  },
                  deleteTask(task) {
                        this.tasks = this.tasks.filter((t) => t.id != task.id);
                  },
            },
            computed: {
                  fetchTasks() {
                        fetch(
                              "https://63f64c329daf59d1ad866b42.mockapi.io/tasks"
                        )
                              .then((res) => {
                                    return res.json();
                              })
                              .then(this.getTasks);
                  },
            },
      };
</script>

<template lang="">
      <div class="task">
            <div class="round" @click="changeState">
                  <input
                        type="checkbox"
                        v-model="task.isCompleted"
                        id="checkbox"
                        disabled
                  />
                  <label for="checkbox"></label>
            </div>

            <div class="task__row">
                  <div class="name">{{ task.name }}</div>

                  <Transition>
                        <div
                              class="close"
                              v-if="task.isCompleted"
                              @click="deleteTask"
                        ></div>
                  </Transition>
            </div>
      </div>
</template>
<script>
      export default {
            props: {
                  task: {
                        type: Object,
                        required: true,
                  },
            },
            methods: {
                  changeState() {
                        this.task.isCompleted = !this.task.isCompleted;
                  },
                  deleteTask() {
                        this.$emit("deleteTask", this.task);
                  },
            },
      };
</script>
<style scoped>
      .task__row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
      }
      .v-enter-active,
      .v-leave-active {
            transition: opacity 0.3s ease;
      }

      .v-enter-from,
      .v-leave-to {
            opacity: 0;
      }
      .close::after {
            display: inline-block;
            content: "\00d7";
            font-weight: 300;
      }
      .close:hover {
            cursor: pointer;
      }
      .round {
            position: relative;
            width: 32px;
            height: 32px;
            padding-left: 40px;
      }

      .round label {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 50%;
            cursor: pointer;
            height: 28px;
            left: 0;
            position: absolute;
            top: 0;
            width: 28px;
            transition: 0.3s ease;
      }

      .round label:after {
            transition: 0.3s ease;
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 7px;
            opacity: 0;
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
      }

      .round input[type="checkbox"] {
            visibility: hidden;
      }

      .round input[type="checkbox"]:checked + label {
            background-color: #66bb6a;
            border-color: #66bb6a;
      }

      .round input[type="checkbox"]:checked + label:after {
            opacity: 1;
      }
      .task {
            font-size: 28px;
            width: 90%;
            margin: 0 auto;
            display: flex;

            margin-bottom: 25px;
      }
</style>

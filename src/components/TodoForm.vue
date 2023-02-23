<template lang="">
      <div>
            <div class="container">
                  <input
                        type="text"
                        v-model="this.name"
                        class="text"
                        @keypress="addTask"
                  />
                  <button @click="addTask" class="button" computed="test">
                        Add
                  </button>
            </div>
      </div>
</template>
<script>
      export default {
            data() {
                  return {
                        name: "",
                        tasks: [],
                        isResponse: false,
                  };
            },

            methods: {
                  addTask(event) {
                        if (event.key == "Enter" || event.type == "click") {
                              if (this.name == "") alert("Empty title");
                              else {
                                    let task = {
                                          id: String(Date.now()),
                                          name: this.name,
                                    };
                                    this.$emit("addTask", task);
                                    this.name = "";
                              }
                        }
                  },
            },
      };
</script>

<style scoped>
      .container {
            padding-top: 10px;
            width: 90%;
            margin: 0 auto 50px;

            display: flex;
            justify-content: space-between;
            align-items: center;
      }

      .text {
            width: 70%;
            height: 45px;
            box-sizing: border-box;
            font-size: 20px;
            padding: 10px;
            outline: none;
      }
      .button {
            width: 25%;
            background-color: #66bb6a;
            border: 0;
            color: #fff;
            font-family: Avenir, Helvetica, Arial, sans-serif;
            font-size: 25px;
            cursor: pointer;
            height: 45px;
            transition: background-color 0.3s ease;
      }
      .button:hover {
            background-color: #4fbe54;
      }
</style>

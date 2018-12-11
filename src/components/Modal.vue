<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <i class="f" :class="type"/>
        </div>
        <div class="modal-body">
          <LinkForm v-if="type.includes('link')"/>
          <TodoForm v-if="type.includes('clipboard')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkForm from "../controllers/LinkForm.vue";
import TodoForm from "../controllers/TodoForm.vue";

export default {
  name: "modal",
  props: ["type"],
  components: { LinkForm, TodoForm }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  height: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: rgb(50, 68, 85);

  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  font-size: 1.5rem;
  margin-top: 0;
  color: #77a5b3;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
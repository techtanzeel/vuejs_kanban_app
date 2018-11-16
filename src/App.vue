<template>
    <div id="app" class="container">
        <Board/>
        <hr/>
        <AddTask/>
    </div>
</template>

<script>
import Board from './components/Board.vue'
import AddTask from './components/AddTask.vue'
export default {
  name: 'app',
  components:{
      Board,
      AddTask
  }
}
</script>
<style>
.uk-card-body {
	padding: 12px 30px;
}
.icons .fa {
	padding: 0 2px;
}
.task-header {
	text-align: center;
	margin-top: 10px;
}
</style>

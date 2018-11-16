<template>
    <div>
        <div class="uk-card uk-card-default uk-card-body" id="todo-col" @click="setActiveCol(col.id)" style="cursor:pointer">
            <h3> {{col.name}}</h3>
            <Task v-for="task in col.tasks" :task="task" :key="task.id" :colId="col.id" />
        </div>
    </div>
</template>
<script>
import Task from './Task.vue';
import {store} from '../store.js';
export default {
name: 'BoardColumn',
props:['col'],
components:{
    Task
},
methods:{
    setActiveCol(colId){
     store.setActiveColumn(colId)
    }
}
}
</script>

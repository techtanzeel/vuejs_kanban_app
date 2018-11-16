<template>
    <div class="has-text-centered icons">
        <div class="uk-alert-default" uk-alert>
            <p>{{task.title}}</p>
            <template v-if="task.edit">
                <input type="text" class="uk-input uk-form-width-medium uk-form-small" :placeholder="task.title" v-model="newTitle" />
                <button class="uk-button uk-button-secondary uk-button-small" style="margin-top:5px" @click="updateTask(colId, task.id, newTitle)"> Save</button>
            </template>
            <template v-else>
                <button class="uk-button uk-button-primary uk-button-small" @click="editTask(colId, task.id)">
                    Edit
                </button>
                <span style="margin:2px">
                </span>
                <button class="uk-button uk-button-danger uk-button-small" @click="deleteTask(colId, task.id)">
                    Delete
                </button>
            </template>
        </div>
    </div>
</template>
<script>
import {store} from '../store.js';
export default {
    name: 'Task',
    props: ['task','colId'],
    data(){
        return {
            newTitle: ''
        }
    },
    methods:{
        editTask(colId, taskId){
         store.editTask(colId, taskId)
        },
        updateTask(colId, taskId, taskTitle){
            store.updateTask(colId, taskId, taskTitle)
        },
        deleteTask(colId, taskId){
            store.deleteTask(colId, taskId);
        }
    }
}
</script>


<template>
    <div class="uk-flex-center">
        <div class="task-header">
            <div class="uk-card uk-card-default uk-card-small uk-card-body">
                <h3 class="uk-card-title">New {{getColTitle}}</h3>
                <div class="uk-margin">
                    <input class="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="Add Task" v-model="title" />
                </div>
                <button class="uk-button uk-button-secondary uk-button-small" @click="saveTask(title)">Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store.js'
export default {
    name: 'AddTask',
    data(){
        return {
            title: ''
        }
    },
    computed:{
        getColTitle(){
          return store.getActiveColumn().name
        }
    },
    methods:{
        saveTask(taskTitle){
            store.addTask(taskTitle);
            this.title =''
        }
    }
}
</script>

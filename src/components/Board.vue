<template>
    <div>
        <h3 align="center" class="uk-heading-divider">Kanban Board</h3>
        <div class="uk-grid-medium uk-child-width-expand@s uk-text-center" uk-grid>
            <!-- <BoardColumn name="Todo" />
            <BoardColumn name="InProgress" />
            <BoardColumn name="Done" /> -->
            <BoardColumn v-for="col in sharedState.Seed" :key="col.id" :col="col" />
        </div>
    </div>
</template>
<script>
import BoardColumn from './BoardColumn.vue';
import {store} from '../store.js'
export default {
  name: 'Board',
  data(){
      return {
       sharedState: store.state
      }
  },
  components:{
      BoardColumn
  }
}
</script>

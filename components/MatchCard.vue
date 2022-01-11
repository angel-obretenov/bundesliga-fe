<template>
 <div class="m-4 border border-gray-400 border-gray-400 rounded-[10px] bg-white p-4 flex flex-col justify-between leading-normal text-ellipsis overflow-hidden">
    <div class="mb-2">
      <div class="text-gray-900 font-bold text-xl mb-2">
          
        <img :src="teamOneImg" class="flex w-6 h-6">
      
        {{ teamOneTitle }} <p > VS</p> {{ teamTwoTitle }}
      
        <img :src="teamTwoImg" class="flex w-6 h-6">
      </div>
      
      <p class="mt-4 text-gray-500 text-xl font-bold text-base">{{ playtime }}</p>

    </div>
</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from  "vuex";

export default {
  name: 'MatchCard',
  props: {
      teamOneTitle: {
          type: String,
          required: true
      },
      teamTwoTitle: {
          type: String,
          required: true
      },
      teamOneImg: {
          type: String,
          required: true
      },
      teamTwoImg: {
          type: String,
          required: true
      },
      playtime:{
          type: String,
          required: true 
      }
  },
}
</script>

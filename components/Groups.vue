<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-900 sm:items-center sm:pt-0">
    <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 place-content-center bg-slate-700 rounded-[20px]" style="text-align: -webkit-center;">


        <div class="flex justify-center">

        <BundesligaLogo class="bg-gray-500 rounded-[20px] mt-4"/>
          <match-card v-if="getNextMatch" :key="getNextMatch.matchID" 
           :teamOneTitle="getNextMatch.nameTeam1" 
           :teamOneImg="getNextMatch.iconUrlTeam1" 
           :teamTwoTitle="getNextMatch.nameTeam2" 
           :teamTwoImg="getNextMatch.iconUrlTeam2" 
           :playtime="getNextMatch.matchDateTimeUTC"/>
        </div>
      

      <div class="mt-6 bg-white overflow-hidden shadow sm:rounded-lg p-6 bg-slate-500 " >
        <h2 class="text-2xl leading-7 font-semibold">
          Group 34
        </h2>
        
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed"></p>

        <div class="max-w-sm w-full lg:max-w-full lg:flex columns-2"> 
          <match-card v-for="team in getCurrentGroupTeams"
           :key="team.matchID" 
           :teamOneTitle="team.nameTeam1" 
           :teamOneImg="team.iconUrlTeam1" 
           :teamTwoTitle="team.nameTeam2" 
           :teamTwoImg="team.iconUrlTeam2" 
           :playtime="team.matchDateTimeUTC"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BundesligaLogo from './Logo/BundesligaLogo.vue';
import MatchCard from './MatchCard.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Groups',
  components: { BundesligaLogo, MatchCard },
  data() {
    return {
      teamOne: {
        title: "Dortmund",
        img: "//ssl.gstatic.com/onebox/media/sports/logos/FZnTSH2rbHFos4BnlWAItw_48x48.png"
      },
      teamTwo: {
        title: "Nekuv tam",
        img: "//ssl.gstatic.com/onebox/media/sports/logos/FZnTSH2rbHFos4BnlWAItw_48x48.png"
      },
      playtime: 'Пт, 14.01 21:30 ч.'
    }
  },
  async created() {
      await this.requestNextMatch()
      await this.getCurrentGroupData()
  },
  methods: {
      ...mapActions(["getCurrentGroupData", "requestNextMatch"])
  },
  computed: {
    ...mapGetters(["getCurrentGroupTeams", "getNextMatch"])
  },
  asyncData() {
        return {
            nextMatch: this.getNextMatch ? this.getNextMatch : null
        }
    }
}
</script>

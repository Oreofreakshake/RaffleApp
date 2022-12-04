<template>
  <div class="flex flex-col items-center text-center bg-navy px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-96">
    <div class="flex flex-col items-center justify-center w-full h-full ">
      <div class="flex flex-col justify-center items-center h-screen">


        <!--Winner section-->
        <div class="flex">
          <h1 class="mt-6 font-poppins text-4xl md:text-6xl font-bold tracking-wide text-lightestslate">Winner :</h1> 
        <svg v-show='renderWinnerLoad' class="animate-spin ml-6 mt-9 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <h1 v-show="renderWinner" class="mt-6 ml-6 font-poppins text-4xl md:text-6xl font-bold tracking-wide text-lightestslate">{{winner}}</h1> 
        </div>

        <!--Prize section-->
        <div class="flex">
          <h1 class="mt-6 font-poppins text-4xl md:text-6xl font-bold tracking-wide text-lightestslate">Prize :</h1> 
        <svg v-show='renderPrizeLoad' class="animate-spin ml-6 mt-9 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <h1 v-show="renderPrize" class="mt-6 ml-6 font-poppins text-4xl md:text-6xl font-bold tracking-wide text-lightestslate">{{prize}}</h1> 
        </div>







        
        <br>    
        <div class="flex-col">
          <button @click="onClickName(), onClickGetName()" class="border-2 mr-2 md:mr-10 border-green hover:border-white hover:bg-green hover:bg-opacity-10 mt-14 text-green hover:text-white w-36 h-16 rounded-lg font-mono transition-colors duration-300 tracking-wider" :disabled='isDisabledWinner'> {{winnerButton}}</button>

        <button @click="onClickPrize(), onClickGetPrize()" class="border-2 border-green hover:border-white hover:bg-green hover:bg-opacity-10 mt-14 text-green hover:text-white w-36 h-16 rounded-lg font-mono transition-colors duration-300 tracking-wider" :disabled='isDisabledPrize'> {{prizeButton}}</button>
        </div>
        <button @click="onClickReset()" class="border-2 border-green hover:border-white hover:bg-green hover:bg-opacity-10 mt-8 text-green hover:text-white w-36 h-16 rounded-lg font-mono transition-colors duration-300 tracking-wider"> {{resetButton}}</button>
        </div>
        
        
      </div>  
    </div>
    

</template>

<script>

import jsonData from "../components/participants.json"
import jsonDataPrize from "../components/prizes.json"


export default {

  data(){
    return{
      dataprizes: jsonDataPrize,
      data: jsonData,
      winner: "",
      prize: "",
      winnerCounter: 0,
      winnerButton: "Roll Winner",
      prizeCounter: 0,
      prizeButton: "Roll Prize",
      resetButton: "Reset",
      renderWinnerLoad: false,
      renderPrizeLoad: false,
      renderWinner: false,
      renderPrize: false,
      isDisabledWinner: false,
      isDisabledPrize: true,

    }
  },
  methods: {

    onClickName(){

      this.winnerCounter++;
      this.winnerButton = "Stop";
      this.renderWinnerLoad = true;
      
      if(this.winnerCounter>=2){
        this.winnerButton = "Winner"
        this.renderWinnerLoad = false
        this.renderWinner = true
        this.isDisabledWinner = true
        this.isDisabledPrize = false;
      }

    },
    onClickGetName(){
      
      const rand = Math.floor(Math.random() * this.data.length);
      const Name = this.data[rand].name
      this.winner = Name;

    },

    onClickPrize(){
      this.prizeCounter++;
      this.prizeButton = "Stop";
      this.renderPrizeLoad = true;

      if(this.prizeCounter>=2){
        this.prizeButton = "Prize";
        this.renderPrizeLoad =false;
        this.renderPrize =true;
        this.isDisabledPrize = true;
      }
    },
    onClickGetPrize (){
      const rand2 = Math.floor(Math.random() * this.dataprizes.length);
      const Prize = this.dataprizes[rand2].name
      this.prize = Prize;
    },


    onClickReset(){
      this.winner =  "";
      this.prize =  "";
      this.winnerButton = "Roll Winner";
      this.prizeButton=  "Roll Prize";
      this.winnerCounter= 0;
      this.prizeCounter= 0;
      this.renderWinnerLoad=  false;
      this.renderWinner=  false;
      this.renderPrize =false;
      this.renderPrizeLoad =false;
      this.isDisabledWinner =false;
      this.isDisabledPrize = true;
    }

  },

};
</script>



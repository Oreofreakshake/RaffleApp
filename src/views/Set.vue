<template>
  <div class="bg-navy h-screen">
    <div class="text-center font-poppins font-bold p-12 text-lightestslate">
      <div class="text-6xl p-12">testing route</div>
      <div class="text-xl mb-12">(temp data)</div>
      <form >
        <div class="mb-4 flex justify-center align-middle gap-12">
          <div>
            <label class="block text-4xl  font-bold mb-2">
            Participants
            </label>
      <input v-on:keyup.enter="onEnter" v-model="newName" class="shadow appearance-none border rounded text-navy py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name...">
      <ul class="flex-row mt-12 ">
        <li class="mb-2 text-2xl" v-for="participants in Names" v-bind:key="participants.id">- {{participants.name}}</li>
      </ul>
    
      </div>
        <div><label class="block text-4xl  font-bold mb-2">
          Prizes
          </label>
          <input v-on:keyup.enter="onEnter" class="shadow appearance-none border rounded text-navy py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name...">
        </div>
      </div>

      </form>
    </div>
  </div>
</template>

<script>

export default {
  name:"Set",
  data(){
    return{
      Names: [],
      newName: ''
    }
  },
  methods: {
    onEnter(){
      this.Names.push({
        name: this.newName,
        id: this.Names.length +1
      }),

      this.newName = "";
    }
  },

}
</script>
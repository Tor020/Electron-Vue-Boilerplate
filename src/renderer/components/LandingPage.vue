<template>


    <div class='root'>

      <div class='greeting'>
        <h1>{{Greeting}}</h1>
      </div>
    

      <div class="interfaceControls">

    

       <div>
          <input type="text" name="" v-model='text' id=""> 
          <input id='go' type="button" @click="ಠ($event)" value="ಠ"> 
          <br>
          <input type="radio" id="jack" value="Jack" v-model="radioHolders">
          <label for="jack">Jack</label>
          <input type="radio" id="john" value="John" v-model="radioHolders">
          <label for="john">John</label>
          <input type="radio" id="mike" value="Mike" v-model="radioHolders">
          <label for="mike">Mike</label>
          
        <span>{{radioHolders}}</span>
          <br>

          <input type="checkbox" id="Phil" value="Phil" v-model="checkedNames">
          <label for="Phil">Phil</label>
          <input type="checkbox" id="Kevin" value="Kevin" v-model="checkedNames">
          <label for="Kevin">Kevin</label>
          <input type="checkbox" id="Tim" value="Tim" v-model="checkedNames">
          <label for="Tim">Tim</label>
        <span>{{checkedNames}}</span>
      </div> 



      </div>






      <div class='styleControls' @click="showStyleControls = !showStyleControls">
        <input v-if='showStyleControls' class='styleControl' type="button" value="Dark">
        <input v-if='showStyleControls' class='styleControl' type="button" value="Light">
      </div>


    </div>

</template>

<script>


  export default {
    name: 'landing-page',
    // components: { SystemInformation },
    data:function(){
      return{
        checkedNames: [],
        checkHolders:'',
        radioHolders:'',
        showStyleControls:false,
        text:'submission box',


        Greeting:'This is your Electron BoilerPlate',



      }
    },

    methods: {
      toggleControls(){
        console.log('operational')
      },
      
      ಠ(e){
      let tb = this.text


        console.log(e, tb);
      }
    }
  }
</script>

<style>

</style>

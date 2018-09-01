<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    <div class='root main'>
      {{Greeting}}
    </div>
  </div>
</template>

<script>


  export default {
    name: 'landing-page',
    // components: { SystemInformation },
    data:function(){
      return{
        Greeting:'This is your Electron BoilerPlate'
      }
    },

    methods: {
    }
  }
</script>

<style>
  

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {font-family:'Nunito';}

  #wrapper {
    /* background: radial-gradient( ellipse at top left, rgba(255, 255, 255, 1) 40%, rgba(229, 229, 229, .9) 100% ); */
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  .root {
    display: flex;
    justify-content: space-between;
  }

  .root > div { flex-basis: 50%; }



</style>

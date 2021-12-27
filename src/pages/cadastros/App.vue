<template>
  <div id="app">

      <div class="container">
          <div class="grid-12">
              
              <div class="card">
                <div class="card-header">
                    <strong class="align-self-center">Produto</strong>
                </div>
                 <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    <input type="text" placeholder="Descrição do produto">
                                </div>
                            </div>
                        </div>   
                </div>
            </div>
          </div>

          <div class="grid-12" style="text-align:left;">
               <button class="btn btn-success mr-2" type="submit">Salvar</button>
               <button class="btn btn-secondary" type="reset">Voltar</button>
          </div>
      </div>



</div>
</template>

<script>
//import Sidebar from '../../components/Sidebar.vue' 
export default {
  name: 'App',
  components: {
    //Sidebar
    }
}
</script>

<style>
/*body {background:white; margin:0; padding:0;}*/ 
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

img { width:100px; }
</style>

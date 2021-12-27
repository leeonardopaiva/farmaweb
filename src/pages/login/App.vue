<template>
  <div id="app" class="bodylogin">

    <!--<Sidebar></Sidebar>-->


        <section>
            <div class="container">
                <div class="grid-6">
                    <div class="idiomas">
                        <p>Selecione o idioma</p>
                        <div>
                        <br>
                          <div class="cont-select">
                            <select class="form-select custom-shadow" id="select">
                                <option id="" value="br">Português</option>
                                <option id="" value="es">Espanhol</option>
                            </select>
                          </div>
                        </div>
                      
                    <!--<selectGlobalizacao></selectGlobalizacao>-->
                </div>
                 </div>

                <div class="grid-6 acesso">
                    <ul>
                        <li>
                            <img class="logo" src="https://hfarmafacil.prismafive.com.br/Preto_amarelo.png" alt="" />
                        </li>
                        <li>
                            <input @click="inputAnomation('spanEmail')"
                                   id="imputEmal"
                                   placeholder="Email"
                                   type="text"
                                   class="custom-shadow" />

                        </li>
                        <li>
                            <input @click="inputAnomation('spanSenha')"
                                   placeholder="Senha"
                                   id="inputSenha"
                                   type="password"
                                   class="custom-shadow" />
                        </li>
                        <li>
                            <div id="fetchResult"></div>
                        </li>
                        <li>
                            <button class=""
                                    type="button"
                                    @click="recoverPassword">
                                <span class="lostpass"> Esqueceu a senha? Clique aqui!</span>
                            </button>

                            <!-- <p>Esqueceu sua senha? <u>clique aqui!</u></p>-->
                        </li>
                        <li>
                            <span class="txt1"> Não tem uma conta? </span>
                            <a target="blanck"
                               href="https://www.prismafive.com.br/"
                               class="txt2">
                                Solicite aqui
                            </a>
                        </li>
                        <li>
                            <button @click="logar" class="custom-shadow btlogin" type="button">
                              Entrar
                            </button>
                        </li>
                    </ul>
                </div>
                <LostPassword v-if="showRecoverPassword"
                              @return-to-login="recoverPassword"></LostPassword>
            </div>
            
        </section>
        <footer>
            <div class="container">
                <div class="grid-12">
                    Todos os direitos resevados por Prismafive.
                </div>
            </div>
        </footer>
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

body {
    background: url("https://hfarmafacil.prismafive.com.br/img/bg2.d0eece87.png") #fff;
    background-position: 0;
    background-size: 100% auto;
    border: 2px;
    width: 100%;
    height: 100%;
    position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

img { width:100px; }
</style>

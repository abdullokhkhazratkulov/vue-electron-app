<template>
 <b-card v-if="show">
  <div>
    <p>{{message}}</p>
    <div class="text-center">
      <b-button v-if="isHidden" @click="restartApp()">Restart</b-button>
      <b-button @click="close()">Back</b-button>
    </div>
  </div>
 </b-card>
</template>

<script>
const {ipcRenderer} = window.require('electron')

export default {
  name: "Notification",
  data(){
    return {
      show: false,
      message: null,
      isHidden: false
    }
  },
  mounted() {
    ipcRenderer.on('update_available', () => {
      ipcRenderer.removeAllListeners('update_available');
      this.show = true
      this.message = 'Доступно новое обновление. Загрузка.....';
    });

    // On new version downloaded
    ipcRenderer.on('update_downloaded', () => {
      ipcRenderer.removeAllListeners('update_downloaded');
      this.isShow = true
      this.isHidden = true
      this.message = 'Обновление скачано. Установить?';
    });
  },
  methods: {
    restartApp() {
      ipcRenderer.send('restart_app');
    },
    close() {
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
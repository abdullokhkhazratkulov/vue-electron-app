<template>
 <b-card v-if="show" class="notification">
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

const {ipcRenderer} = require('electron')

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
      this.message = 'A new update is available. Downloading now...';
    });

    // On new version downloaded
    ipcRenderer.on('update_downloaded', () => {
      ipcRenderer.removeAllListeners('update_downloaded');
      this.isShow = true
      this.isHidden = true
      this.message = 'Update Downloaded. It will be installed on restart. Restart now?';
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
.notification {
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 200px;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
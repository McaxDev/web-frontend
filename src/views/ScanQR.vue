<script setup lang="ts">
import { ref } from 'vue'
import { QrcodeStream } from 'vue-qrcode-reader'

function onDecode(decodedString: string) {
  console.log(decodedString)
  content.value = decodedString
}

const content = ref('')

async function onInit(promise: Promise<void>) {
  promise.then(() => console.log('初始化成功')).catch((err) => console.error('初始化失败', err))
}
</script>

<template>
  <div>
    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
  {{ content }}
</template>

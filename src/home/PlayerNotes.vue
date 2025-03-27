<script setup lang="ts">
import { apiAxios } from '@/utils/axios'
import { ref } from 'vue'

interface UserNote {
  avatar: string
  name: string
  content: string
}

const userNotes = ref<UserNote[]>([])

apiAxios
  .get<UserNote[]>('/misc/get/notes')
  .then((res) => {
    userNotes.value = res.data
  })
  .catch((err) => console.log(err))
</script>

<template></template>

<style scoped></style>

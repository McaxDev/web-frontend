<script setup lang="ts">
import useSettingStore from '@/setting/setting'
import axios from 'axios'
import { ref } from 'vue'

interface UserReview {
  username: string
  content: string
  time: string
}

const setting = useSettingStore()
const reviews = ref<UserReview[] | null>(null)

axios
  .get<UserReview[]>(`${setting.fileAddr}/user-review.json`)
  .then((res) => {
    reviews.value = res.data
  })
  .catch((err) => console.log(err))
</script>

<template></template>

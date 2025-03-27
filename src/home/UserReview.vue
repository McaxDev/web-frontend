<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import { addr } from '@/config'

interface UserReview {
  username: string
  content: string
  time: string
}

const reviews = ref<UserReview[] | null>(null)

axios
  .get<UserReview[]>(`${addr.file}/user-review.json`)
  .then((res) => {
    reviews.value = res.data
  })
  .catch((err) => console.log(err))
</script>

<template></template>

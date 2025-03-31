<script setup lang="ts">
import {apiAxios} from '@/utils/axios';
import type {User} from '@/utils/tables';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute()
const userName = route.params.user as string
const user = ref<User|null>(null)

apiAxios.get<User>(`/user/${userName}`).then(res => {
  user.value = res.data
}).catch(err => console.log(err))
</script>

<template>

</template>

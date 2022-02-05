<template>
	<div v-html="info" class="about"></div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const info = computed(() => store.getters.getAboutPageInfo)

onMounted(() => {
	store.dispatch('setAboutPage')
})
</script>

<style lang="scss" scoped>
.about {
	padding: 20px;
}
</style>

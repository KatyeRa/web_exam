<template>
	<div class="home">
		<div v-html="content.text" />
		<div>
			<img :src="content.image" alt="" class="img" />
		</div>
	</div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const content = computed(() => store.getters.getMainPageInfo)

onMounted(() => {
	store.dispatch('setMainPage')
})
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	padding: 20px;
}

.img {
	width: 400px;
}
</style>

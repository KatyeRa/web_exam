<template>
	<a-card hoverable style="width: 220px">
		<template #cover>
			<img alt="example" src="../assets/left_widget_img.jpg" />
		</template>
		<template class="ant-card-actions" #actions>
			<setting-outlined key="setting" />
			<edit-outlined key="edit" />
			<ellipsis-outlined key="ellipsis" />
		</template>
		<div>
			<p>Коровы: {{ items.cows }}</p>
			<p>Кролики: {{ items.rabbits }}</p>
			<p>Овцы: {{ items.sheeps }}</p>
		</div>
	</a-card>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const items = computed(() => store.getters.getWidget)

onMounted(() => {
	store.dispatch('setWidget')
})
</script>

<style lang="scss" scoped></style>

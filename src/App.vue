<template>
	<a-layout>
		<VHeader />
		<a-layout>
			<VAside />
			<a-layout-content :style="{ minHeight: '100vh' }">
				<router-view></router-view>
			</a-layout-content>
		</a-layout>
		<a-layout-footer style="text-align: center">
			Веселая ферма, Ракитова Екатерина
		</a-layout-footer>
	</a-layout>
</template>

<script setup>
import VHeader from './components/VHeader.vue'
import VAside from './components/VAside.vue'
</script>


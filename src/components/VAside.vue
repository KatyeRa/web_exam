<template>
	<a-layout-sider width="250px" :style="{ background: '#fff' }">
		<a-menu
			mode="vertical"
			v-model:selectedKeys="array"
			:style="{ lineHeight: '64px' }"
		>
			<a-menu-item key="/">
				<router-link to="/">Главная страница</router-link>
			</a-menu-item>
			<a-menu-item key="/form">
				<router-link to="/formpage">Страница с формой</router-link>
			</a-menu-item>
			<a-menu-item key="/about">
				<router-link to="/about">О нас</router-link>
			</a-menu-item>
			<a-menu-item :style="{ height: '500px' }">
				<VWidget />
			</a-menu-item>
		</a-menu>
	</a-layout-sider>
</template>

<script setup>
import VWidget from './VWidget.vue'
</script>


<template>
	<div class="formPage">
		<a-button type="primary" @click="toggleForm" class="button">
			Добавить еще
		</a-button>
		<div>
			<a-form class="form" v-if="isVisible">
				<a-form-item class="form__input">
					<a-select v-model:value="type">
						<a-select-option value="cow">cow</a-select-option>
						<a-select-option value="rabbit">rabbit</a-select-option>
						<a-select-option value="sheep">sheep</a-select-option>
					</a-select>
				</a-form-item>
				<a-input v-model:value="name" placeholder="Введите имя" />
				<a-input
					v-model:value="color"
					placeholder="Введите цвет"
					class="form__input"
				/>
				<a-input
					v-model:value="weight"
					placeholder="Введите вес"
					class="form__input"
				/>
				<a-form-item class="form__input">
					<a-select v-model:value="sex">
						<a-select-option value="Мальчик">Мальчик</a-select-option>
						<a-select-option value="Девочка">Девочка</a-select-option>
					</a-select>
				</a-form-item>

				<a-button type="primary" @click="addToDb" class="button">
					Отправить
				</a-button>
			</a-form>

			<a-row :gutter="[60, 60]" class="animals">
				<a-col :span="8" v-for="item in animals" :key="item.id">
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
							<h2>{{ item.name }}</h2>
							<p>Вес: {{ item.weight }} кг</p>
							<p>Цвет: {{ item.color }}</p>
							<p>Пол: {{ item.sex }}</p>
						</div>
					</a-card>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const animals = computed(() => store.getters.getformPageItems)
const isVisible = ref(false)

const toggleForm = () => {
	console.log(43242)
	isVisible.value = !isVisible.value
}

const name = ref('')
const type = ref('')
const weight = ref('')
const sex = ref('')
const color = ref('')

const addToDb = () => {
	axios.post('https://demo-api.vsdev.space/api/farm/baby', {
		name: name.value,
		type: type.value,
		weight: weight.value,
		sex: sex.value,
		color: color.value
	})
	store.dispatch('setfromPageItems')
}

onMounted(() => {
	store.dispatch('setfromPageItems')
})
</script>

<style lang="scss" scoped>
.form {
	margin-top: 20px;
	width: 700px;

	&__input {
		margin-top: 20px;
	}
}

.formPage {
	padding: 30px;
}

.animals {
	margin-top: 30px;
}
</style>

<template>
	<div class="skill-bar py-3">
		<div class="skill-title" v-text="item.title" />
		<span class="category" v-text="item.subtitle" />
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data: () => ({}),
}
</script>

<style lang="scss" scoped></style>

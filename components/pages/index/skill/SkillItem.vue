<template>
	<div class="skill-bar position-relative py-5">
		<div class="skill-title" v-text="item.title" />
		<span v-if="item.subtitle" class="category" v-text="item.subtitle" />
		<div v-else class="skill-prog" :style="{ width: item.percent + '%' }" />
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

<style lang="scss" scoped>
.skill-prog {
	width: 30%;
	height: 1px;
	background: #e1a34c80;
	&:after {
		content: ' ';
		width: 100%;
		height: 1px;
		position: absolute;
		background: #e1a34c14;
	}
}
</style>

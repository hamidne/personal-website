<template>
	<div class="skill-group">
		<h2 class="skill-group__title d-flex" v-text="item.title" />
		<skill-items :items="item.items" />
	</div>
</template>

<script>
import SkillItems from '~/components/pages/index/skill/SkillItems.vue'

export default {
	components: { SkillItems },
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.skill-group {
	+ .skill-group {
		margin-top: 4rem;
	}
}
.skill-group__title {
	color: #e1a34c;
	white-space: nowrap;
	&::after {
		content: ' ';
		width: 100%;
		height: 1px;
		margin: auto;
		margin-left: 1rem;
		display: inline-flex;
		background: #e1a34c;
		vertical-align: middle;
	}
}
</style>

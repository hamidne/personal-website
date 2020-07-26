<template>
	<div>
		<h2 v-text="item.title">FrontEnd</h2>
		<b-row>
			<b-col v-for="(skill, index) in item.items" :key="index" lg="3">
				<skill-item :item="skill" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import SkillItem from '~/components/pages/index/skill/SkillItem.vue'

export default {
	components: { SkillItem },
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped></style>

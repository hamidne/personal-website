<template>
	<b-row>
		<b-col v-for="(item, index) in items" :key="index" lg="3">
			<skill-item :item="item" />
		</b-col>
	</b-row>
</template>

<script>
import SkillItem from '~/components/pages/index/skill/SkillItem.vue'

export default {
	components: { SkillItem },
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped></style>

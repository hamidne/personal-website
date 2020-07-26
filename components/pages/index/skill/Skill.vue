<template>
	<div class="section-portfo skill-section-portfo">
		<section-number :number="2" />
		<b-container>
			<section-title :title="$t('pages.index.skill.title')" />
			<skill-group
				v-for="(item, index) in $t('pages.index.skill.items')"
				:key="index"
				:item="item"
			/>
		</b-container>
	</div>
</template>

<script>
import SkillGroup from '~/components/pages/index/skill/SkillGroup.vue'
import SectionTitle from '~/components/pages/index/global/SectionTitle.vue'
import SectionNumber from '~/components/pages/index/global/SectionNumber.vue'

export default {
	components: { SkillGroup, SectionTitle, SectionNumber },
}
</script>

<style lang="scss" scoped></style>

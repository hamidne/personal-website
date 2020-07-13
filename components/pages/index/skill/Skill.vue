<template>
	<div class="section-portfo skill-section-portfo">
		<section-number :number="2" />
		<b-container>
			<section-title :title="$t('pages.index.skill.title')" />
			<b-row>
				<b-col
					v-for="(item, index) in $t('pages.index.skill.items')"
					:key="index"
					lg="6"
				>
					<skill-item
						:title="item.title"
						:percent="item.percent"
						:category="item.category"
					/>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import SkillItem from '~/components/pages/index/skill/SkillItem.vue'
import SectionTitle from '~/components/pages/index/global/SectionTitle.vue'
import SectionNumber from '~/components/pages/index/global/SectionNumber.vue'

export default {
	components: { SkillItem, SectionTitle, SectionNumber },
}
</script>

<style lang="scss" scoped></style>

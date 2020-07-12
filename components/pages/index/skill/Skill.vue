<template>
	<div class="section-portfo skill-section-portfo">
		<section-number :number="2" />
		<b-container>
			<section-title title="Experties" />
			<b-row>
				<b-col v-for="(item, index) in items" :key="index" lg="6">
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
	data: () => ({
		items: [
			{ title: 'Web Designing', category: 'HTML/CSS', percent: 80 },
			{ title: 'Graphic Design.', category: 'UI/UX', percent: 75 },
			{ title: 'Web Development', category: 'WORDPRESS/PHP', percent: 75 },
			{ title: 'Application Dev.', category: 'ANDROID/IOS', percent: 50 },
		],
	}),
}
</script>

<style lang="scss" scoped></style>

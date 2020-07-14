<template>
	<div
		v-observe-visibility="visibilityChanged"
		class="section-portfo our-project-portfo"
	>
		<section-number :number="4" />
		<div class="container">
			<section-title :title="$t('pages.index.project.title')" />
			<ul class="isotop-menu-wrapper hide-pr" :class="{ 'show-pr': visiable }">
				<li
					v-for="(tab, index) in $t('pages.index.project.tabs')"
					:key="index"
					:data-filter="tab.filter"
					v-text="tab.title"
				/>
			</ul>
		</div>

		<project-items />
	</div>
</template>

<script>
import SectionTitle from '~/components/pages/index/global/SectionTitle.vue'
import ProjectItems from '~/components/pages/index/project/ProjectItems.vue'
import SectionNumber from '~/components/pages/index/global/SectionNumber.vue'

export default {
	components: { SectionTitle, SectionNumber, ProjectItems },
	data: () => ({ visiable: false }),
	methods: {
		visibilityChanged(visiable, entry) {
			this.visiable = visiable
		},
	},
}
</script>

<style lang="scss" scoped></style>

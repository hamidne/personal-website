<template>
	<div class="section-portfo our-project-portfo">
		<section-number :number="4" />
		<div class="container">
			<section-title :title="$t('pages.index.project.title')" />
			<project-items />
		</div>
	</div>
</template>

<script>
import SectionTitle from '~/components/pages/index/global/SectionTitle.vue'
import ProjectItems from '~/components/pages/index/project/ProjectItems.vue'
import SectionNumber from '~/components/pages/index/global/SectionNumber.vue'

export default {
	components: { SectionTitle, SectionNumber, ProjectItems },
}
</script>

<style lang="scss" scoped></style>

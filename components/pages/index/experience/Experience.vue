<template>
	<div class="section-portfo our-experience-portfo">
		<section-number :number="4" />
		<div class="container">
			<section-title :title="$t('pages.index.experience.title')" />
			<experience-items />
		</div>
	</div>
</template>

<script>
import SectionTitle from '~/components/pages/index/global/SectionTitle'
import ExperienceItems from '~/components/pages/index/experience/ExperienceItems'
import SectionNumber from '~/components/pages/index/global/SectionNumber'

export default {
	components: { SectionTitle, SectionNumber, ExperienceItems },
}
</script>

<style lang="scss" scoped></style>

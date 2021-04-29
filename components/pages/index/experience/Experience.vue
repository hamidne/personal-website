<template>
	<div class="section-portfo our-experience-portfo">
		<section-number :number="3" />
		<div class="container">
			<section-title :title="$t('pages.index.experience.title')" />
			<experience-items />
		</div>
	</div>
</template>

<script>
import SectionTitle from '~/components/pages/index/global/SectionTitle'
import SectionNumber from '~/components/pages/index/global/SectionNumber'
import ExperienceItems from '~/components/pages/index/experience/ExperienceItems'

export default {
	components: { SectionTitle, SectionNumber, ExperienceItems },
}
</script>

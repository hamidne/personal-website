<template>
	<div>
		<banner />
		<about />
		<skill />
		<experience />
		<testimonial />
	</div>
</template>

<script>
import About from '~/components/pages/index/about/About'
import Skill from '~/components/pages/index/skill/Skill'
import Banner from '~/components/pages/index/banner/Banner'
import Experience from '~/components/pages/index/experience/Experience'
import Testimonial from '~/components/pages/index/testimonial/Testimonial'

export default {
	components: {
		About,
		Skill,
		Banner,
		Experience,
		Testimonial,
	},
}
</script>

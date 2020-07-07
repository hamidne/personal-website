<template>
	<div>
		<banner />
		<about />
		<skill />
		<service />
		<project />
		<testimonial />
	</div>
</template>

<script>
import About from '~/components/pages/index/about/About.vue'
import Skill from '~/components/pages/index/skill/Skill.vue'
import Banner from '~/components/pages/index/banner/Banner.vue'
import Project from '~/components/pages/index/project/Project.vue'
import Service from '~/components/pages/index/service/Service.vue'
import Testimonial from '~/components/pages/index/testimonial/Testimonial.vue'

export default {
	components: {
		About,
		Skill,
		Banner,
		Project,
		Service,
		Testimonial,
	},
}
</script>

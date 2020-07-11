<template>
	<div class="section-portfo our-project-portfo">
		<section-number :number="4" />
		<div class="container">
			<h2 class="theme-title-two">Projects<span>.</span></h2>

			<ul class="isotop-menu-wrapper hide-pr">
				<li class="is-checked" data-filter="*">Design.</li>
				<li data-filter=".development">Development.</li>
				<li data-filter=".marketing">Marketing.</li>
				<li data-filter=".photoshop">Photoshop.</li>
			</ul>
		</div>
		<div class="text-content">
			<div class="container">
				<p>
					Die CI Farben von Millhaus sind schwarz . Nett aber auch herausfoernd.
					Anfangs probierten, uns abert z.
				</p>
			</div>
			<a
				href="project-full-width.html"
				class="gallery-button"
				data-aos="fade-left"
				data-aos-duration="2000"
				>View Gallery</a
			>
		</div>

		<project-gallery />
	</div>
</template>

<script>
import SectionNumber from '~/components/pages/index/global/SectionNumber.vue'
import ProjectGallery from '~/components/pages/index/project/ProjectGallery.vue'

export default {
	components: { SectionNumber, ProjectGallery },
}
</script>

<style lang="scss" scoped></style>

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
		<div class="text-content">
			<div class="container">
				<p v-text="$t('pages.index.project.description')" />
			</div>
			<a
				href="project-full-width.html"
				class="gallery-button"
				data-aos="fade-left"
				data-aos-duration="2000"
				v-text="$t('pages.index.project.gallery')"
			/>
		</div>

		<project-gallery />
	</div>
</template>

<script>
import SectionTitle from '~/components/pages/index/global/SectionTitle.vue'
import SectionNumber from '~/components/pages/index/global/SectionNumber.vue'
import ProjectGallery from '~/components/pages/index/project/ProjectGallery.vue'

export default {
	components: { SectionTitle, SectionNumber, ProjectGallery },
	data: () => ({ visiable: false }),
	methods: {
		visibilityChanged(visiable, entry) {
			this.visiable = visiable
		},
	},
}
</script>

<style lang="scss" scoped></style>

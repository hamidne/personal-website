<template>
	<div class="about-me-portfo section-portfo">
		<b-container class="p-0">
			<div class="inner-content">
				<section-title :title="$t('pages.index.about.title')" />
				<div
					v-observe-visibility="visibilityChanged"
					class="img-box hide-pr"
					:class="{ 'show-pr': visiable }"
				>
					<img
						src="https://heloshape.com/html/rogan/rogan-c/html/images/home/9.jpg"
						alt=""
					/>
				</div>

				<about-tabs />
			</div>
		</b-container>
	</div>
</template>

<script>
import AboutTabs from '~/components/pages/index/about/AboutTabs.vue'
import SectionTitle from '~/components/pages/index/global/SectionTitle.vue'

export default {
	components: { AboutTabs, SectionTitle },
	data: () => ({ visiable: false }),
	methods: {
		visibilityChanged(visiable, entry) {
			this.visiable = visiable
		},
	},
}
</script>

<style lang="scss" scoped></style>

<template>
	<div class="portfo-testimonial section-portfo">
		<section-number :number="4" />
		<div class="container clearfix">
			<section-title :title="$t('pages.index.testimonial.title')" />
			<b-row class="row">
				<b-col lg="4">
					<h2
						class="inner-title"
						v-text="$t('pages.index.testimonial.description')"
					/>
				</b-col>

				<b-col lg="8">
					<testimonial-slider />
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import SectionTitle from '~/components/pages/index/global/SectionTitle.vue'
import SectionNumber from '~/components/pages/index/global/SectionNumber.vue'
import TestimonialSlider from '~/components/pages/index/testimonial/TestimonialSlider.vue'

export default {
	components: { SectionTitle, SectionNumber, TestimonialSlider },
}
</script>

<style lang="scss" scoped></style>

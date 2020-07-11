<template>
	<div class="portfo-testimonial section-portfo">
		<section-number :number="5" />
		<div class="container clearfix">
			<h2 class="theme-title-two">Testimonials<span>.</span></h2>

			<b-row class="row">
				<b-col lg="4">
					<h2 class="inner-title">
						What’s <br />
						Our Client Say About Us.
					</h2>
				</b-col>

				<b-col lg="8">
					<testimonial-slider />
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import SectionNumber from '~/components/pages/index/global/SectionNumber.vue'
import TestimonialSlider from '~/components/pages/index/testimonial/TestimonialSlider.vue'

export default {
	components: { SectionNumber, TestimonialSlider },
}
</script>

<style lang="scss" scoped></style>

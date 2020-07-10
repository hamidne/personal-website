<template>
	<div class="portfo-testimonial section-portfo">
		<div class="section-num hide-pr"><span>0</span><span>5</span></div>
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
import TestimonialSlider from '~/components/pages/index/testimonial/TestimonialSlider.vue'

export default {
	components: { TestimonialSlider },
}
</script>

<style lang="scss" scoped></style>

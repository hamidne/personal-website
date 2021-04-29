<template>
	<div class="slider-wrapper">
		<div class="agn-testimonial-slider">
			<swiper :options="swiperOptions">
				<swiper-slide
					v-for="(item, index) in $t('pages.index.testimonial.items')"
					:key="index"
				>
					<div class="item">
						<p v-text="item.description" />
						<div class="author-info clearfix">
							<img :src="item.image" alt="" class="author-img" />
							<div class="name-info">
								<h6 class="name" v-text="item.author" />
								<span v-text="item.position" />
							</div>
						</div>
					</div>
				</swiper-slide>
				<div slot="pagination" class="swiper-pagination" />
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		swiperOptions: {
			loop: true,
			speed: 1400,
			effect: 'fade',
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.swiper-pagination',
			},
		},
	}),
}
</script>

<style lang="scss" scoped></style>

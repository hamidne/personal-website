<template>
	<div class="slider-wrapper">
		<div class="agn-testimonial-slider">
			<swiper :options="swiperOptions">
				<swiper-slide>
					<div class="item">
						<p>
							Having a home based business is a wonderful asset to your life.
							The problem still stands, when it comes timeadvertise your
							business for a cheap cost. I know you have looked for to answer
							everywhere.
						</p>
						<div class="author-info clearfix">
							<img src="images/home/2.jpg" alt="" class="author-img" />
							<div class="name-info">
								<h6 class="name">Rashed kabir</h6>
								<span>Designer</span>
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="item">
						<p>
							Having a home based business is a wonderful asset to your life.
							The problem still stands, when it comes timeadvertise your
							business for a cheap cost. I know you have looked for to answer
							everywhere.
						</p>
						<div class="author-info clearfix">
							<img src="images/home/3.jpg" alt="" class="author-img" />
							<div class="name-info">
								<h6 class="name">Zubayer hasan</h6>
								<span>Developer</span>
							</div>
						</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		swiperOptions: {
			speed: 1400,
			effect: 'fade',
			loop: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: '.swiper-pagination',
			},
		},
	}),
}
</script>

<style lang="scss" scoped></style>

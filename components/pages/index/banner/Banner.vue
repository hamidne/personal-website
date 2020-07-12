<template>
	<div id="theme-banner-three">
		<div class="container">
			<div class="main-wrapper">
				<h1 class="main-title wow fadeInUp animated" data-wow-delay="0.2s">
					<span class="cd-headline clip">
						<span>I Am Hamid Develope Quality</span>
						<vue-typed-js
							class="font-weight-semi-bold"
							:strings="strings"
							:loop="true"
							:type-speed="40"
							:back-speed="20"
							:start-delay="1000"
							content-type="html"
						>
							<span class="typing font-weight-normal text-decoration-none" />
						</vue-typed-js>
					</span>
				</h1>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		strings: ['Website<i>.</i>', 'Mobile App<i>.</i>', 'Landing Page<i>.</i>'],
	}),
}
</script>

<style lang="scss" scoped></style>

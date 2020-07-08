<template>
	<div class="about-me-portfo section-portfo">
		<b-container class="p-0">
			<div class="inner-content">
				<h2 class="theme-title-two">About me<span>.</span></h2>
				<div class="img-box hide-pr">
					<img
						src="http://heloshape.com/html/rogan/rogan-c/html/images/home/9.jpg"
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
export default {
	components: { AboutTabs },
}
</script>

<style lang="scss" scoped></style>

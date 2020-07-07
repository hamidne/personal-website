<template>
	<div class="main-page-wrapper">
		<header-layout />
		<nuxt />
		<footer-layout />
		<scroll-to-top />
	</div>
</template>

<script>
import HeaderLayout from '~/components/layouts/header/Header.vue'
import FooterLayout from '~/components/layouts/footer/Footer.vue'
import ScrollToTop from '~/components/layouts/ScrollToTop.vue'

export default {
	components: { HeaderLayout, FooterLayout, ScrollToTop },
	head() {
		return {
			bodyAttrs: {
				class: ['no-scroll-y', 'home-portfo'],
			},
		}
	},
}
</script>

<style lang="scss" scoped></style>

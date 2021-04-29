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
		const i18nSeo = this.$nuxtI18nSeo()
		return {
			htmlAttrs: {
				lang: this.$i18n.locale,
				dir: ['ar', 'fa'].includes(this.$i18n.locale) ? 'rtl' : 'ltr',
				...i18nSeo.htmlAttrs,
			},
			bodyAttrs: {
				class: ['no-scroll-y', 'home-portfo'],
			},
		}
	},
}
</script>

<style lang="scss" scoped></style>

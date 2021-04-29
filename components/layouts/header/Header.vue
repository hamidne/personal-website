<template>
	<div class="theme-main-menu theme-menu-three d-flex" :class="{ fixed }">
		<header-brand />
		<header-items />
		<header-languages />
		<header-socials />
	</div>
</template>

<script>
import HeaderBrand from '~/components/layouts/header/HeaderBrand.vue'
import HeaderItems from '~/components/layouts/header/HeaderItems.vue'
import HeaderSocials from '~/components/layouts/header/HeaderSocials.vue'
import HeaderLanguages from '~/components/layouts/header/HeaderLanguages.vue'

export default {
	components: { HeaderLanguages, HeaderBrand, HeaderItems, HeaderSocials },
	data: () => ({ fixed: false }),
	mounted() {
		document.addEventListener('scroll', this.handleScroll)
	},
	destroyed() {
		document.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			this.fixed = window.scrollY > screen.height / 10
		},
	},
}
</script>

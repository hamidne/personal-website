<template>
	<div>
		<header-layout />
		<nuxt />
		<footer-layout />
	</div>
</template>

<script>
import HeaderLayout from '~/components/layouts/header/Header.vue'
import FooterLayout from '~/components/layouts/footer/Footer.vue'

export default {
	components: { HeaderLayout, FooterLayout },
}
</script>

<style lang="scss" scoped></style>

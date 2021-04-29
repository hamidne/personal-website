<template>
	<div class="header-languages d-flex flex-fill justify-content-end align-items-center mx-3">
		<template v-for="(item, index) in languages">
			<div :key="index">
				<span v-if="index !== 0">/</span>
				<nuxt-link
					:to="switchLocalePath(item.code)"
					:class="{active: $i18n.locale === item.code}"
					class="lang"
				>
					{{ item.title }}
				</nuxt-link>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	computed: {
		languages() {
			return this.$i18n.locales
		},
	},
}
</script>

<style lang="scss" scoped>
.lang {
	color: #fff8;
	margin: 0 .5rem;
	&.active {
		color: #fff;
		font-weight: 900;
	}
}
</style>

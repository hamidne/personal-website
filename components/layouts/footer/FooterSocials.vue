<template>
	<ul class="social-icon">
		<li v-for="(item, index) in $t('layouts.footer.socials')" :key="index">
			<a
				:href="item.href"
				class="d-flex align-items-center justify-content-center"
			>
				<i :class="item.icon" aria-hidden="true" />
			</a>
		</li>
	</ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

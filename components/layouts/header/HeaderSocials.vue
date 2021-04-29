<template>
	<div class="header-right-widget d-flex align-items-center">
		<ul class="social-icon">
			<li v-for="(item, index) in $t('layouts.header.socials')" :key="index">
				<a
					:href="item.href"
					class="d-flex align-items-center justify-content-center"
				>
					<i :class="item.icon" />
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

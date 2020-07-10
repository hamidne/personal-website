<template>
	<div class="header-right-widget">
		<ul class="social-icon">
			<li v-for="(item, index) in items" :key="index">
				<a href="#" class="d-flex align-items-center justify-content-center">
					<i :class="item.icon" />
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data: () => ({
		items: [
			{ icon: 'fab fa-facebook-f', links: '' },
			{ icon: 'fab fa-twitter', links: '' },
			{ icon: 'fab fa-linkedin-in', links: '' },
		],
	}),
}
</script>

<style lang="scss" scoped></style>

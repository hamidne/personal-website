<template>
	<div class="theme-main-menu theme-menu-three" :class="{ fixed }">
		<header-brand />

		<nav id="mega-menu-holder" class="navbar navbar-expand-lg">
			<div class="ml-auto nav-container">
				<button
					class="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i class="flaticon-setup"></i>
				</button>
				<div id="navbarSupportedContent" class="collapse navbar-collapse">
					<ul class="navbar-nav">
						<li class="nav-item dropdown">
							<a
								href="index.html"
								class="nav-link dropdown-toggle"
								data-toggle="dropdown"
								>Home.</a
							>
						</li>
						<li class="nav-item dropdown position-relative">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								data-toggle="dropdown"
								>Pages.</a
							>
						</li>
						<li class="nav-item dropdown position-relative">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								data-toggle="dropdown"
								>Features.</a
							>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								data-toggle="dropdown"
								>elements.</a
							>
						</li>
						<li class="nav-item dropdown position-relative">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								data-toggle="dropdown"
								>News.</a
							>
							<ul class="dropdown-menu">
								<li>
									<a href="blog-default.html" class="dropdown-item"
										>Blog default</a
									>
								</li>
								<li>
									<a href="blog-filter.html" class="dropdown-item"
										>Blog filter</a
									>
								</li>
								<li>
									<a href="blog-full-grid.html" class="dropdown-item"
										>Blog Full Grid</a
									>
								</li>
								<li>
									<a href="blog-masonry.html" class="dropdown-item"
										>blog masonry</a
									>
								</li>
								<li>
									<a href="blog-details.html" class="dropdown-item"
										>blog details</a
									>
								</li>
								<li>
									<a href="blog-details-full-grid.html" class="dropdown-item"
										>blog details full grid</a
									>
								</li>
							</ul>
							<!-- /.dropdown-menu -->
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<header-socials />
	</div>
</template>

<script>
import HeaderBrand from '~/components/layouts/header/HeaderBrand.vue'
import HeaderSocials from '~/components/layouts/header/HeaderSocials.vue'

export default {
	components: { HeaderBrand, HeaderSocials },
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

<style lang="scss" scoped></style>

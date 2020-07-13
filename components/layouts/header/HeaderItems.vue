<template>
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
				<i class="flaticon-setup" />
			</button>
			<div id="navbarSupportedContent" class="collapse navbar-collapse">
				<ul class="navbar-nav">
					<li
						v-for="(item, index) in $t('layouts.header.items')"
						:key="index"
						class="nav-item dropdown"
					>
						<a
							v-scroll-to="{
								el: item.target,
								duration: 1000,
								offset: -50,
							}"
							class="nav-link dropdown-toggle"
							v-text="item.title"
						/>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>

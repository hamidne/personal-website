<template>
	<footer class="portfo-footer hide-pr">
		<img src="images/shape/shape-7.svg" alt="" class="round-shape" />
		<div class="container">
			<div class="theme-title-one text-center hide-pr">
				<div class="upper-title">Contact Us</div>
				<h2 class="main-title">
					Send me a message, I will be touch <br />with you shortly.
				</h2>
			</div>

			<footer-form />

			<div class="copyright-text">
				<ul class="social-icon">
					<li>
						<a href="#"><i class="fab fa-facebook-f" aria-hidden="true" /></a>
					</li>
					<li>
						<a href="#"><i class="fab fa-dribbble" aria-hidden="true" /></a>
					</li>
					<li>
						<a href="#"><i class="fab fa-linkedin-in" aria-hidden="true" /></a>
					</li>
					<li>
						<a href="#"><i class="fab fa-github-alt" aria-hidden="true" /></a>
					</li>
				</ul>
				<p>&copy; Built with Love By CreativeGigs.</p>
			</div>
		</div>
	</footer>
</template>

<script>
import FooterForm from '~/components/layouts/footer/FooterForm.vue'

export default {
	components: { FooterForm },
}
</script>

<style lang="scss" scoped></style>

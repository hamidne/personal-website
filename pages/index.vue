<template>
	<div class="main-page-wrapper">
		<pre-loader v-show="false" />

		<banner />
		<about />
		<skill />
		<service />
		<project />
		<testimonial />

		<!--
			=====================================================
				Footer
			=====================================================
			-->
		<footer class="portfo-footer hide-pr">
			<img src="images/shape/shape-7.svg" alt="" class="round-shape" />
			<div class="container">
				<div class="theme-title-one text-center hide-pr">
					<div class="upper-title">Contact Us</div>
					<h2 class="main-title">
						Send me a message, I will be touch <br />with you shortly.
					</h2>
				</div>
				<!-- /.theme-title-one -->

				<form action="#">
					<div class="row">
						<div class="col-lg-6">
							<div class="input-group">
								<input type="text" required />
								<label>Your Name</label>
							</div>
							<!-- /.input-group -->
						</div>
						<!-- /.col- -->
						<div class="col-lg-6">
							<div class="input-group">
								<input type="email" required />
								<label>Your Email Address</label>
							</div>
							<!-- /.input-group -->
						</div>
						<!-- /.col- -->
						<div class="col-12">
							<div class="input-group">
								<input type="text" required />
								<label>Your Subject</label>
							</div>
							<!-- /.input-group -->
						</div>
						<!-- /.col- -->
						<div class="col-12">
							<div class="input-group">
								<textarea required></textarea>
								<label>Your Message</label>
							</div>
							<!-- /.input-group -->
						</div>
						<!-- /.col- -->
						<div class="col-12">
							<div class="clearfix">
								<button class="send-button">Send Message</button>
							</div>
						</div>
					</div>
					<!-- /.row -->
				</form>

				<div class="copyright-text">
					<ul class="social-icon">
						<li>
							<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href="#"
								><i class="fa fa-github-alt" aria-hidden="true"></i
							></a>
						</li>
					</ul>
					<p>&copy; Built with Love By CreativeGigs.</p>
				</div>
				<!-- /.copyright-text -->
			</div>
		</footer>
		<!-- /.portfo-footer -->

		<!-- Scroll Top Button -->
		<button class="scroll-top tran3s">
			<i class="fa fa-angle-up" aria-hidden="true"></i>
		</button>

		<!-- Optional JavaScript _____________________________  -->

		<!-- jQuery first, then Popper.js, then Bootstrap JS -->
		<!-- jQuery -->
		<script src="vendor/jquery.2.2.3.min.js"></script>
		<!-- Popper js -->
		<script src="vendor/popper.js/popper.min.js"></script>
		<!-- Bootstrap JS -->
		<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
		<!-- Partical js -->
		<script src="vendor/particles.min.js"></script>
		<!-- menu  -->
		<script src="vendor/mega-menu/assets/js/custom.js"></script>
		<!-- AOS js -->
		<script src="vendor/aos-next/dist/aos.js"></script>
		<!-- WOW js -->
		<script src="vendor/WOW-master/dist/wow.min.js"></script>
		<!-- owl.carousel -->
		<script src="vendor/owl-carousel/owl.carousel.min.js"></script>
		<!-- js count to -->
		<script src="vendor/jquery.appear.js"></script>
		<script src="vendor/jquery.countTo.js"></script>
		<!-- Fancybox -->
		<script src="vendor/fancybox/dist/jquery.fancybox.min.js"></script>
		<!-- Animated Headline -->
		<script src="vendor/animated-headline-master/main.js"></script>
		<!-- isotop -->
		<script src="vendor/isotope.pkgd.min.js"></script>

		<!-- Language js -->
		<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

		<!-- Theme js -->
		<script src="js/lang.js"></script>
		<script src="js/theme.js"></script>
	</div>
</template>

<script>
import PreLoader from '~/components/layouts/PreLoader.vue'
import About from '~/components/pages/index/about/About.vue'
import Skill from '~/components/pages/index/skill/Skill.vue'
import Banner from '~/components/pages/index/banner/Banner.vue'
import Project from '~/components/pages/index/project/Project.vue'
import Service from '~/components/pages/index/service/Service.vue'
import Testimonial from '~/components/pages/index/testimonial/Testimonial.vue'

export default {
	components: {
		About,
		Skill,
		Banner,
		Project,
		Service,
		PreLoader,
		Testimonial,
	},
	head() {
		return {
			bodyAttrs: {
				class: ['no-scroll-y', 'home-portfo'],
			},
		}
	},
}
</script>

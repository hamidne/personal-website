<template>
	<div class="main-page-wrapper">
		<pre-loader v-show="false" />

		<banner />
		<about />
		<skill />
		<service />
		<project />
		<testimonial />

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

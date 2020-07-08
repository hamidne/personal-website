<template>
	<div class="section-portfo skill-section-portfo">
		<div class="section-num hide-pr"><span>0</span><span>2</span></div>
		<b-container>
			<h2 class="theme-title-two">Experties<span>.</span></h2>

			<b-row>
				<b-col lg="6">
					<skill-item title="Web Designing" category="HTML/CSS" :percent="80" />
				</b-col>
				<div class="col-lg-6">
					<div class="skill-bar">
						<div class="progress">
							<div class="progress-bar" data-percent="63">
								<span class="percent-text"><span class="count"></span>%</span>
							</div>
						</div>
						<div class="skill-title">Graphic Design.</div>
						<span class="category">UI/UX</span>
					</div>
					<!-- /.skill-bar -->
				</div>
				<div class="col-lg-6">
					<div class="skill-bar">
						<div class="progress">
							<div class="progress-bar" data-percent="75">
								<span class="percent-text"><span class="count"></span>%</span>
							</div>
						</div>
						<div class="skill-title">Web Development</div>
						<span class="category">WORDPRESS/PHP</span>
					</div>
					<!-- /.skill-bar -->
				</div>
				<div class="col-lg-6">
					<div class="skill-bar">
						<div class="progress">
							<div class="progress-bar" data-percent="85">
								<span class="percent-text"><span class="count"></span>%</span>
							</div>
						</div>
						<div class="skill-title">Application Dev.</div>
						<span class="category">ANDROID/ IOS</span>
					</div>
					<!-- /.skill-bar -->
				</div>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import SkillItem from '~/components/pages/index/skill/SkillItem.vue'
export default {
	components: { SkillItem },
}
</script>

<style lang="scss" scoped></style>

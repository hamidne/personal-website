<template>
	<div class="section-portfo our-service-portfo">
		<div class="section-num hide-pr"><span>0</span><span>3</span></div>
		<div class="container">
			<div class="title-wrapper">
				<h2 class="theme-title-two">Services<span>.</span></h2>
				<p>
					Lorem ipsum dolor sit amet, ut mea inciderint ullamcorper. Mei putant
					deleniti
				</p>
			</div>

			<b-row>
				<b-col
					v-for="(item, index) in items"
					:key="index"
					lg="6"
					data-aos="flip-right"
				>
					<service-item
						:icon="item.icon"
						:title="item.title"
						:description="item.description"
					/>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import ServiceItem from '~/components/pages/index/service/ServiceItem.vue'
export default {
	components: { ServiceItem },
	data: () => ({
		items: [
			{
				title: 'Front-End & Responsive Coding.',
				description:
					'Extreme attention to detail is the essence of et Boo’s unique design concepts. In mals alienum scripserit sea, in alia aliquid nec',
				icon: '',
			},
			{
				title: 'User Experience & Interface Design.',
				description:
					'Extreme attention to detail is the essence of et Boo’s unique design concepts. In mals alienum scripserit sea, in alia aliquid nec',
				icon: '',
			},
			{
				title: 'Social Media & Online Marketing.',
				description:
					'Extreme attention to detail is the essence of et Boo’s unique design concepts. In mals alienum scripserit sea, in alia aliquid nec',
				icon: '',
			},
			{
				title: 'Mobile Application & Game Development.',
				description:
					'Extreme attention to detail is the essence of et Boo’s unique design concepts. In mals alienum scripserit sea, in alia aliquid nec',
				icon: '',
			},
		],
	}),
}
</script>

<style lang="scss" scoped></style>

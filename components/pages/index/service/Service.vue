<template>
	<div class="section-portfo our-service-portfo">
		<section-number :number="3" />
		<div class="container">
			<div class="title-wrapper">
				<section-title :title="$t('pages.index.service.title')" />
				<p v-text="$t('pages.index.service.description')" />
			</div>

			<b-row>
				<b-col
					v-for="(item, index) in $t('pages.index.service.items')"
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
import SectionTitle from '~/components/pages/index/global/SectionTitle.vue'
import SectionNumber from '~/components/pages/index/global/SectionNumber.vue'

export default {
	components: { ServiceItem, SectionTitle, SectionNumber },
}
</script>

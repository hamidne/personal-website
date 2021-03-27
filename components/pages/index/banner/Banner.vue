<template>
	<div id="theme-banner-three">
		<div class="container">
			<div class="main-wrapper">
				<h1 class="main-title wow fadeInUp animated" data-wow-delay="0.2s">
					<span class="cd-headline clip">
						<span v-text="$t('pages.index.banner.title')" />
						<vue-typed-js
							class="font-weight-semi-bold"
							:strings="$t('pages.index.banner.strings')"
							:loop="true"
							:type-speed="40"
							:back-speed="20"
							:start-delay="1000"
							content-type="html"
						>
							<span class="typing font-weight-bolder text-decoration-none" />
						</vue-typed-js>
					</span>
				</h1>
			</div>
		</div>
	</div>
</template>

<template>
	<div class="exempt-button-group">
		<d2l-stcl-button
			class="d2l-button"
			v-if="showLoadMore"
			:aria-label="$t('ariaLoadMore')"
			:disabled="isLoading"
			@click.native="loadMore">
			{{ $t('btnLoadMore') }}
		</d2l-stcl-button>

		<d2l-stcl-button primary
			class="d2l-button"
			v-if="showExempt"
			:aria-label="$t('ariaExempt')"
			@click.native="setExempt">
			{{ $t('btnExempt') }}
		</d2l-stcl-button>

		<d2l-stcl-button
			class="d2l-button"
			v-if="showExempt"
			:aria-label="$t('ariaUnexempt')"
			@click.native="setUnexempt">
			{{ $t('btnUnexempt') }}
		</d2l-stcl-button>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import D2lButton from 'src/components/D2lButton.vue'

export default {
	name: 'ExemptButtonGroup',

	components: {
		D2lButton
	},
	methods: mapActions(['setExempt', 'setUnexempt', 'loadMore']),
	props: {
		showLoadMore: {
			type: Boolean
		},
		showExempt: {
			type: Boolean
		},
		showUnexempt: {
			type: Boolean
		},
		isLoading: {
			type: Boolean
		}
	}
}
</script>

<style scoped>
.exempt-button-group {
	display: inline-block;
}
</style>

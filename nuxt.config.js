import css from './configs/css'
import i18n from './configs/i18n'
import head from './configs/head'
import build from './configs/build'
import modules from './configs/modules'
import plugins from './configs/plugins'
import buildModules from './configs/buildModules'

export default {
	mode: 'spa',
	target: 'static',

	css,
	i18n,
	head,
	build,
	modules,
	plugins,
	buildModules,
}

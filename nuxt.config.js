import css from './config/css'
import i18n from './config/i18n'
import head from './config/head'
import build from './config/build'
import modules from './config/modules'
import plugins from './config/plugins'
import buildModules from './config/buildModules'

export default {
	ssr: true,
	target: 'static',

	css,
	i18n,
	head,
	build,
	modules,
	plugins,
	buildModules,
}

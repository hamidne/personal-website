import css from './configs/css'
import head from './configs/head'
import build from './configs/build'
import modules from './configs/modules'
import plugins from './configs/plugins'
import buildModules from './configs/buildModules'

export default {
	mode: 'universal',
	target: 'static',

	css,
	head,
	build,
	modules,
	plugins,
	buildModules,
}

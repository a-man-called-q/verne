import preserveDirectives from "rollup-plugin-preserve-directives";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	entries: ["src/index"],
	declaration: true,
	clean: true,
	rollup: {
		emitCJS: true,
		output: {
			preserveModules: true,
		},
	},
	hooks: {
		"rollup:options": (_, options) => {
			options.plugins = [...(options.plugins || []), preserveDirectives()];
		},
	},
});

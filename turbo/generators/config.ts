import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator("lib", {
		description: "Create a new library in the monorepo",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name of the library? (e.g. ui, utils, config-ts)",
				validate: (input: string) => {
					if (!input) {
						return "library name is required";
					}
					if (input.includes(" ")) {
						return "library name cannot include spaces";
					}
					if (input.includes("_")) {
						return "library name cannot include underscores";
					}
					return true;
				},
			},
			{
				type: "list",
				name: "type",
				message: "What type of library is this?",
				choices: [
					{ name: "Buildable (uses unbuild)", value: "buildable" },
					{ name: "Config/Static (no build step)", value: "config" },
				],
			},
		],
		actions: (data) => {
			const actions: PlopTypes.ActionType[] = [];
			const scope = "@verne";
			const pkgName = `${scope}/${data?.name}`;
			const isBuildable = data?.type === "buildable";

			// Common files
			actions.push({
				type: "add",
				path: "libs/{{name}}/package.json",
				templateFile: "templates/package.json.hbs",
				data: { scope, pkgName, isBuildable },
			});

			if (isBuildable) {
				actions.push({
					type: "add",
					path: "libs/{{name}}/tsconfig.json",
					templateFile: "templates/tsconfig.json.hbs",
					data: { isBuildable },
				});

				actions.push({
					type: "add",
					path: "libs/{{name}}/src/index.ts",
					templateFile: "templates/src/index.ts.hbs",
				});
				actions.push({
					type: "add",
					path: "libs/{{name}}/build.config.ts",
					templateFile: "templates/build.config.ts.hbs",
				});
			}
			// Config packages don't get an index.ts as requested

			return actions;
		},
	});
}

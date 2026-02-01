import type { PlopTypes } from "@turbo/gen";

export function appGenerator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator("app", {
		description: "Create a new app in the monorepo",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is the name of the app?",
				validate: (input: string) => {
					if (!input) {
						return "app name is required";
					}
					if (input.includes(" ")) {
						return "app name cannot include spaces";
					}
					return true;
				},
			},
			{
				type: "input",
				name: "port",
				message: "What port should the app run on?",
				default: "3000",
				validate: (input: string) => {
					if (!input) {
						return "port is required";
					}
					if (Number.isNaN(Number(input))) {
						return "port must be a number";
					}
					return true;
				},
			},
			{
				type: "confirm",
				name: "includeAuth",
				message: "Include authentication and dashboard routes?",
				default: true,
			},
		],
		actions: (data) => {
			const actions: any[] = [
				{
					type: "add",
					path: "apps/{{name}}/package.json",
					templateFile: "templates/app/package.json.hbs",
				},
				{
					type: "add",
					path: "apps/{{name}}/vite.config.ts",
					templateFile: "templates/app/vite.config.ts.hbs",
				},
				{
					type: "add",
					path: "apps/{{name}}/index.html",
					templateFile: "templates/app/index.html.hbs",
				},
				{
					type: "add",
					path: "apps/{{name}}/tsconfig.json",
					templateFile: "templates/app/tsconfig.json.hbs",
				},
				{
					type: "add",
					path: "apps/{{name}}/tsconfig.app.json",
					templateFile: "templates/app/tsconfig.app.json.hbs",
				},
				{
					type: "add",
					path: "apps/{{name}}/tsconfig.node.json",
					templateFile: "templates/app/tsconfig.node.json.hbs",
				},
				{
					type: "add",
					path: "apps/{{name}}/src/main.tsx",
					templateFile: "templates/app/src/main.tsx.hbs",
				},
				{
					type: "add",
					path: "apps/{{name}}/src/assets/global.css",
					templateFile: "templates/app/src/assets/global.css.hbs",
				},
				{
					type: "add",
					path: "apps/{{name}}/src/routes/__root.tsx",
					templateFile: "templates/app/src/routes/__root.tsx.hbs",
				},
			];

			if (data?.includeAuth) {
				actions.push(
					{
						type: "add",
						path: "apps/{{name}}/src/components/global-atmostphere.tsx",
						templateFile:
							"templates/app/src/components/global-atmostphere.tsx.hbs",
					},
					{
						type: "add",
						path: "apps/{{name}}/src/routes/_auth.tsx",
						templateFile: "templates/app/src/routes/_auth.tsx.hbs",
					},
					{
						type: "add",
						path: "apps/{{name}}/src/routes/_auth/login.tsx",
						templateFile: "templates/app/src/routes/_auth/login.tsx.hbs",
					},
					{
						type: "add",
						path: "apps/{{name}}/src/routes/_auth/register.tsx",
						templateFile: "templates/app/src/routes/_auth/register.tsx.hbs",
					},
					{
						type: "add",
						path: "apps/{{name}}/src/routes/_guest.tsx",
						templateFile: "templates/app/src/routes/_guest.tsx.hbs",
					},
					{
						type: "add",
						path: "apps/{{name}}/src/routes/_guest/index.tsx",
						templateFile: "templates/app/src/routes/_guest/index.tsx.hbs",
					},
					{
						type: "add",
						path: "apps/{{name}}/src/routes/_protected.tsx",
						templateFile: "templates/app/src/routes/_protected.tsx.hbs",
					},
					{
						type: "add",
						path: "apps/{{name}}/src/routes/_protected/dashboard.tsx",
						templateFile:
							"templates/app/src/routes/_protected/dashboard.tsx.hbs",
					},
				);
			} else {
				actions.push({
					type: "add",
					path: "apps/{{name}}/src/routes/index.tsx",
					templateFile: "templates/app/src/routes/index.tsx.hbs",
				});
			}

			return actions;
		},
	});
}

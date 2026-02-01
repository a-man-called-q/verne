import type { PlopTypes } from "@turbo/gen";
import { appGenerator } from "./generators/app";
import { libGenerator } from "./generators/lib";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	libGenerator(plop);
	appGenerator(plop);
}

// import { resolve } from "path";
import * as path from "path";

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/lib/index.tsx"),
			name: "index",
			// 적절한 확장자가 추가됩니다.
			fileName: "index",
		},
		rollupOptions: {
			// 라이브러리에 포함하지 않을 디펜던시를 명시해주세요
			external: ["preact"],
			output: {
				// 라이브러리 외부에 존재하는 디펜던시를 위해
				// UMD(Universal Module Definition) 번들링 시 사용될 전역 변수를 명시할 수도 있습니다.
				globals: {
					preact: "Preact",
				},
			},
		},
	},
});

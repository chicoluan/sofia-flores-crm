import localFont from "next/font/local";
export const fontKefir = localFont({
	src: [
		{
			path: "../../public/fonts/Kefir/Kefir-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/Kefir/Kefir-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Kefir/Kefir-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Kefir/Kefir-DemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Kefir/Kefir-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/Kefir/Kefir-ExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/fonts/Kefir/Kefir-Black.woff2",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-kefir",
});

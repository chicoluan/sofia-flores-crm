import localFont from 'next/font/local'

export const fontKefir = localFont({
	src: [
		{
			path: '../public/fonts/Kefir/Kefir-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/Kefir/Kefir-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Kefir/Kefir-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/Kefir/Kefir-DemiBold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/fonts/Kefir/Kefir-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/fonts/Kefir/Kefir-ExtraBold.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../public/fonts/Kefir/Kefir-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
	variable: '--font-kefir',
})

export const fontEstiana = localFont({
	src: [
		{
			path: '../public/fonts/AV Estiana/AVEstiana-Light-BF67761220ce8a3.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/fonts/AV Estiana/AVEstiana-LightOblique-BF67761220c8ea4.otf',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../public/fonts/AV Estiana/AVEstiana-Regular-BF67761220bee90.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/AV Estiana/AVEstiana-Oblique-BF67761220b3654.otf',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../public/fonts/AV Estiana/AVEstiana-Medium-BF677612209558b.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../public/fonts/AV Estiana/AVEstiana-MediumOblique-BF6776122082e6d.otf',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../public/fonts/AV Estiana/AVEstiana-Bold-BF677612208ac8d.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../public/fonts/AV Estiana/AVEstiana-BoldOblique-BF677612200ac99.otf',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../public/fonts/AV Estiana/AVEstiana-Black-BF6776121fde086.otf',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../public/fonts/AV Estiana/AVEstiana-BlackOblique-BF6776121fc34c0.otf',
			weight: '900',
			style: 'italic',
		},
	],
	variable: '--font-estiana',
})

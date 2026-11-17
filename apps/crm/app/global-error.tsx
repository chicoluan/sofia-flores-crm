'use client'

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	console.error(error)
	return (
		<html lang='pt-BR'>
			<body>
				<h2>Something went wrong!</h2>
				<button type='button' onClick={() => reset()}>
					Tentar Novamente
				</button>
			</body>
		</html>
	)
}

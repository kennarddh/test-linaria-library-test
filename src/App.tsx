import { FC } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Container from '@kennarddh/test-linaria-library'
import '@kennarddh/test-linaria-library/build/style.css'

const App: FC = () => {
	return <Container color='red'>test</Container>
}

export default App

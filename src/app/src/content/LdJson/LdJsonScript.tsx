import type { FunctionComponent } from 'react'
import type { Thing, WithContext } from 'schema-dts'

interface Props<T extends Thing> {
	data: WithContext<T>
}
const LdJsonScript: FunctionComponent<Props<Thing>> = ({ data }) => {
	return <script type="application/ld+json">{JSON.stringify(data)}</script>
}

export default LdJsonScript

import { trpc } from '../utils/trpc'

export default function Home () {
  const hello = trpc.getName.useQuery({ text: 'x' })
  // const hello = trpc.hello.useQuery({ text: "xx" });

  if (!hello.data) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>

    </div>
  )
}

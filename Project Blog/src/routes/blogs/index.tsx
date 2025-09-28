import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="mt-15">Here to document my tech journey and knowledge!</div>
}

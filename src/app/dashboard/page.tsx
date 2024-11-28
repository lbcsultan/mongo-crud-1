import { auth } from '@/auth'
import React from 'react'

export default async function DashboardPage() {
  const session = await auth()
  // console.log(session)

  if (!session) return <div className="text-2xl">Not authenticated...</div>

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard: {session?.user?.name}</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'

export default function ComingSoon() {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center mt-12 p-8 text-center space-y-4">
        <h1 className="text-3xl font-bold">Coming Soon</h1>
        <p className="text-lg text-gray-700">
            We're working hard behind the scenes to bring you something amazing! Our new website is on the way, and we can't wait to show you what we've been building.
        </p>
        <p className="text-lg text-gray-700">
            Stay tuned — exciting things are just around the corner.
        </p>
        <p className="text-lg text-gray-700">
            In the meantime, feel free to <Link href="/list" className="font-bold hover:text-blue-800">browse our available products</Link> and start shopping today!
        </p>
    </div>
  )
}


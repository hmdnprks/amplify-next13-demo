import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold">Hello World</h1>
        <p className="text-2xl mt-4">Welcome to my Next.js + TailwindCSS template</p>
        <p className="text-2xl mt-4">This website deployed via AWS Amplify</p>
      </div>
    </main>
  )
}

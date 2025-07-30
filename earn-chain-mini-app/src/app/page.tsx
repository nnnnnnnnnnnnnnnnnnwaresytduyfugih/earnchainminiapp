import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="space-y-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800">
          Welcome to EarnChain Mini App
        </h1>
        <p className="text-lg text-center text-gray-600">
          Your gateway to earning rewards by completing exciting missions.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/missions">
            <p className="px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Go to Missions
            </p>
          </Link>
          <Link href="/rewards">
            <p className="px-8 py-3 text-base font-medium text-blue-600 bg-transparent border border-blue-600 rounded-md hover:bg-blue-50">
              View Rewards
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}

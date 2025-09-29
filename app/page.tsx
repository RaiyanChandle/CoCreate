import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to CoCreate</h1>
      <p className="mb-8 text-lg text-gray-600">A collaborative platform. Please proceed to continue.</p>
      <Link href="/signin">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Proceed</button>
      </Link>
    </div>
  );
}

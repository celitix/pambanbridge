import Link from "next/link";


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl mt-4 text-gray-600">Page Not Found</h2>
      <p className="mt-2 text-gray-500">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-400 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

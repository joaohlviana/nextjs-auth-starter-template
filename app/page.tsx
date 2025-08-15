export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Welcome to Next.js + Clerk
        </h1>
        
        <p className="text-gray-600 mb-8">
          This is a basic working page to test the setup.
        </p>
        
        <div className="space-y-4">
          <a
            href="/sign-in"
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign In
          </a>
          <a
            href="/sign-up"
            className="block w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Sign Up
          </a>
          <a
            href="/dashboard"
            className="block w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
          >
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
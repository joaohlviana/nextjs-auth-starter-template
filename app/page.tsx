import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Clerk + Next.js
          </h1>
          
          {user ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <img 
                  src={user.imageUrl} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <p className="text-gray-600">
                Hello, {user.firstName || user.emailAddresses[0]?.emailAddress}!
              </p>
              <div className="space-y-2">
                <a
                  href="/dashboard"
                  className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Go to Dashboard
                </a>
                <a
                  href="/api/auth/signout"
                  className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Sign Out
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">
                Please sign in to continue
              </p>
              <div className="space-y-2">
                <a
                  href="/sign-in"
                  className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="/sign-up"
                  className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
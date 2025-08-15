import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <UserButton />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Welcome!
              </h3>
              <p className="text-blue-700">
                You are successfully authenticated with Clerk.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                Protected Route
              </h3>
              <p className="text-green-700">
                This page is only accessible to authenticated users.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                User Management
              </h3>
              <p className="text-purple-700">
                Manage your profile using the user button above.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
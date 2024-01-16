'use client';

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  UserButton,
  useSession,
} from '@clerk/nextjs';

export default function RootNavbar() {
  const { session } = useSession();
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 border-b">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CodingNav</a>
      </div>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div> */}

        <ClerkLoading>
          <span className="loading loading-ball loading-xs"></span>
        </ClerkLoading>
        <ClerkLoaded>
          {session ? (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="btn btn-neutral">Sign In</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="btn">Sign Up</button>
              </SignUpButton>
            </>
          )}
        </ClerkLoaded>
      </div>
    </div>
  );
}

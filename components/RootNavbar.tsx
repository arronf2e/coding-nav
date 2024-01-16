'use client';

import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  UserButton,
  useSession,
} from '@clerk/nextjs';
import Link from 'next/link';

const Menus = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Communication',
    href: '/communication',
  },
  {
    title: 'ChatGPT',
    href: '/chat',
  },
];

export default function RootNavbar() {
  const { session } = useSession();
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Menus.map((menu) => (
              <li key={menu.title}>
                <Link href={menu.href}>{menu.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CodingNav</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Menus.map((menu) => (
            <li key={menu.title}>
              <Link href={menu.href}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
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

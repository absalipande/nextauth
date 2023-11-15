'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { status } = useSession();

  return (
    <div className='flex justify-between items-center shadow-md px-4 py-2'>
      <Link href={'/'}>NextAuth</Link>
      {status === 'authenticated' ? (
        <button
          onClick={() => signOut()}
          className='flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-red-500 hover:bg-red-800 rounded-md'
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn('google')}
          className='flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-green hover:bg-dark-green rounded-md'
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;

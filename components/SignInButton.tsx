'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

const SigninButton = () => {
  return (
    <button onClick={() => signIn('google')} className='flex items-center gap-4 shadow-xl rounded-lg pl-3'>
      <Image src='/google-logo.png' height={30} width={30} alt={''} />
      <span className='bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-3'>Sign in with Google</span>
    </button>
  );
};

export default SigninButton;

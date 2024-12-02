import dynamic from 'next/dynamic';
import React, { Suspense } from "react";

export const Register = dynamic(() => import('./RegisterForm'), { 
    ssr: false // Tắt server-side rendering
});

 const LoginFormWrapper: React.FC = () => {
    return (
      <Suspense fallback={<div>Đang tải...</div>}>
        <Register />
      </Suspense>
    );
  };

  export default Register
import dynamic from 'next/dynamic';
import React, { Suspense } from "react";

export const LoginForm = dynamic(() => import('./LoginFormComponent'), { 
    ssr: false // Tắt server-side rendering
});

 const LoginFormWrapper: React.FC = () => {
    return (
      <Suspense fallback={<div>Đang tải...</div>}>
        <LoginForm />
      </Suspense>
    );
  };

  export default LoginForm
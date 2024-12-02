import dynamic from 'next/dynamic';
import React, { Suspense } from "react";

export const RegisterSeller = dynamic(() => import('./RegisSellerForm'), { 
    ssr: false // Tắt server-side rendering
});

 const LoginFormWrapper: React.FC = () => {
    return (
      <Suspense fallback={<div>Đang tải...</div>}>
        <RegisterSeller />
      </Suspense>
    );
  };

  export default RegisterSeller
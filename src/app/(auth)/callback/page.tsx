'use client';

import { useEffect } from 'react';

// Spring에서 리다이렉트되어 토큰/코드 등을 처리하는 페이지(초안)
export default function AuthCallbackPage() {
  useEffect(() => {
    // TODO: 쿼리스트링의 code/token을 백엔드로 교환 요청
    // 예: /api/proxy/auth/callback?code=...
    // 완료 후 대시보드 등으로 이동
  }, []);

  return (
    <section>
      <h2>인증 처리 중...</h2>
      <p>Spring 인증 콜백 처리 페이지 (초안)</p>
    </section>
  );
}


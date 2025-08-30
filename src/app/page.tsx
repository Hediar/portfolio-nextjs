import Link from "next/link";
import type { Metadata } from "next";
import { Spotlight } from "../components/ui/spotlight";

export const metadata: Metadata = {
  title: "포트폴리오 | 메인",
  description: "개발자 포트폴리오 소개와 대표 작업",
};

export default function Home() {
  return (
    <>
      <Spotlight />
      <section className="py-10 md:py-16">
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            안녕하세요, <span className="text-primary">개발자</span> 포트폴리오입니다.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            포트폴리오 작업중
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
            >
              프로젝트 보기
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              연락하기
            </Link>
            <Link href="/blog" className="text-sm underline underline-offset-4">
              최근 글 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-5">
          <h3 className="font-semibold">프론트엔드</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Next.js, React, Tailwind를 활용한 사용자 중심 UI 개발
          </p>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="font-semibold">백엔드(계획)</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Spring 기반 인증/세션, Redis 캐시를 통한 성능 최적화
          </p>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="font-semibold">협업/품질</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            형상관리, 코드리뷰, 테스트 자동화 등 제품 품질 개선
          </p>
        </div>
      </section>
    </>
  );
}

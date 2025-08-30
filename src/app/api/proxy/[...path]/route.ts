import { NextResponse } from 'next/server';

// 서버 런타임에서 동작하도록 명시 (Node.js)
export const dynamic = 'force-dynamic';

export async function GET(_: Request, { params }: { params: { path: string[] } }) {
  return forward('GET', params);
}

export async function POST(req: Request, { params }: { params: { path: string[] } }) {
  return forward('POST', params, req);
}

export async function PUT(req: Request, { params }: { params: { path: string[] } }) {
  return forward('PUT', params, req);
}

export async function PATCH(req: Request, { params }: { params: { path: string[] } }) {
  return forward('PATCH', params, req);
}

export async function DELETE(req: Request, { params }: { params: { path: string[] } }) {
  return forward('DELETE', params, req);
}

async function forward(method: string, params: { path: string[] }, req?: Request) {
  const base = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!base) {
    return NextResponse.json({ error: 'BACKEND_URL is not configured' }, { status: 500 });
  }
  const url = new URL(params.path.join('/'), base.endsWith('/') ? base : base + '/');

  const init: RequestInit = { method, headers: {} };
  // 복사 가능한 헤더만 전달
  if (req) {
    const incomingHeaders = new Headers(req.headers);
    incomingHeaders.delete('host');
    incomingHeaders.delete('connection');
    init.headers = incomingHeaders;
    if (method !== 'GET' && method !== 'HEAD') {
      init.body = await req.arrayBuffer();
    }
  }

  try {
    const res = await fetch(url, { ...init, redirect: 'manual' });
    const body = await res.arrayBuffer();
    const outHeaders = new Headers(res.headers);
    return new NextResponse(body, { status: res.status, headers: outHeaders });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Proxy error' }, { status: 502 });
  }
}


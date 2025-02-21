'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Test({ href, children }: any) {
  console.log(usePathname());
  return <Link href={href}>{children}</Link>;
}
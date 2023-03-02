import { useRouter } from 'next/router';

export default function Detail() {
  const route = useRouter();
  console.log(route);

  return 'detail';
}

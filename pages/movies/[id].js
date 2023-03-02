import { useRouter } from 'next/router';

export default function Detail() {
  const route = useRouter();
  //   console.log(route);

  return (
    <div>
      <h4>{route.query.title}</h4>
    </div>
  );
}

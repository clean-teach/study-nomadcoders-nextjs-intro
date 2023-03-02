import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const route = useRouter();
  // const [title, id] = route.query.params || [];
  const [title, id] = params;
  // console.log(params);

  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
}

// export function getServerSideProps({ params: { params } }) { // 구조분해 방식
export function getServerSideProps(context) {
  // console.log(context.params); // 백엔드의 콘솔은 터미널 창에서 확인
  const params = context.params.params;

  return {
    props: {
      params,
    },
  };
}

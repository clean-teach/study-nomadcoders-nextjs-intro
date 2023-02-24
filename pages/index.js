import HeadCustomizer from "@/components/HeadCustomizer";

export default function Home() {
  return (
    <div>
      <HeadCustomizer title="Home" />
      <h1 className='active'>Hello</h1>
    </div>
  );
}
export default function Blog(props: {
  id: number;
  title: string;
  body: string;
  authorId: number;
}) {
  return (
    <div className="blog">
      <p>id: {props.id}</p>
      <p>author id: {props.authorId}</p>
      <p>title: {props.title}</p>
      <p>body: {props.body}</p>
    </div>
  );
}

import './blog.css'
export default function Blog(props: {
  id: number;
  title: string;
  body: string;
  author: {
      id: number,
      name: string
  };
}) {
  return (
    <div className="blog">
      <p>id: {props.id}</p>
        <div className="author">
            <p>author id: {props.author.id}</p>
            <p>author name: {props.author.name}</p>
        </div>
      <p>title: {props.title}</p>
      <p>body: {props.body}</p>
    </div>
  );
}

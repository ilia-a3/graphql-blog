import { FormEvent, useRef } from "react";
import { Query } from "./query";

export default function AddBlog() {
  const titleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (titleRef.current && authorRef.current && bodyRef.current) {
      console.log(authorRef.current.value);
      const args: {
        title: string;
        authorId: number;
        body: string;
      } = {
        title: titleRef.current.value,
        authorId: +authorRef.current.value,
        body: bodyRef.current.value,
      };
      console.log(args)
      Query.addBlog(args);
      console.log("submt");
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />

        <label htmlFor="authorId">Author Id</label>
        <input type="number" id="authorId" ref={authorRef} />

        <label htmlFor="body">Body</label>
        <textarea id="body" ref={bodyRef}></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

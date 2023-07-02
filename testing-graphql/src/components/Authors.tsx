import { useState } from "react";
import { Query } from "./query";

export default function Authors() {
  const [authors, setAuthors] = useState<{ name: string; id: number }[]>([]);
  const getAuthors = async () => {
    Query.getAuthors().then((value) => setAuthors(value));
  };
  return (
    <>
      <button onClick={getAuthors}>Refresh</button>
      <ul className="authors">
        {authors.map((author) => (
          <li key={author.id}>
            {author.id}: {author.name}
          </li>
        ))}
      </ul>
    </>
  );
}

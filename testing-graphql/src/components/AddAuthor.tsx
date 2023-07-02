import {
  FormEvent,
  FormEventHandler,
  InputHTMLAttributes,
  useRef,
  useState,
} from "react";
import { Query } from "./query";

export default function AddAuthor() {
  const nameInput = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameInput.current?.value;
    console.log(name);
    if (name?.trim() != "" && name) {
      console.log("ss");
      Query.addAuthor(name);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" id="name" ref={nameInput} />
        <button>Add Author</button>
      </form>
    </>
  );
}

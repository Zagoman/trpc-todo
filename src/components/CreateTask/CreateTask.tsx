import { useState } from "react";
import styles from "./CreateTask.module.scss";
import { trpc } from "@/utils/trpc";

export const CreateTask = () => {
  const { mutate, isLoading: isPosting } = trpc.create.useMutation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <>
      <label htmlFor="title">
        Title
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="content">
        Content
        <textarea
          id="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      {!isPosting && (
        <button
          onClick={(e) => {
            e.preventDefault();
            mutate({ title, content });
          }}
        >
          Post
        </button>
      )}
    </>
  );
};

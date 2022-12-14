import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CharacterCount from "@tiptap/extension-character-count";
import styles from "/styles/components/Tiptap.module.scss";

export const Tiptap: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit, CharacterCount],
    content: "<p>Hello World! ποΈ</p>",
    editorProps: {
      attributes: {
        class: styles.editorContent,
      },
    },
  });

  if (!editor) return null;

  return (
    <>
      <div className={styles.menu}>
        <button
          className={styles.button}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          h1
        </button>
        <button
          className={styles.button}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          γͺγΉγ
        </button>
        <button
          className={styles.button}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          γ³γΌγγγ­γγ―
        </button>
        <button
          className={styles.button}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          ζγ‘ζΆγη·
        </button>
        <button
          className={styles.button}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          ζδ½
        </button>
      </div>
      <div className={styles.container}>
        <EditorContent editor={editor} />
      </div>
      <div>{editor.storage.characterCount.characters()}ζε­</div>
    </>
  );
};

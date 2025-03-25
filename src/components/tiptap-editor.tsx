'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { useEffect } from 'react';

export function Editor({
  onContentChange,
  className,
}: {
  onContentChange: (content: string) => void;
  className?: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3], // 明确指定要启用的标题级别
          HTMLAttributes: {
            class: 'editor-heading', // 便于后续 CSS 定位
          },
        },
      }),
      Placeholder.configure({
        placeholder: '详细描述您的问题或观点...',
      }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      // 方法二：通过 ProseMirror 状态树
      const firstNode = editor.state.doc.content.content[0];
      const isHeading = firstNode?.type.name === 'heading';
      const titleText = isHeading ? firstNode.textContent : '';

      console.error('==========-----editoree', editor.getHTML(), titleText, firstNode);
      onContentChange(editor.getHTML());
    },
  });

  // 组件卸载时销毁编辑器
  useEffect(() => {
    editor?.on('transaction', ({ transaction }) => {
      console.error('=====----transaction', transaction);
      if (transaction.docChanged) {
        const title = editor.state.doc.content.content[0]?.textContent;
        console.log('当前标题:', title);
      }
    });

    // 重点监听标题节点的创建/删除
    //   editor.on('transaction', ({ transaction }) => {
    //     const isHeadingChange = transaction.steps.some(step => {
    //       // @ts-ignore 访问内部映射
    //       const map = step.from?.content.content;
    //       return map?.some(node => node?.type?.name === 'heading');
    //     }));
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  return (
    <div className={`border rounded-lg p-4 ${className}`}>
      <EditorContent editor={editor} />
    </div>
  );
}

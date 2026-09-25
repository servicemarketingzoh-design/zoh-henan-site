"use client";

import { Trash2 } from "lucide-react";
import { deleteArticle } from "./actions";

export default function DeleteArticleButton({
  id,
  locale,
  title,
}: {
  id: string;
  locale: string;
  title: string;
}) {
  return (
    <form
      action={deleteArticle}
      onSubmit={(event) => {
        if (!window.confirm(`Supprimer définitivement « ${title} » ?`)) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="locale" value={locale} />
      <button
        type="submit"
        className="inline-flex items-center gap-1 rounded-lg border border-red-200 px-3 py-2 text-xs font-bold text-red-700 hover:bg-red-50"
      >
        <Trash2 size={14} /> Supprimer
      </button>
    </form>
  );
}


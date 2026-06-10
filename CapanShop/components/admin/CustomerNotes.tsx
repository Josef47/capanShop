"use client";

import { FormEvent, useState } from "react";
import { noteStore } from "@/lib/store";
import { CustomerNote } from "@/lib/types";
import { useLang } from "@/lib/LanguageContext";

export default function CustomerNotes({
  notes,
  onChanged,
}: {
  notes: CustomerNote[];
  onChanged: () => void;
}) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  function handleAdd(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !note.trim()) return;
    noteStore.add({ customerName: name.trim(), phone: phone.trim(), note: note.trim() });
    setName("");
    setPhone("");
    setNote("");
    onChanged();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={handleAdd} className="card h-fit p-7">
        <h3 className="mb-5 font-display text-xl text-gold-300">{t("admin.addNote")}</h3>
        <div className="space-y-4">
          <div>
            <label className="label-field" htmlFor="note-name">{t("booking.name")}</label>
            <input
              id="note-name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jan Jansen"
            />
          </div>
          <div>
            <label className="label-field" htmlFor="note-phone">{t("booking.phone")}</label>
            <input
              id="note-phone"
              className="input-field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="06 12 34 56 78"
            />
          </div>
          <div>
            <label className="label-field" htmlFor="note-text">{t("admin.note")}</label>
            <textarea
              id="note-text"
              className="input-field min-h-[100px] resize-y"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Bijv. graag tondeuse 3 aan de zijkant, allergisch voor product X…"
            />
          </div>
          <button type="submit" className="btn-gold w-full !py-3">
            {t("admin.addNote")}
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {notes.length === 0 && (
          <p className="rounded-sm border border-dashed border-coffee-700 px-6 py-10 text-center text-sm italic text-cream-400">
            —
          </p>
        )}
        {notes.map((n) => (
          <div key={n.id} className="card p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-cream-100">{n.customerName}</p>
                {n.phone && <p className="text-xs text-cream-400">{n.phone}</p>}
                <p className="mt-2 text-sm leading-relaxed text-cream-300">{n.note}</p>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-cream-400/60">
                  {new Date(n.updatedAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => {
                  noteStore.remove(n.id);
                  onChanged();
                }}
                className="shrink-0 rounded-sm border border-red-500/30 px-3 py-1.5 text-xs text-red-400 transition-colors hover:bg-red-500/10"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

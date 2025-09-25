import React from 'react';

export default function ProfileFormEmbed({ airtableEmbedUrl }) {
  return (
    <div className="rounded-2xl border p-3">
      <div className="mb-3 text-sm text-slate-600">
        If Airtable form doesn't load, use the fallback form below.
      </div>
      {airtableEmbedUrl ? (
        <iframe
          title="Profile form"
          src={airtableEmbedUrl}
          className="w-full h-[560px] border rounded-lg"
          loading="lazy"
          aria-label="Profile submission form"
        />
      ) : (
        <SimpleFallbackForm />
      )}
    </div>
  );
}

function SimpleFallbackForm() {
  return (
    <form
      className="space-y-3"
      onSubmit={e => { e.preventDefault(); alert('Saved locally — sync later.'); }}>
      <input className="w-full border rounded p-2" placeholder="Full name" name="name" />
      <input className="w-full border rounded p-2" placeholder="Phone" name="phone" inputMode="tel" />
      <input className="w-full border rounded p-2" placeholder="Email (optional)" name="email" inputMode="email" />
      <div className="grid grid-cols-2 gap-2">
        <input className="w-full border rounded p-2" placeholder="City / Remote" name="city" />
        <input className="w-full border rounded p-2" placeholder="Primary domain" name="domain" />
      </div>
      <button className="w-full py-3 rounded-full bg-blue-600 text-white">Save profile</button>
    </form>
  );
}

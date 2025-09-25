import React, { useState } from 'react';
import axios from 'axios';

export default function AIInterviewChat({ botpressUrl, onComplete }) {
  const [messages, setMessages] = useState([
    { id: 1, who: 'ai', text: 'Hi! Tell me which domain interests you most.' }
  ]);
  const [input, setInput] = useState('');

  const send = async () => {
    if (!input.trim()) return;
    const msg = { id: Date.now(), who: 'user', text: input };
    setMessages(m => [...m, msg]);
    setInput('');

    try {
      const res = await axios.post(`${botpressUrl}/converse`, { message: msg.text, userId: 'anon' });
      const reply = res.data?.reply || 'Thanks — saved.';
      setMessages(m => [...m, { id: Date.now() + 1, who: 'ai', text: reply }]);

      // If backend signals completion
      if (res.data?.profileComplete && onComplete) {
        onComplete(res.data.profile);
      }
    } catch (err) {
      setMessages(m => [...m, { id: Date.now() + 2, who: 'ai', text: 'Saved locally (offline mode).' }]);
    }
  };

  return (
    <div className="rounded-2xl border p-3 space-y-3 shadow-md shadow-yellow-200">
      <div className="max-h-64 overflow-auto space-y-2" aria-live="polite">
        {messages.map(m => (
          <div
            key={m.id}
            className={`p-2 rounded-lg border max-w-xs ${m.who === 'ai' ? 'bg-indigo-50 self-start' : 'bg-green-50 self-end ml-auto'}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 rounded-xl border p-2"
          placeholder="Type your answer..."
        />
        <button onClick={send} className="px-4 py-2 rounded-full bg-blue-600 text-white">Send</button>
      </div>
    </div>
  );
}

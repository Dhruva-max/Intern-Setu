import React, { useState } from 'react'
import axios from 'axios'

// This component acts as a chat-like UI that can either POST to Botpress conversational API
// or fallback to local question flow. For low-bandwidth, avoid heavy images.

export default function AIInterviewChat({ botpressUrl, onComplete }) {
  const [messages, setMessages] = useState([
    { id: 1, who: 'ai', text: 'Hi — tell us which domain interests you most.' }
  ])
  const [input, setInput] = useState('')

  const send = async () => {
    if (!input.trim()) return
    const msg = { id: Date.now(), who: 'user', text: input }
    setMessages(m => [...m, msg]); setInput('')

    // POST to Botpress: expects a simple endpoint that accepts { message, userId }
    try {
      const res = await axios.post(`${botpressUrl}/converse`, { message: msg.text, userId: 'anon' }, { timeout: 4000 })
      const reply = res.data?.reply || 'Thanks — saved.'
      setMessages(m => [...m, { id: Date.now() + 1, who: 'ai', text: reply }])
      // optionally call onComplete with collected profile fields
    } catch (err) {
      // fallback local reply to preserve offline experience
      setMessages(m => [...m, { id: Date.now() + 2, who: 'ai', text: 'Thanks — noted. (offline fallback)' }])
    }
  }

  return (
    <div className="rounded-2xl border p-3 space-y-3 shadow-offset-yellow">
      <div className="max-h-64 overflow-auto space-y-2" aria-live="polite">
        {messages.map(m => (<div key={m.id} className={`p-2 rounded-lg border ${m.who === 'ai' ? 'bg-indigo-50 self-start' : 'bg-white self-end'}`}>{m.text}</div>))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 rounded-xl border p-2" placeholder="Type your answer..." />
        <button onClick={send} className="px-4 py-2 rounded-full bg-internBlue text-white">Send</button>
      </div>
    </div>
  )
}

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, ChefHat } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, ChatState } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente de Sal Arrecife. 🧂 ¿Busca sal fina o parrillera hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [state, setState] = useState<ChatState>(ChatState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || state === ChatState.THINKING) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setState(ChatState.THINKING);

    try {
      const history = messages.slice(-10).map(m => ({ role: m.role, text: m.text }));
      const response = await sendMessageToGemini(history, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      setState(ChatState.IDLE);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Lo siento, ha ocurrido un error de conexión." }]);
      setState(ChatState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-secondary/30 flex flex-col overflow-hidden animate-modal-in">
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center border-b border-secondary/20">
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-white/10 p-2 rounded-full border border-white/20">
                <ChefHat size={20} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Asistente Sal Arrecife</h3>
                <span className="flex items-center text-[10px] text-green-300 font-medium">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></span>
                  En línea
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-secondary text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {state === ChatState.THINKING && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100">
                  <Loader2 className="w-4 h-4 animate-spin text-secondary" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 border border-slate-200 focus-within:border-secondary transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pregunte sobre precios o productos..."
                className="flex-1 bg-transparent focus:outline-none text-sm text-slate-800"
                disabled={state === ChatState.THINKING}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || state === ChatState.THINKING}
                className="ml-2 text-secondary hover:text-primary disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-slate-700' : 'bg-accent hover:bg-red-600'
        } text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center border-4 border-white/20`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default AIChat;
'use client';

import { useState } from 'react';

export default function CVModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Miniature CV */}
      <div 
        className="cursor-pointer hover:scale-105 transition-transform"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-32 h-40 bg-white rounded-lg shadow-lg border-2 border-zinc-200 overflow-hidden flex flex-col">
          <div className="bg-blue-600 text-white p-1 text-center text-xs font-bold">CV</div>
          <div className="p-2 text-xs flex-1">
            <div className="font-bold mb-1 text-center">Zineb Hourry</div>
            <div className="text-zinc-600 text-[8px] leading-tight text-center mb-2">
              Étudiante 5e année<br/>Génie Informatique
            </div>
            <div className="space-y-1">
              <div className="h-1 bg-zinc-300 rounded"></div>
              <div className="h-1 bg-zinc-300 rounded w-3/4"></div>
              <div className="h-1 bg-zinc-300 rounded w-1/2"></div>
              <div className="h-1 bg-zinc-300 rounded w-2/3"></div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm mt-2 text-zinc-600">Cliquer pour agrandir</p>
      </div>

      {/* Modal agrandi */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <button 
                onClick={() => setIsOpen(false)}
                className="float-right text-2xl font-bold text-zinc-500 hover:text-zinc-700"
              >
                ×
              </button>
              <div className="clear-both">
                <iframe 
                  src="/CV Zineb Hourry pdf.jpg" 
                  className="w-full h-[80vh]"
                  title="CV Zineb Hourry"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

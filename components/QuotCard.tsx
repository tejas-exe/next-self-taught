import React from "react";

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
  return (
    <div className="relative p-2 rounded-xl text-white overflow-hidden bg-[length:300%_300%] animate-gradient bg-gradient-to-r from-pink-400 via-blue-500 to-pink-500 shadow-md">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-blue-500 to-pink-500 bg-[length:300%_300%] animate-[gradientMove_6s_ease-in-out_infinite]" />
      <div className="relative z-10">
        <p className="text-base italic leading-relaxed">“{quote}”</p>
        <p className="text-sm text-right mt-3 font-light">– {author}</p>
      </div>
    </div>
  );
};

export default QuoteCard;

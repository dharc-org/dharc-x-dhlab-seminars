const TalkCard = ({ talk }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-8 w-[300px] md:w-[350px] flex-shrink-0 flex flex-col hover:bg-[#242424] transition-colors">
      <div className="mb-6">
        <span className="text-primary font-bold">{talk.type}</span>
      </div>
      <h3 className="text-2xl font-bold mb-2 text-white">{talk.title}</h3>
      <p className="text-primary font-semibold mb-4">{talk.presenter}</p>
      <p className="text-gray-400 mb-8 line-clamp-3">{talk.description}</p>
      
      {/* Type Tag */}
      <div className="mt-auto flex justify-end">
        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium bg-[#333] text-gray-300">
          {talk.category}
        </span>
      </div>
    </div>
  );
};

export default TalkCard; 
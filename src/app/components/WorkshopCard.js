const WorkshopCard = ({ workshop }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg p-6 min-w-[400px] max-w-[500px]">
      <h3 className="text-2xl font-bold mb-2">{workshop.title}</h3>
      <p className="text-gray-400 mb-4">{workshop.time}</p>
      
      <p className="text-gray-300 mb-4">{workshop.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-400 mb-2">Organizers:</h4>
        {workshop.organizers.map((organizer, index) => (
          <div key={index} className="text-sm text-gray-300">
            {organizer.name} - {organizer.institution}
          </div>
        ))}
      </div>

      {workshop.prerequisites && workshop.prerequisites.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-bold text-gray-400 mb-2">Prerequisites:</h4>
          <ul className="list-disc list-inside text-sm text-gray-300">
            {workshop.prerequisites.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        {workshop.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-[#333] rounded-full text-xs text-gray-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkshopCard; 
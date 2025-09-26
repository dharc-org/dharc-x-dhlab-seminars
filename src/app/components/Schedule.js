// components/Schedule.js

const getTypeStyles = (type) => {
  switch (type) {
    case 'keynote':
      return 'border-l-4 border-amber-400';
    case 'break':
    case 'lunch':
      return 'border-l-4 border-cyan-400';
    case 'welcome':
    case 'conclusion':
      return 'border-l-4 border-green-400';
    case 'workshop':
      return 'border-l-4 border-purple-400';
    case 'qa':
      return 'border-l-4 border-gray-500';
    default: // 'talk'
      return 'border-l-4 border-border';
  }
};

const ScheduleEvent = ({ event }) => (
  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
    <div className="md:w-1/5 shrink-0">
      <p className="text-lg font-mono text-primary tracking-wider">{event.time}</p>
    </div>
    <div className={`flex-1 pl-6 relative ${getTypeStyles(event.type)}`}>
      <div className={`absolute top-1 -left-[9px] w-4 h-4 rounded-full bg-background border-2 ${getTypeStyles(event.type).replace('border-l-4', 'border')}`}></div>
      <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
      {event.speaker && (
        <div className="mt-1 text-foreground/80">
          <p className="font-medium">{event.speaker}</p>
          {event.affiliation && <p className="text-sm italic">{event.affiliation}</p>}
        </div>
      )}
    </div>
  </div>
);

const Schedule = ({ schedule, labels }) => {
  if (!schedule || schedule.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-wide text-center mb-16">
          {labels.title || 'Program'}
        </h2>
        
        {schedule.map((day, dayIndex) => (
          <div key={dayIndex} className="mb-16">
            <div className="mb-8 border-b-2 border-primary/50 pb-4">
              <h3 className="text-3xl font-bold text-primary">{day.dayTitle}</h3>
              <p className="text-lg text-foreground/70">{day.date}</p>
            </div>

            {day.sessions.map((session, sessionIndex) => (
              <div key={sessionIndex} className="mb-12">
                <div className="mb-8">
                  <h4 className="text-2xl font-semibold tracking-wider text-foreground">{session.sessionTitle}</h4>
                  {session.chair && <p className="text-md text-foreground/70 italic mt-1">Chair: {session.chair}</p>}
                </div>
                
                <div className="flex flex-col gap-8">
                  {session.events.map((event, eventIndex) => (
                    <ScheduleEvent key={eventIndex} event={event} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
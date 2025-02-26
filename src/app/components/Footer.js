import React from 'react';

const Footer = () => {
  // Organizing committee members - Regular members first in alphabetical order, then professors
  const committeeMembers = [
    { name: "Andrea Schimmenti", affiliation: "University of Bologna", role: "Chair", isProfessor: false },
    { name: "Carlo Teo Pedretti", affiliation: "University of Bologna", role: "Member", isProfessor: false },
    { name: "Enrica Bruno", affiliation: "University of Bologna", role: "Member", isProfessor: false },
    { name: "Maria Francesca Bocchi", affiliation: "University of Bologna", role: "Member", isProfessor: false },
    { name: "Remo Grillo", affiliation: "University of Bologna", role: "Member", isProfessor: false },
    { name: "Tommaso Battisti", affiliation: "University of Bologna", role: "Member", isProfessor: false },
    { name: "Dr. Marieke Van Erp", affiliation: "KNAW Humanities Cluster", role: "Coordinator", isProfessor: true },
    { name: "Prof. Francesca Tomasi", affiliation: "University of Bologna", role: "Chair and Supervisor", isProfessor: true }
  ];

  return (
    <footer className="bg-[#111111] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-700 pb-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 tracking-wide text-foreground">Organizing Committee</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg shadow-md ${member.isProfessor ? 'bg-[#1e2a38]' : 'bg-[#252525]'}`}
              >
                <h3 className={`text-lg font-semibold mb-1 ${member.isProfessor ? 'text-primary' : 'text-foreground'}`}>
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.affiliation}</p>
                <p className={`text-xs mt-2 ${member.isProfessor ? 'text-white' : 'text-primary'}`}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">Email: <a href="mailto:andrea.schimmenti2@unibo.it" className="text-primary hover:underline">andrea.schimmenti2@unibo.it</a></p>
            <p className="mb-2">For more information, visit <a href="https://dharc-org.github.io/boldh/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bologna DH ecosystem</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Venue</h3>
            <p className="mb-2">Aula Affreschi/BUB</p>
            <p>Bologna, Italy</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} DH.arc & DHLab Seminar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
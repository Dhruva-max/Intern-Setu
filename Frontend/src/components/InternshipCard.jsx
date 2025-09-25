import React from 'react';
import { motion } from 'framer-motion';

const InternshipCard = ({ internship, onApply, onSave }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-offset-yellow border-2 border-gray-200 p-4 mb-4"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{internship.title}</h3>
          <p className="text-internBlue font-semibold text-sm">{internship.company}</p>
          <p className="text-gray-600 text-sm">{internship.location}</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => onSave(internship.id)}
            className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
          >
            💾 Save
          </button>
        </div>
      </div>
      
      <p className="text-gray-700 text-sm mb-3 line-clamp-2">{internship.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {internship.skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-internYellow text-gray-900 text-xs rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          {internship.duration} • {internship.type}
        </span>
        <button
          onClick={() => onApply(internship.id)}
          className="bg-internBlue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Apply Now
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;

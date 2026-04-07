import React, { useState, useMemo } from 'react';
import { Search, Phone, User } from 'lucide-react';
import phoneBookData from './PhoneBookData.js'; 


const PhoneBook = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Group and sort contacts
  const groupedContacts = useMemo(() => {
    // Filter contacts based on search term
    const filteredContacts = phoneBookData.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
    );

    // Sort contacts alphabetically
    const sortedContacts = filteredContacts.sort((a, b) => 
      a.name.localeCompare(b.name)
    );

    // Group by first letter
    const grouped = sortedContacts.reduce((acc, contact) => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(contact);
      return acc;
    }, {});

    return grouped;
  }, [searchTerm]);

  const alphabeticalKeys = Object.keys(groupedContacts).sort();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <User className="w-8 h-8 text-blue-600" />
          Phone Book
        </h1>
        <p className="text-gray-600">Find and browse contacts</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or phone number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
        />
      </div>

      {/* Contact Groups */}
      <div className="space-y-6">
        {alphabeticalKeys.length === 0 ? (
          <div className="text-center py-12">
            <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No contacts found</p>
            <p className="text-gray-400">Try adjusting your search terms</p>
          </div>
        ) : (
          alphabeticalKeys.map(letter => (
            <div key={letter} className="bg-gray-50 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                {letter}
              </h2>
              <div className="space-y-2">
                {groupedContacts[letter].map((contact, index) => (
                  <div 
                    key={`${letter}-${index}`}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{contact.name}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span className="font-mono text-sm">{contact.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Contact Count */}
      <div className="mt-8 text-center text-gray-500">
        <p>Total contacts: {phoneBookData.length}</p>
        {searchTerm && (
          <p>Showing: {Object.values(groupedContacts).flat().length} results</p>
        )}
      </div>
    </div>
  );
};

export default PhoneBook;
import React from "react";

const PhoneBook = ({ filteredContacts }) => {
  if (filteredContacts.length === 0) {
    return (
      <div className="text-center text-red-500 font-semibold mt-4">
        No data found.
      </div>
    );
  }

  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const firstLetter = contact.name.charAt(0).toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(contact);
    return acc;
  }, {});

  return (
    <div className="mt-4">
      {Object.keys(groupedContacts).sort().map((letter) => (
        <div key={letter}>
          <div className="bg-blue-200 text-lg font-bold py-2 px-4 rounded mt-6 text-blue-800">
            {letter}
          </div>
          <div className="ml-4">
            {groupedContacts[letter].map(({ id, name, phone }) => (
              <div
                key={id}
                className="flex justify-between items-center border-b py-2"
              >
                <div className="font-semibold text-gray-700">{name}</div>
                <div className="text-gray-500">{phone}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhoneBook;
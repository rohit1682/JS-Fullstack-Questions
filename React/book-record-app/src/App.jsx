import React, { useState, useEffect } from "react";
import PhoneBook from "./PhoneBook";
import SearchBar from "./SearchBar";
import data from "./data.json";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Fetch and sort data on mount
  useEffect(() => {
    const sortedContacts = [...data].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
    setFilteredContacts(sortedContacts);
  }, []);

  // Search functionality
  useEffect(() => {
    if (!searchQuery) {
      setFilteredContacts(contacts);
    } else {
      const results = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContacts(results);
    }
  }, [searchQuery, contacts]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        Phone Book
      </h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PhoneBook filteredContacts={filteredContacts} />
    </div>
  );
};

export default App;
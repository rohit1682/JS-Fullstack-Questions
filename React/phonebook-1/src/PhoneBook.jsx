import React from "react";
import phoneBookData from "./PhoneBookData";

import "./phoneBook.css";

const PhoneBook = function () {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [data, setData] = React.useState({});
  const [cache, setCache] = React.useState({});

  const groupedData = (searchTerm) => {
    if (cache[searchTerm]) {
      console.log("Caching");
      setData(cache[searchTerm]);
      return;
    }

    const filterList = phoneBookData.filter((record) => {
      return record.name.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    console.log(filterList);

    const sortedList = filterList.sort((a, b) => a.name.localeCompare(b.name));

    const groupedList = sortedList.reduce((acc, record) => {
      console.log("hi");
      const firstLetter = record.name.charAt(0);
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(record);
      return acc;
    }, {});

    setData(groupedList);
    setCache((prevCache) => ({
      ...prevCache,
      [searchTerm]: groupedList,
    }));
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      groupedData(searchTerm);
    }, 400);

    return () => clearTimeout(timer);

    // groupedData(searchTerm);
  }, [searchTerm]);

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter Name"
        />
      </div>

      {/* <button onClick={() => groupedData()}>Click</button> */}

      <div className="record-container">
        {Object.entries(data).map(([letter, records]) => {
          return (
            <div className="record" key={letter}>
              <h1 className="letter">{letter}</h1>
              {records.map((record, index) => (
                <div key={index}>
                  <p>
                    {record.name} - {record.phone}
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhoneBook;

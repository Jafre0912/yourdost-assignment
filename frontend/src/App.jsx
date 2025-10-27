import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

const API_URL = 'https://reqres.in/api/users';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for controls
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'first_name', direction: 'ascending' });
  const [filterLetter, setFilterLetter] = useState('');

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // From API

  // 1. Data Fetching
  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        // Fetch first page to get total_pages
        const firstPageRes = await fetch(`${API_URL}?page=1`);
        const firstPageData = await firstPageRes.json();
        const totalPages = firstPageData.total_pages;
        let allUsers = firstPageData.data;

        // Fetch remaining pages
        const pagePromises = [];
        for (let page = 2; page <= totalPages; page++) {
          pagePromises.push(fetch(`${API_URL}?page=${page}`).then(res => res.json()));
        }

        const remainingPagesData = await Promise.all(pagePromises);
        remainingPagesData.forEach(pageData => {
          allUsers = [...allUsers, ...pageData.data];
        });

        setUsers(allUsers);
        setError(null);
      } catch (err) {
        setError('Failed to fetch user data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  // 2. Filtering, Sorting, and Pagination (Memoized)
  const processedUsers = useMemo(() => {
    let filteredUsers = [...users];

    // Search
    if (searchTerm) {
      filteredUsers = filteredUsers.filter(user =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by first letter
    if (filterLetter) {
      filteredUsers = filteredUsers.filter(user =>
        user.first_name.toLowerCase().startsWith(filterLetter.toLowerCase())
      );
    }

    // Sort
    if (sortConfig.key) {
      filteredUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return filteredUsers;

  }, [users, searchTerm, filterLetter, sortConfig]);

  // Paginated data
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return processedUsers.slice(startIndex, startIndex + itemsPerPage);
  }, [processedUsers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(processedUsers.length / itemsPerPage);

  // 3. Handlers
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); // Reset to first page on sort
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleFilter = (event) => {
    setFilterLetter(event.target.value);
    setCurrentPage(1); // Reset to first page on filter
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  // Alphabet for filter
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="App">
      <h1>User Directory</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="filter-container">
          <label>Filter by First Name: </label>
          <select value={filterLetter} onChange={handleFilter}>
            <option value="">All</option>
            {alphabet.map(letter => (
              <option key={letter} value={letter}>{letter}</option>
            ))}
          </select>
        </div>
      </div>

      {loading && <div className="loader"></div>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th onClick={() => requestSort('first_name')}>
                    First Name {getSortArrow('first_name')}
                  </th>
                  <th onClick={() => requestSort('last_name')}>
                    Last Name {getSortArrow('last_name')}
                  </th>
                  <th onClick={() => requestSort('email')}>
                    Email {getSortArrow('email')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.length > 0 ? (
                  paginatedUsers.map(user => (
                    <tr key={user.id}>
                      <td><img src={user.avatar} alt="avatar" className="avatar" /></td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
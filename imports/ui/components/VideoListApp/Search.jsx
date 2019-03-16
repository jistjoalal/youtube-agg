import React from 'react';

export default Search = ({ searchTerm, submit, change }) =>
  <form onSubmit={submit}>
    <input
      className="input-text"
      type="text"
      name="searchTerm"
      value={searchTerm}
      onChange={change}
      placeholder="Search..."
    />  
  </form> 

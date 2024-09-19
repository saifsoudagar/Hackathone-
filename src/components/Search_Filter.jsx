import React, { useState, useCallback } from "react";
import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";

function Search_Filter({ onSearch, onSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleSearchChange = useCallback(e => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  }, [onSearch]);

  const handleSortChange = useCallback((type, value) => {
    if (type === "label") {
      setSelectedLabels(prev =>
        prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    } else if (type === "status") {
      setSelectedStatuses(prev =>
        prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    }
    onSort(type, value);
  }, [onSort]);

  const removeFilter = useCallback((type, value) => {
    if (type === "label") {
      setSelectedLabels(prev => prev.filter(item => item !== value));
    } else if (type === "status") {
      setSelectedStatuses(prev => prev.filter(item => item !== value));
    }
    onSort(type, value); // Trigger sort to update the view
  }, [onSort]);

  return (
    <div style={{ width: '100%', textAlign: "center", marginTop: "20px", position: "relative" }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '964px', margin: '0 auto' }}>
        <div style={{ width: '829px', height: '50px', position: "relative", display: "flex", alignItems: "center" }}>
          <FiSearch style={{ position: 'absolute', left: '20px', fontSize: '20px', color: '#A0A0A0' }} />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: '100%', height: '100%', paddingLeft: '45px', borderRadius: '12px', background: '#FFFFFF', boxShadow: '0px 4px 50px 0px rgba(111, 111, 111, 0.1)', border: 'none', outline: 'none', fontSize: '16px' }}
          />
        </div>

        <div style={{ display: "inline-block", position: "relative", width: isOpen ? "290px" : "110px", height: '50px', borderRadius: isOpen ? "10px" : "12px", boxShadow: isOpen ? "0px 6px 12px 0px rgba(221, 230, 237, 0.3)" : "none", transition: "all 0.3s ease-in-out" }}>
          <button
            onClick={toggleDropdown}
            style={{ width: "100%", height: "100%", background: "#FFFFFF", borderRadius: "12px", cursor: "pointer", fontSize: "16px", fontWeight: "500", textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 10px", border: "1px solid #EAEAEA", position: "relative" }}
          >
            <span>Filter</span>
            <FiChevronDown style={{ fontSize: "20px", color: "#A0A0A0", transition: "transform 0.3s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
          </button>

          {isOpen && (
            <ul style={{ textAlign: "start", width: "100%", margin: "0", padding: "10px 0", listStyle: "none", background: "#fff", borderRadius: "10px", overflow: "hidden", maxHeight: "calc(394px - 50px)", fontSize: "14px", fontWeight: "400", lineHeight: "22.65px", color: "#858585" }}>
              <p style={{ fontSize: "15px", fontWeight: "400", lineHeight: "22.65px", color: "#858585", marginLeft: '15px', paddingBottom: '5px' }}>Status</p>
              {["All", "Active", "Upcoming", "Past"].map(status => (
                <li key={status} onClick={() => handleSortChange("status", status)} style={{ padding: "5px 10px", cursor: "pointer", display: "flex", alignItems: "center", backgroundColor: selectedStatuses.includes(status) ? "#F0F0F0" : "transparent" }}>
                  <input type="checkbox" id={`status-${status}`} name="status" value={status} checked={selectedStatuses.includes(status)} readOnly aria-checked={selectedStatuses.includes(status)} />
                  <label htmlFor={`status-${status}`} style={{ marginLeft: "10px" }}>{status}</label>
                </li>
              ))}
              <hr style={{ width: "calc(100% - 20px)", border: "1px solid #ECECEC", margin: "10px 0" }} />
              <p style={{ fontSize: "15px", fontWeight: "400", lineHeight: "22.65px", color: "#858585", marginLeft: '15px', paddingBottom: '5px' }}>Level</p>
              {["Easy", "Medium", "Hard"].map(level => (
                <li key={level} onClick={() => handleSortChange("label", level)} style={{ padding: "5px 10px", cursor: "pointer", display: "flex", alignItems: "center", backgroundColor: selectedLabels.includes(level) ? "#F0F0F0" : "transparent" }}>
                  <input type="checkbox" id={`label-${level}`} name="level" value={level} checked={selectedLabels.includes(level)} readOnly aria-checked={selectedLabels.includes(level)} />
                  <label htmlFor={`label-${level}`} style={{ marginLeft: "10px" }}>{level}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Display selected filters below search and filter */}
      <div style={{ width: '829px', margin: '20px auto', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {[...selectedStatuses, ...selectedLabels].map((filter, index) => (
          <div key={index} style={{ width: '142px', height: '40px', borderRadius: '30px', background: '#F8F9FD7D', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px', fontSize: '14px' }}>
            <span>{filter}</span>
            <FiX
              onClick={() => removeFilter(filter.includes('Active') || filter.includes('Upcoming') || filter.includes('Past') ? 'status' : 'label', filter)}
              style={{ cursor: 'pointer', fontSize: '16px', color: '#A0A0A0' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search_Filter;

import { IoTimeOutline } from "react-icons/io5";
import Navbar from "../components/templates/Navbar";
import BarChart from "../components/BarChart";
import { useState } from "react";

const DashboardPage = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isOpen, setIsOpen] = useState(false);
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const handleDropdownToggle = () => setIsOpen(!isOpen);
  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <Navbar title="Dashboard">
      <div className="shadow rounded-3 bg-white p-4 pb-2">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
          <h1 className="h4">Jumlah Transaksi Keluar Barang</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="dropdown dropstart">
              <button
                className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
                type="button"
                onClick={handleDropdownToggle}
                aria-expanded={isOpen}
              >
                <IoTimeOutline className="fs-4" />
                {selectedYear}
              </button>
              {isOpen && (
                <ul className="dropdown-menu show" style={{ left: "-10rem" }}>
                  {years.map((year) => (
                    <li key={year}>
                      <button
                        className="dropdown-item"
                        onClick={() => handleYearSelect(year)}
                      >
                        {year}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div style={{ height: "500px" }}>
          <BarChart selectedYear={selectedYear} />
        </div>
      </div>
    </Navbar>
  );
};

export default DashboardPage;

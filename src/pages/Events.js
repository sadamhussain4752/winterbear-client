import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import { fetchEventData } from "../reducer/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Popover } from "antd";
import "./Events.css";
import "./eventes2.css";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);

const PopoverContent = () => (
  <div>
    <p>Pop the lid, and reveal your next WINTERBEAR event!</p>
  </div>
);

const MonthSelector = ({ setActiveDays }) => (
  months.map((month, index) => (
    <div className="col-2 p-0 text-center" key={index}>
      <div className="mont" onClick={() => setActiveDays(month)}>{month.slice(0, 3)}</div>
    </div>
  ))
);

const YearRow = ({ activeDays }) => {
  const [yearRange, setYearRange] = useState({ start: 2024, end: 2026 });
  const [dayRange, setDayRange] = useState({ start: 1, end: 10 });

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleYearLeftClick = () => {
    setYearRange(prevRange => ({
      start: prevRange.start - 3,
      end: prevRange.end - 3,
    }));
  };

  const handleYearRightClick = () => {
    setYearRange(prevRange => ({
      start: prevRange.start + 3,
      end: prevRange.end + 3,
    }));
  };

  const handleDayLeftClick = () => {
    setDayRange(prevRange => ({
      start: Math.max(prevRange.start - 10, 1),
      end: Math.max(prevRange.end - 10, 10),
    }));
  };

  const handleDayRightClick = () => {
    setDayRange(prevRange => ({
      start: Math.min(prevRange.start + 5, 21),
      end: Math.min(prevRange.end + 5, 31),
    }));
  };

  return (
    <table className="months-table w-100 py-2 bg-transparent mt-2" style={{ marginTop: "1px", padding: "3px" }}>
      <tbody>
        <tr className="year-row">
          <td>
            <span className="left-button fa fa-chevron-left" id="prev" onClick={handleYearLeftClick}></span>
          </td>
          {activeDays === "" ? (
            <tr className="table-row">
              {Array.from({ length: yearRange.end - yearRange.start + 1 }, (_, i) => yearRange.start + i).map((year, index) => (
                <td className="month text-dark px-3 event-image" key={index}>{year}</td>
              ))}
            </tr>
          ) : (
            <>
              <tr className="table-row">
                {days.slice(dayRange.start - 1, dayRange.end - 5).map((day, index) => (
                  <td className="month text-dark px-1 event-image" key={index}>{day}</td>
                ))}
              </tr>
              {/* <tr className="table-row">
                {days.slice(dayRange.start - 1 + 5, dayRange.end).map((day, index) => (
                  <td className="month text-dark px-1 event-image-day" key={index}>{day}</td>
                ))}
              </tr> */}
            </>
          )}
          <td>
            <span className="right-button fa fa-chevron-right" id="next" onClick={activeDays === "" ? handleYearRightClick : handleDayRightClick}></span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("div1");
  const [activeDays, setActiveDays] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const dispatch = useDispatch();

  const { eventlist, loading: bannerLoading, error: bannerError } = useSelector((state) => state.eventlist);

  useEffect(() => {
    dispatch(fetchEventData());
  }, [dispatch]);

  const getImageSource = (divId) => {
    switch (divId) {
      case "div1":
        return "assets/images/Banner3.webp";
      case "div2":
        return "assets/images/Banner2.webp";
      case "div3":
        return "assets/images/Banner1.webp";
      default:
        return "";
    }
  };

  return (
    <>
      <Header />

      <section className="py-5 mt-80">
        <div className="no">
          <div className="row justify-content-center text-center ">
            <div className="position-relative p-0">
              <img
                src={require("../constant/images/EventPageAnimation.gif")}
                alt="Brand image"
                loading="lazy"
                className="img-fluid event-banner"
              />
              <div className="col-md-12 row d-flex justify-content-center position-absolute top-0 "></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ position: "relative" }}>
        <h2 className="text-center">
          Discover your next fandom adventure with WINTERBEAR's whimsical event jars!
        </h2>
        <div className="event-content">
          <div className="card2">
            <h2>Select Your Events</h2>
            <div className="dropdown-container">
              <div className="two-cont">
                <select className="sel-2" value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="" disabled>Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
                <select className="sel-2" value={month} onChange={(e) => setMonth(e.target.value)}>
                  <option value="" disabled>Month</option>
                  {months.map((m, index) => (
                    <option key={index} value={index + 1}>{m}</option>
                  ))}
                </select>
              </div>

              <select className="sel-3" value={day} onChange={(e) => setDay(e.target.value)}>
                <option value="" disabled>Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>

              <button className="find-yer mt-4 px-4 py-2">Find Event</button>
            </div>
          </div>
        </div>
        <div className="container py-5 my" style={{ position: "relative" }}>
          <div className="main-event-cont">
            <div className="background-div">
              <div className="vending-machine">
                <div className="shelves">
                  {Array.from({ length: 4 }, (_, index) => (
                    <div className="shelf" key={index}>
                      {Array.from({ length: 4 }, (_, jarIndex) => (
                        <Popover content={<PopoverContent />} trigger="hover" key={jarIndex}>
                          <div className="jar"></div>
                        </Popover>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="controls">
                  <div className="cont-display">
                    <div className="row month-sec px-2 mb-2">
                      {activeDays === "" ? <MonthSelector setActiveDays={setActiveDays} /> : (
                        <div className="col-12 p-0 text-center mt-1 rounded-pill">
                          <span className="mont-span">{activeDays}</span>
                        </div>
                      )}
                      <YearRow activeDays={activeDays} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      <Gallery />
      <Footer />
    </>
  );
};

export default EventsSection;

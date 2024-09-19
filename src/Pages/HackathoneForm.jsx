import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addHackathon } from "../redux/hackathonSlice"; // Adjust the import path as needed
import Naavbar from "../components/Navbar";
import { IoMdCloudUpload } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HackathoneForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [level, setLevel] = useState("Easy");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [challengeName, setChallengeName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = () => {
    if (!challengeName || !description || !startDate || !endDate || !image) {
      alert("Please fill in all required fields.");
      return;
    }

    const newHackathon = {
      name: challengeName,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      level,
      description,
      img: URL.createObjectURL(image),
      level: new Date(startDate) > new Date() ? 'Upcoming' : 'Active', // Determine label based on start date
    };

    dispatch(addHackathon(newHackathon));
    
 
    navigate("/"); // Redirect to home page
    
  
    setChallengeName("");
    setStartDate(null);
    setEndDate(null);
    setLevel("Easy");
    setDescription("");
    setImage(null);
  };

  return (
    <div style={{ width: "1440px", height: "1265px" }}>
      <Naavbar />
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "29.05px",
          textAlign: "left",
          backgroundColor: "#F8F9FD",
          width: "1440px",
          height: "107px",
          padding: "81px 1145px 37px 89px",
        }}
      >
        Challenge Details
      </h1>

      <div
        style={{
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "19.36px",
          textAlign: "left",
          color: "#333333",
          paddingLeft: "89px",
        }}
      >
        {/* Challenge Name */}
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <label htmlFor="challenge-name">Challenge Name</label>
          <input
            style={{
              width: "453px",
              height: "39px",
              borderRadius: "5px",
              border: "1px solid #B7B7B7",
            }}
            type="text"
            id="challenge-name"
            value={challengeName}
            onChange={(e) => setChallengeName(e.target.value)}
          />
        </div>

        {/* Start Date */}
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <label htmlFor="start-date">Start Date</label>
          <div
            style={{
              width: "453px",
              height: "39px",
              borderRadius: "5px",
              border: "1px solid #B7B7B7",
              display: "flex",
              alignItems: "center",
              padding: "0px 10px",
              justifyContent: "space-between",
            }}
          >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Add start date"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                padding: "8px",
                boxSizing: "border-box",
                fontSize: "16px",
                borderRadius: "5px",
              }}
            />
            <SlCalender />
          </div>
        </div>

        {/* End Date */}
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <label htmlFor="end-date">End Date</label>
          <div
            style={{
              width: "453px",
              height: "39px",
              borderRadius: "5px",
              border: "1px solid #B7B7B7",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
          >
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Add end date"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                padding: "8px",
                boxSizing: "border-box",
                fontSize: "16px",
                borderRadius: "5px",
              }}
            />
            <SlCalender />
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <label htmlFor="description">Description</label>
          <textarea
            style={{
              width: "817px",
              height: "252px",
              borderRadius: "5px",
              border: "1px solid #B7B7B7",
            }}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <label htmlFor="image-upload">Image</label>
          <div>
            <label
              htmlFor="image-upload"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "10px 20px",
                backgroundColor: "#F4F4F4",
                border: "1px solid #B7B7B7",
                borderRadius: "5px",
                width: "256px",
                cursor: "pointer",
                color: "#666666",
                fontWeight: "500",
              }}
            >
              Upload
              <IoMdCloudUpload style={{ fontSize: "20px", marginTop: "4px" }} />
            </label>
            <input
              id="image-upload"
              type="file"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            {image && <p>{image.name}</p>}
          </div>
        </div>

        {/* Level Type Dropdown */}
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <label htmlFor="level">Level Type</label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={{
              width: "256px",
              height: "47px",
              borderRadius: "5px",
              border: "1px solid #B7B7B7",
              backgroundColor: "#F4F4F4",
              color: "#333333",
              fontWeight: "500",
              padding: "10px",
            }}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Create Challenge Button */}
        <div
          style={{
            width: "214px",
            height: "46px",
            padding: "6px 18px",
            borderRadius: "10px",
            backgroundColor: "#44924C",
            marginTop: "40px",
            color: "white",
            fontSize: "18px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={handleSubmit}
        >
          Create Challenge
        </div>
      </div>
    </div>
  );
}

export default HackathoneForm;

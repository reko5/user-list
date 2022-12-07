/* eslint-disable no-console */
// import { useState } from "react";
import React, { useState, useEffect } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SwitchButton from "./SwitchButton";
import Bookings from "./Bookings";
import AddBookingForm from "./AddBookingForm";

// import { dummyUsers, dummyBookings } from "../dummy/dummy_data";
import { getUsers } from "../../services/UserService";
import { getBookings } from "../../services/BookingsService";

export default function UserAccordions() {
  const [expanded, setExpanded] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const { data } = await getBookings();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
/*
  const getUserBookings = userId => {
    const userBookings = bookings.filter(booking => booking.user === userId);
    return userBookings;
  };
*/

  return (
    <div>
      {users.map((user) => (
        <Accordion
          key={user.userID} expanded={expanded === `panel${user.userID}`} onChange={handleChange(`panel${user.userID}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography
              sx={{ width: "33%", flexShrink: 1 }}>{user.userName}</Typography>
            <SwitchButton />
          </AccordionSummary>
          <AccordionDetails>
            <Bookings
              user={user}
            />
          </AccordionDetails>
        </Accordion>))
      }
      <AddBookingForm
        // addBooking={addBooking}
        bookings={bookings}
      />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Box, Typography } from "@mui/material";

import { fetchReportData } from "../../api/reportApi";

const styles = {
  heading: {
    paddingBottom: "1rem",
    fontWeight: "bold",
    fontSize: "36px",
    fontFamily: "IBM Plex Sans, sans-serif",
  },
  text: {
    fontFamily: "IBM Plex Sans, sans-serif",
  },
  textTableName: {
    fontFamily: "IBM Plex Sans, sans-serif",
    color: "#a4aabd",
  },
};

function Home() {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    // Fetch report data
    fetchReportData()
      .then((response) => {
        if (response && response.data) {
          setReportData(response.data);
        } else {
          throw new Error("Invalid report data");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      sx={{ padding: " 5rem" }}
      style={{ fontFamily: "IBM Plex Sans, sans-serif" }}
    >
      <Typography variant="h6" textAlign={"start"} sx={styles.heading}>
        Home
      </Typography>

      {reportData ? (
        <Box>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="body1" sx={styles.textTableName}>
                ARR
              </Typography>
              <Typography
                variant="h6"
                sx={{ ...styles.heading, ...styles.text }}
              >
                ${reportData[0].arr}M
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={styles.textTableName}>
                SEATS
              </Typography>
              <Typography
                variant="h6"
                sx={{ ...styles.heading, ...styles.text }}
              >
                {reportData[0].seats}
              </Typography>
            </Box>
          </div>
          <Typography
            variant="h6"
            textAlign={"start"}
            sx={styles.textTableName}
          >
            NEW ARR PER MONTH:
          </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={reportData}
              margin={{ top: 50, right: 20, bottom: 50, left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="arr" fill="#1976d2" name="ARR" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      ) : (
        <p style={styles.text}>Loading report data...</p>
      )}
    </Box>
  );
}

export default Home;

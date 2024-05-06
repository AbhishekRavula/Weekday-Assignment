import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import "./JobCard.css";
import "../../styles/fonts.css";
import { Job } from "../../features/searchJobs/searchJobs.slice";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <Card className="job-item-container" sx={{ boxShadow: 3 }}>
      <CardContent>
        <Chip
          label="Posted 10 days ago"
          variant="outlined"
          className="job-item-posted lexend-light"
          size="small"
        />
        <Box className="job-item-header-container">
          <Box>
            <img src={job.logoUrl || ""} alt="logo" width={30} height={30} />
          </Box>
          <Box>
            <Typography className="job-item-company-name lexend-medium">
              {job.companyName}
            </Typography>
            <Typography className="job-item-role lexend-light">
              {job.jobRole}
            </Typography>
            <Typography className="job-item-location exend-regular">
              {job.location}
            </Typography>
          </Box>
        </Box>
        <Typography className="job-item-salary lexend-light">
          Estimated Salary: {job.minJdSalary} - {job.minJdSalary} LPA
        </Typography>
        <Box className="job-item-body-container">
          <Typography className="job-item-about-company lexend-regular">
            About Company:
          </Typography>
          <Typography className="job-item-about-us lexend-semibold">
            About Us
          </Typography>
          <Typography className="job-item-description lexend-light">
            {job.jobDetailsFromCompany}
          </Typography>
        </Box>
        <Typography className="job-item-view-job lexend-light">
          View job
        </Typography>
        <Box className="job-item-experience-container">
          <Typography className="job-item-minimum-experience-label lexend-medium">
            Minimum Experience
          </Typography>
          <Typography className="job-item-minimum-experience lexend-light">
            {job.minExp} Years
          </Typography>
        </Box>
      </CardContent>
      <CardActions className="job-item-actions-container">
        <Button
          size="large"
          variant="contained"
          fullWidth
          sx={{ ":hover": { backgroundColor: "rgb(85, 239, 196)" } }}
          className="job-item-easy-apply-button lexend-regular"
        >
          Easy Apply
        </Button>
        <Button
          size="large"
          variant="contained"
          fullWidth
          sx={{ ":hover": { backgroundColor: "rgb(73, 67, 218)" } }}
          className="job-item-refferal-button lexend-light"
        >
          Unlock refferal asks
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;

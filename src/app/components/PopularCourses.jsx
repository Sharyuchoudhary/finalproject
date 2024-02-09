import React from 'react';
import { Helmet } from 'react-helmet';

function PopularCourses({ popularCoursesArray }) {
  return (
    <div>
      <Helmet>
        <title>Popular Courses - Skillsail</title>
        <meta name="description" content="Explore our most popular courses at Skillsail. Choose from a variety of high-demand courses designed to enhance your skills and advance your career." />
      </Helmet>

      <h3>POPULAR COURSES</h3>
      {/* Add your course rendering logic here */}
    </div>
  );
}

export default PopularCourses;

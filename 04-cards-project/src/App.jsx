import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    companyLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$120/hr",
    location: "Bangalore, India"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/microsoft",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$220/hr",
    location: "Hyderabad, India"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/amazon",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "Backend Developer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$90/hr",
    location: "Seattle, USA"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/flipkart",
    companyName: "Flipkart",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$180/hr",
    location: "Mumbai, India"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$250/hr",
    location: "California, USA"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$160/hr",
    location: "Los Angeles, USA"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "7 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$280/hr",
    location: "New York, USA"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/adobe",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "Senior UI/UX Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$210/hr",
    location: "Noida, India"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/spotify",
    companyName: "Spotify",
    datePosted: "10 days ago",
    post: "Java Developer",
    tag1: "Internship",
    tag2: "Junior Level",
    pay: "$110/hr",
    location: "Stockholm, Sweden"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/tesla",
    companyName: "Tesla",
    datePosted: "12 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$300/hr",
    location: "Austin, USA"
  }
];
  
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
          <Card 
              companyLogo={elem.companyLogo} 
              companyName={elem.companyName} 
              datePosted={elem.datePosted} 
              post={elem.post} 
              tag1={elem.tag1} 
              tag2={elem.tag2} 
              pay={elem.pay} 
              location={elem.location}
          />
        </div>
      })}
    </div>
  )
}

export default App

# Software Engineer Internship

**Integro Technologies, Product Team – Singapore**  
*May 2025 - Aug 2025*

## Building a Dynamic Global Searchbar

At Integro Technologies, I was tasked with improving the application’s search system. What started as a small feature quickly became one of the most challenging projects of my internship: **creating a dynamic Global Searchbar from scratch**.

The original search required users to type a query, hit search, and wait for a results page. My goal was to show results instantly on the same page, improving speed and usability.

<div style="text-align:center;">
  <video autoplay loop muted playsinline 
         style="max-width:800px; width:100%; height:auto; display:block; margin:0 auto;" 
         preload="metadata">
    <source src="/work_media/integro/globalsearch.mp4" type="video/mp4" >
  </video>
    <p><em>A mockup of what I did!</em></p>
</div>

### Infinite Scrolling
Handling large result sets was the first challenge. For example, searching for “a” could return hundreds of matches. I implemented **server-side pagination with infinite scrolling**: fetch the first 10 results, then load more as the user scrolls. It made the interface smooth and responsive.

### Criteria-Based Searching
Users often want to search for specific types, like customers or groups. I added **criteria-based filters**, allowing users to narrow results efficiently and find relevant information faster.

### Backend Work
On the backend, I built REST APIs with Spring to handle queries and filters. Writing and optimizing SQL queries helped me to ensured low latency.

### Challenges
- **No React**: The dynamic search bar was built entirely with JSP and vanilla JavaScript, requiring manual DOM manipulation and careful state management.  

<div style="text-align:center;">
  <img src="/work_media/integro/out-of-order.png" alt="Out of order problem" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Out of order responses</em></p>
</div>

- **Out-of-Order Responses**: Backend queries sometimes returned in the wrong order, which meant that the results rendered would be incorrect. I remembered from my Networks class that TCP uses **ACK/SEQ numbering system** to maintain correct result ordering and I was proud of using this little trick to help me solve this problem


This project was one of the highlights of my internship. It challenged me across both backend and frontend, and it was rewarding to see the business analysts actively using my feature to search for customers more efficiently.

## Tools I Used


During my internship, I had the chance to work with several tools that became part of my daily workflow:  

- **Jira** – Used to track tasks, manage sprints, and coordinate with the team. It helped me understand agile workflows and how features move from “to-do” to “in production.”  
- **SVN (Subversion)** – The company’s version control system. Although I had more experience with Git, working with SVN gave me a good perspective on different branching/merging strategies and versioning approaches.  
- **Docker** – Used for containerizing and running applications consistently across different environments. It was especially useful for setting up local instances of services without dealing with complex installations.  
- **JVM Debugger** – A lifesaver when tracking down issues in backend Java code. I used it to step through methods, inspect variables, and resolve bugs more systematically instead of just relying on print statements.  

These tools weren’t just “checkboxes” — I came out of the internship much more comfortable with production-level debugging, containerization, and collaborative workflows.  



## Life at Integro Technologies
Commuting 1.5 hours to the office every day wasn’t exactly easy, but the people and community made it worthwhile. Plus, every last Friday of the month is Fun Friday!  
I got to join in on activities like scavenger hunts, pickleball matches, and food parties — definitely some of the highlights of my internship.

Super thankful to Integro Technologies and the wonderful mentors for this amazing opportunity!

<div style="text-align:center;">
  <img src="/work_media/integro/mentors.jpg" alt="Team Picture" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Team Picture! (The interns outnumbered the full-time employees haha!)</em></p>
</div>

# Software Engineer Internship

**Integro Technologies, Product Team – Singapore**  
*May 2025 - Aug 2025*

## Building a Dynamic Global Searchbar

At Integro Technologies, I was tasked with improving the application’s search system. What started as a small feature quickly became one of the most challenging projects of my internship: **creating a dynamic Global Searchbar from scratch**.

The original search required users to type a query, hit search, and wait for a results page. My goal was to show results instantly on the same page, improving speed and usability.
(show demo video)
### Infinite Scrolling
Handling large result sets was the first challenge. For example, searching for “a” could return hundreds of matches. I implemented **server-side pagination with infinite scrolling**: fetch the first 10 results, then load more as the user scrolls. It made the interface smooth and responsive.

### Criteria-Based Searching
Users often want to search for specific types, like customers or groups. I added **criteria-based filters**, allowing users to narrow results efficiently and find relevant information faster.

### Backend Work
On the backend, I built REST APIs with Spring to handle queries and filters. Writing and optimizing SQL queries helped me to ensured low latency. (show diagram of the flow)

### Challenges
- **No React**: The dynamic search bar was built entirely with JSP and vanilla JavaScript, requiring manual DOM manipulation and careful state management.  
- **Out-of-Order Responses**: Backend queries sometimes returned in the wrong order. I remembered from my Networks class that TCP uses **ACK/SEQ numbering system** to maintain correct result ordering and I was proud of using this little trick to help me solve this problem

Seeing the Business Analysts use the search bar after deployment was highly rewarding.

## Tools I Used

- Jira
- SVN
- Docker
- JVM Debugger



## Life at Integro Technologies
Commuting 1.5 hours to the office every day wasn’t exactly easy, but the people and community made it worthwhile. Plus, every last Friday of the month is Fun Friday!  
I got to join in on activities like scavenger hunts, pickleball matches, and food parties — definitely some of the highlights of my internship.

<div style="text-align:center;">
  <img src="/work_media/integro/mentors.jpg" alt="Team Picture" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Team Picture! (The interns outnumbered the full-time employees haha!)</em></p>
</div>

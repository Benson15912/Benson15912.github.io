# NUS Orbital  

During my Year 1 summer, I took part in **NUS Orbital**, a self-driven software engineering program where students work on a project from scratch. Together with my friend Rayyan, we decided to build something close to our hearts: a platform for TV and movie lovers.  

## bingeworthy?  
We noticed that while platforms like **IMDb** and **Rotten Tomatoes** provide ratings and reviews, their **UI felt cluttered** and the sense of community was lacking. We wanted something more engaging — a place where TV and film enthusiasts could not only track what they’ve watched, but also **share their opinions, discover new shows, and see what their friends were enjoying**.  

That’s how **bingeworthy** was born: a **full-stack web application** that helps users track shows, get personalized recommendations, and connect with others who share similar tastes.  

<div style="text-align:center;">
  <iframe width="700" height="415" style="display:block; margin:0 auto;"
          src="https://www.youtube.com/embed/7B2zC71EDvg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
  </iframe>
  <p><em>Walkthrough done by Rayyan!</em></p>
</div>

## Design  
<div style="text-align:center;">
  <img src="/project_pictures/bingeworthy/homepage.jpg" alt="Home Page" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Home page</em></p>
</div>

For the design, we wanted to keep things familiar and intuitive. Inspired by Netflix, we went with a **dark theme with bold red accents**, which gave our app a modern streaming-service feel. This design choice made the platform feel more immersive and instantly recognizable to anyone who watches shows online.  

## User System  
We built a full **account system** where users could:  
- Track shows they’ve already watched.  
- Create a list of favorites.  
- Keep a personal “to-watch” bucket list.  

This feature gave users a sense of progress and personalization, making the platform more than just a static database.  


## Show Searching System  

<div style="text-align:center;">
  <img src="/project_pictures/bingeworthy/showresults.png" alt="Search resullts" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Search results page</em></p>
</div>

To power the core functionality, we integrated the **TMDB API** (The Movie Database). We pulled show and movie data, manipulated the API responses, and displayed them dynamically on our website. This allowed users to search for any show or movie in real-time, complete with cover art, ratings, and descriptions.  

## Social System  
<div style="text-align:center;">
  <img src="/project_pictures/bingeworthy/follow.png" alt="social" style="max-width:200px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Following a user</em></p>
</div>

One of our favorite features was the **social component**. We implemented a system where users could:  
- Follow friends.  
- See what they had been watching recently.  
- View recommendations directly from people they trust.  

It felt a little like Instagram — but instead of food pics or travel shots, it was all about the shows and films people were binging.  

## Recommendation System  
<div style="text-align:center;">
  <img src="/project_pictures/bingeworthy/recommender.png" alt="recommender" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>User Recommendations</em></p>
</div>

To make the app even more engaging, we added a **recommendation engine**. Based on a user’s favorite shows, we used TMDB’s API to generate suggestions for what to watch next. While it wasn’t AI-driven, it gave users a personalized feel and made the platform more interactive.  

## Tech Stack  
Since this was our very first real web project, we kept the stack simple but powerful:  
- **Frontend**: Plain HTML and CSS (no React yet!).  
- **Backend**: Flask (Python).  
- **Database**: SQLAlchemy to handle user accounts and show metadata.  

Even though we considered fancier frameworks like React or Django, we wanted to **master the basics first** and fully understand how the frontend, backend, and database interact in a web app.  

## Learning Pointers  
This project was a turning point for me. Through **bingeworthy**, I learned:  
- The fundamentals of backend development with Flask.  
- How to design and connect databases using SQLAlchemy.  
- Basic frontend design principles and the importance of UI/UX.  
- How to work with external APIs and manipulate their responses.  
- The value of building features incrementally — starting small and iterating.  

Most importantly, I gained confidence. What started as a wild idea turned into a working web app that people could actually use. It sparked my interest in **full-stack development** and gave me the foundation for future projects.  

## Achievements  

We are proud to have earned the **Orbital Apollo 11 (Advanced) certification** for this project. This recognition highlighted the effort, creativity, and technical skills we demonstrated in building a fully functional, user-friendly web application from scratch.


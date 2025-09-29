# How I made this

###### *29 September 2025*  
###### By Benson

---

## The Idea
Before building this site, I went on a “portfolio safari” — hunting for inspiration from the top portfolio websites out there. And wow… these sites looked **amazing**.

Some highlights:

<div style="text-align: center;">
  <img src="/project_pictures/portfolio/image.png" alt="Portfolio Screenshot"/>
  <p><em><a href="https://bruno-simon.com/" target="_blank">Bruno Simon's Gamified Portfolio Site</a></em></p>
</div>

---

<div style="text-align: center;">
  <img src="/project_pictures/portfolio/netflix.png" alt="Portfolio Screenshot"/>
  <p><em><a href="https://sumanthsamala.com/profile/recruiter" target="_blank">Sumanth Samala's Netflix Themed Site</a></em></p>
</div>

---

But of course, I do not have much time on my hand. I wanted something **personal, maintainable, and realistic**.

So I went with a **blog-post style for my projects**:  
1. Write a project in a simple Markdown file
2. Have a route that dynamically displays it  

Sounds easy, right? Right…? 😅

---

## Choosing My Tech Stack
I decided on these tools as I was more familar with them:

- **React + Vite** — Fast, modern, and TypeScript-friendly.  
- **Tailwind CSS** — For custom styling.  
- **TanStack Router** — To handle my routing.


---

## Deployment (bugs were endless)
Being a broke student, I wanted a **free hosting solution**. Naturally, I thought: “GitHub Pages — it’s free, easy, done!”

**Spoiler alert:** It was NOT that simple.

GitHub Pages is **statically hosted**, which means my TanStack Router was throwing tantrums. Click a link → **404 page**. My hard-coded routes weren’t being recognized because **GitHub Pages only serves files that exist**.

I had spent so long coding, only to discover that my dynamic routes were basically ghosts.

I tried a few things:  
- **Firebase Hosting** — worked, but there were network limits (what if the next recruiter wanted to hire me but couldn't view my page?).  
- Endless Google searches and ChatGPTing for solutions.  

Finally… I found a quick little hack: **copy `index.html` and rename it to `404.html`**.

Boom. Every time GitHub Pages encounters a 404, it serves my `404.html`, which just loads my React app and lets TanStack Router handle the route.  

Crisis averted. 🎉 


Now all that's left to do is to write markdown blogs and post them!

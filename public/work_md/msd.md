# Cloud Automation Engineer Internship

**MSD, Scaled Engineering Team (used to be VTE :') ) – Singapore**  
*Jan 2026 - Jun 2026*

## Motivation
In my previous internships, I had learnt a lot about Software Engineering and AI Engineering, but there was one more thing I wanted to explore, which was the Cloud. When I was new to Computer Science, everyone was talking about cloud and its magical powers, but I did not understand the greatness of this "cloud thingy", I was always thinking: why are people using cloud and what are the benefits? Hence I decided to pursue an internship in the Cloud Industry to explore whether I would be interested in a career in Cloud, and that is how I ended up in this internship!

## Learning about the Cloud
To explain briefly, Cloud is basically like a server rental, which meant that users are able to rent resources to host their applications without the need to physically set-up their server(like buying RAM, network bridges etc). 

Think of it this way:

>Imagine you want to start a physical retail shop.

>Instead of buying land, laying the bricks, installing the plumbing, and setting up the security cameras yourself, you simply rent a space in a shopping mall. The mall management handles the structure, the electricity, the central air conditioning, and the security guards. You just pay a monthly fee for the space you use and focus entirely on selling your products.
>
>If your business grows and you need more space, you do not build an extension; you just rent a larger unit next door. The cloud does the exact same thing for software, providing the digital> real estate, power, and security so you can run your applications without building the digital> infrastructure from scratch.>


Amazon Web Services, Google Cloud Platform, Microsoft Azure are one of the most used Cloud Services and MSD uses mainly AWS to power their applications and services. There are many services provided by AWS, and I mainly learned how to use EC2, RDS, S3 and Lambdas etc.

## Data Migration via AWS DMS
One of my work buddy and I were tasked to explore on ways to modernise a legacy application, an application that ran a Oracle DB server in an EC2 instance. This meant that if the instance is somehow wiped out/crashes, the data would be permanently lost. With no Disaster Recovery action plan, this would result in severe consequences as data cannot be recovered, impacting the business use of the application. Hence one of the modernization effort we planned was the migration of this data to a managed database in AWS RDS.

I experimented with AWS's data migration service in a sandbox environment and configured a data transfer pipeline with change data capture which looks a little something like this:

<div style="text-align:center;">
  <video autoplay loop muted playsinline 
         style="max-width:800px; width:100%; height:auto; display:block; margin:0 auto;" 
         preload="metadata">
    <source src="/work_media/msd/DataMigration.mp4" type="video/mp4" >
  </video>
    <p><em>Data Migration Pipeline</em></p>
</div>

Although the project did not carry out as planned (due to an unfortuante shift in scope), I still learned a lot on the how to execute a data migration with Change Data Capture being the most important part :)


## Creating Skills for Agents
Another quirky idea I explored was the use of AI Skills. In the technical teams, engineers are still manually creating Cloud Architecture diagrams using draw.io which was quite time-consuming. Since we are using terraform as Infrastructure as Code, there must be some way to generate a diagram based on the IaC configurations, hence I explored creating a skill for agents to read the terraform code to generate AWS Architecture Diagrams which looked like this!


<div style="text-align:center;">
  <video autoplay loop muted playsinline 
         style="max-width:800px; width:100%; height:auto; display:block; margin:0 auto;" 
         preload="metadata">
    <source src="/work_media/msd/TerraformDiagram.mp4" type="video/mp4" >
  </video>
    <p><em>Mockup of the Skill</em></p>
</div>

## Life at MSD
The office amenities were super nice with Herman Miller chairs and adjustable tables :O, but what made the internship most memorable is the awesome people I worked with! We attended several events together, like AWS Summit 2026, and played a ton of board games!

<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:24px; align-items:flex-start;">
  <figure style="flex:1 1 220px; max-width:300px; margin:0; text-align:center;">
    <img src="/work_media/msd/team-pic.png" alt="Team Picture" style="width:100%; height:auto; display:block; border-radius:12px;" />
    <figcaption><em>Team Picture!</em></figcaption>
  </figure>

  <figure style="flex:1 1 220px; max-width:300px; margin:0; text-align:center;">
    <img src="/work_media/msd/farewell-lunch.png" alt="Farewell Lunch" style="width:100%; height:auto; display:block; border-radius:12px;" />
    <figcaption><em>Farewell Lunch at Level 33!</em></figcaption>
  </figure>

  <figure style="flex:1 1 220px; max-width:300px; margin:0; text-align:center;">
    <img src="/work_media/msd/dart.png" alt="Darts" style="width:100%; height:auto; display:block; border-radius:12px;" />
    <figcaption><em>Throwback to me hitting a double bullseye at the Games Room!</em></figcaption>
  </figure>
</div>

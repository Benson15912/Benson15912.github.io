# Cyber AI Analyst Internship

**Home Team Science and Technology Agency (HTX), Q Team – Singapore**  
*May 2024 - Aug 2024*


## My Work at HTX



### Facial Recognition
This was one of the more interesting topics I got to explore and experiment with.  
Here’s a video I found pretty hilarious when testing out my facial recognition function:  

<div style="text-align: center;">
  <video autoplay loop muted playsinline controls style="max-height:600px; display:inline-block;">
    <source src="/work_media/htx/face_recog.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

*In the clip, Shawn Thia (an influencer) was mistaken by the algorithm for Lawrence Wong when he put on glasses — and to be fair, their facial features really did look surprisingly similar!*

**How it works**  
<div style="text-align: center;">
  <img src="/work_media/htx/pipeline.png" alt="pipeline" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;"/>
  <p><em>The pipeline I built</em></p>
</div>

At a high level, it works like this: I keep a folder full of people’s face embeddings along with their labels.  
When I feed a video into the facial recognition pipeline, the model goes frame by frame — detecting faces, extracting features, and generating embeddings. These embeddings are then compared against the library.  

If the similarity score crosses a certain threshold, the system confidently labels that face.  

#### Face Detection
One method I explored was DLib's **Histogram of Oriented Gradients (HOG)**.  

A sliding window scans the image, extracting gradient features (basically, how pixel intensities change). These features are passed into a Support Vector Machine (SVM), which decides whether the region contains a face.  

Since faces can appear at different sizes depending on distance, the sliding window is applied at multiple scales to catch both large and small faces.  

<div style="text-align: center;">
  <img src="/work_media/htx/hog.png" alt="hog" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;"/>
  <p><em>Example HOG Features</em></p>
  <p style="font-size:0.8rem;">Image credit: <a href="https://www.researchgate.net/figure/The-HOG-features-of-various-3D-face-images-The-subject-images-A-B-C-D-and-E-were_fig3_337685532" target="_blank">ResearchGate</a></p>
</div>

#### Facial Features / Landmarks
Once a face is detected, key landmarks and features are extracted. These landmarks are then used to **align the face**, ensuring a consistent position and scale.  

<div style="text-align: center;">
  <img src="/work_media/htx/facial_features.png" alt="features" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;"/>
  <p><em>Facial Features</em></p>
  <p style="font-size:0.8rem;">Image credit: <a href="https://medium.com/backprop-labs/face-recognition-pipeline-clearly-explained-f57fc0082750" target="_blank">Backprop Lab</a></p>
</div>


#### Embeddings
After alignment and segmentation, the face is passed into a neural network to generate a **128-dimensional embedding**.  
This embedding is then compared to the library of known embeddings, and if it passes a similarity threshold, the face is labeled accordingly.

### Other Work at HTX
At HTX, I had the chance to explore a variety of tasks beyond facial recognition:  

- **Automating Data Collection:** I used Selenium to gather datasets for machine learning applications, helping speed up data acquisition.  
- **Data Cleaning & Feature Engineering:** I participated in preparing and transforming raw data to make it suitable for analysis and modeling.  
- **OCR Experiments:** I explored tools like PaddleOCR, SpaceOCR, and Tesseract, comparing their performance and accuracy for different tasks.  
- **Chatbots:** I experimented with fine-tuning chatbots using artificial data and responses to improve their interactions.  

These experiences gave me exposure to different facets of AI and data workflows, and helped me understand how to apply these techniques in practical, real-world scenarios.


## Life at HTX
Life at HTX was honestly great. My mentors were super supportive and patient, always ready to point me in the right direction whenever I got stuck. I never felt like I was just left alone to figure things out.  

The best part was probably the community of interns. There were so many of us that it always felt like I had a study group on hand. We bounced ideas around, shared struggles, and sometimes just ranted about bugs together.  

Every meeting felt like a crash course in something I didn’t even know I needed to learn. I’d walk out with new perspectives and fresh ideas almost every time. Looking back, it wasn’t just about the work — the people and the environment made it a really meaningful experience.




<div style="text-align: center;">
  <img src="/work_media/htx/htx.jpg" alt="HTX" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;"/>
  <p><em>My final day at HTX!</em></p>
</div>

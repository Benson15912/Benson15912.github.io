# BrainHack 2024

BrainHack is a hackathon organized by DSTA. My team — Aslam, Vishnu, Rayyan, and I — joined the category called **Today I Learned AI (TIL-AI)**. This track focused heavily on AI, and we were challenged to solve tasks like:

- Automatic Speech Recognition (ASR)  
- Question Answering (QA)  
- Object Detection  

The theme was about building a pipeline for **target locating** so that our “weapon system” could identify and shoot down targets.  
Our pipeline looked like this:  

<div style="text-align:center;">
  <img src="/project_pictures/brainhack-2024/pipeline.png" alt="pipeline" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Pipeline</em></p>
</div>

---

## Approach
We were provided with training data. From there, we explored existing pretrained models and fine-tuned them on the dataset.  

- **Automatic Speech Recognition (ASR):** Whisper model  
- **Question Answering (QA):** BERT model  
- **Object Detection:** YOLO model  

---

## Challenges Faced
- Object detection was the trickiest. The training data had formatting issues, and YOLO required a very specific bounding box format.  
- Being new to Google Vertex AI, we also had a learning curve navigating the environment and figuring out how to fully leverage GPU resources.  

---

## Achievements
We managed to achieve **high speed and accuracy** for each individual AI task, qualifying for the **semi-finals at Marina Bay Sands** where the competition was hosted live.  

Unfortunately, during the semi-finals our QA model broke down, which caused the entire pipeline to fail — even though ASR and Object Detection were working well. Because of that, we fell short of making it to the finals.  

<div style="text-align:center;">
  <img src="/project_pictures/brainhack-2024/brainhack.png" alt="Competition day" style="max-width:300px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>The team at the semi-finals!</em></p>
</div>

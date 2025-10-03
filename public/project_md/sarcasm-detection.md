# Sarcasm is cultural
Being able to detect sarcasm is a skill. Not everyone can catch every nuance and intonation from a sarcastic text. It involves a certain level of intellect to understand that the party is sarcastic.  

Hence my group chose sarcasm detection as our project focus.

## Building the Dataset
We started with a dataset of sarcastic news headlines sourced from **American media** such as *HuffPost* and *The Onion*. But we wanted to explore a cross-cultural question:  

> Would a model trained on American sarcasm still perform well on Singaporean sarcasm?

The problem: no Singaporean sarcasm dataset existed.  
The solution: we built one ourselves.  

We collected Singaporean headlines from Instagram satire accounts and local news outlets like *The Straits Times* (for non-sarcastic samples).

<div style="display:flex; justify-content:center; gap:20px; align-items:center;">
  <div>
    <img src="/project_pictures/sarcasm-detection/mockingbird.png" 
         alt="mockingbird" 
         style="max-width:300px; width:100%; height:auto;" />
  </div>
  <div>
    <img src="/project_pictures/sarcasm-detection/pressingtimes.png" 
         alt="pressing times" 
         style="max-width:300px; width:100%; height:auto;" />
  </div>
</div>

For non-sarcastic data, we drew from *The Straits Times*:

<div style="text-align:center;">
<img src="/project_pictures/sarcasm-detection/straittimes.png" alt="st" style="max-width:300px; width:100%; height:auto; display:block; margin:0 auto;" />
<p><em>Example of non-sarcastic content</em></p>
</div>

### Data Labelling
We manually labelled the headlines using **inter-annotator agreement** — majority vote decided the final label.  
Our *Fleiss’ Kappa* score was **0.328**, which suggests a fair level of consistency (not perfect, but acceptable given sarcasm’s subjectivity).

<div style="text-align:center;">
  <img src="/project_pictures/sarcasm-detection/data.png" alt="dataset" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Final dataset breakdown</em></p>
</div>

We also generated word clouds to visualize the different styles of expression across American and Singaporean headlines:

<div style="text-align:center;">
  <img src="/project_pictures/sarcasm-detection/wordcloud.png" alt="wordclouds" style="max-width:600px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Word clouds from the datasets</em></p>
</div>

## Model Performance on Singaporean Headlines

We tested a BERT-based sarcasm detection model.  
- On **American headlines** → **94% accuracy**  
- On **Singaporean headlines** → **74% accuracy**

Clearly, sarcasm is not universal — cultural context matters.

So how do we improve?

We explored several strategies:
- **Transfer Learning** (fine-tuning with Singaporean data)  
- **Contrastive Learning** (teaching the model by comparing sarcastic vs. non-sarcastic pairs)  
- **Data Augmentation** (injecting *Singlish*, profanities, and text-messaging style)  
- **Synthetic Data** (using ChatGPT to generate more headlines)  

---

## The Best Approach: Contrastive Learning + Synthetic Data

The winning combination was **contrastive learning with synthetic data**.  

- Accuracy on American headlines stayed strong (**94% → 96%**)  
- Accuracy on Singaporean headlines improved significantly (**72% → 84%**)  

### What is Contrastive Learning?
Instead of relying only on cultural markers (like *Singlish* terms or local politician names), contrastive learning focuses on **universal sarcasm patterns**.  

We created paired examples (sarcastic vs. non-sarcastic) across datasets and trained the model to recognize the *polar opposites*. This gave the model a stronger foundation to generalize sarcasm, regardless of cultural context.

---

## Results

<div style="text-align:center;">
  <img src="/project_pictures/sarcasm-detection/sarcasm-stage.png" alt="presentation" style="max-width:400px; width:100%; height:auto; display:block; margin:0 auto;" />
  <p><em>Project Showcase Presentation</em></p>
</div>

We showcased our project at the **NUS SoC Term Project Showcase 2025** and were proud to finish as **runner-ups**, winning a prize of *$125*! 🎉


Checkout the code and poster [here](https://github.com/Benson15912/sarcasm-detection)

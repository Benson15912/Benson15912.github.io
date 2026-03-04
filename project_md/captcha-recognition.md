# CAPTCHA Recognition: From Noisy Images to Reliable Predictions

CAPTCHA recognition looks simple until you actually try to train a model on real-world samples. Characters are distorted, fonts vary, symbols overlap, and random noise is everywhere.

For our CS4243 Computer Vision project, our team built an end-to-end CAPTCHA recognition pipeline and found that the biggest gains did not come from fancy models first — they came from **careful preprocessing and data cleaning**.

<div style="text-align:center;">
	<img src="/project_pictures/captcha-recognition/captcha.png" alt="poster" style="max-width:900px; width:100%; height:auto; display:block; margin:0 auto;" />
	<p><em>Project poster summary</em></p>
</div>

## Motivation and Objective

CAPTCHAs are a strong benchmark for robust visual recognition because they intentionally introduce noise and distortion. Our objective was to develop a model that can:

- Handle heavy image noise and varied fonts
- Segment each character correctly
- Predict full CAPTCHA strings with strong reliability

We prepared a dataset of **10,000 labeled CAPTCHAs** with an **80/20 split** (8,000 train / 2,000 test), using alphanumeric characters (A-Z, 0-9) and case-insensitive labels.

---

## Data Cleaning (Most Important Step)

Before model tuning, we audited the data and removed faulty samples that could poison learning signals.

Examples of removed CAPTCHAs included:
- Unrecognizable logos
- Missing characters
- Unknown boxes
- Unrecognisable symbols

<div style="text-align:center;">
	<img src="/project_pictures/captcha-recognition/wrong_labels.png" alt="wrong labels" style="max-width:450px; width:100%; height:auto; display:block; margin:0 auto;" />
	<p><em>Faulty CAPTCHA examples removed during cleaning</em></p>
</div>

This step reduced label-image mismatch and made downstream training much more stable.

---

## Pipeline Overview

Our full pipeline follows four stages:

1. **Preprocessing**
2. **Tokenizing**
3. **Character Prediction**
4. **Combining tokens into final CAPTCHA output**

<div style="text-align:center;">
	<img src="/project_pictures/captcha-recognition/pipeline.png" alt="pipeline" style="max-width:450px; width:100%; height:auto; display:block; margin:0 auto;" />
	<p><em>End-to-end CAPTCHA recognition pipeline</em></p>
</div>

---

## 1) Preprocessing

This stage was crucial because raw CAPTCHA images contained black-line noise, uneven backgrounds, and broken character edges.

### Noise removal with mask + inpainting
- Built a black-pixel mask to isolate noise strokes
- Applied inpainting to reconstruct clean character regions
- Used a weighted approach so boundary/closure pixels were preserved

### Adaptive thresholding
- Converted images to black-and-white for cleaner separation
- Used **Gaussian-weighted adaptive thresholding**
- Improved readability across different lighting/noise conditions

### Segmentation and contour filtering
- Detected external contours and kept contours in a valid width range
- Removed tiny residual noise components
- Cropped each character into separate image regions

### Morphological closing
- Applied a small kernel to close internal holes and reconnect fragmented strokes
- Produced stronger character boundaries for token extraction

One key result from this stage: tokenization quality improved from **70.4%** (without closing gaps) to **85.4%** (with closing gaps).

---

## 2) Tokenizing

After preprocessing, each segmented character was converted into a standardized token:

- Each token cropped by its contour bounding box
- Resized to **28×28** pixels
- Pixel values normalized
- Stored with its character label for supervised training

This gave us consistent character-level inputs even when original CAPTCHAs had varied lengths (typically 4–8 characters).

---

## 3) Character Prediction

For prediction, we used a CNN-based classifier:

- Convolution + pooling layers for spatial feature extraction
- Fully connected layers for character classification
- Dropout to reduce overfitting
- Batch normalization to stabilize training

Training setup:
- 80/20 train-test split
- 5-fold cross-validation on training data
- Adam optimizer (learning rate: 0.001)
- Up to 30 epochs with early stopping (patience = 6)

Batch normalization gave clear improvements:
- Character-level F1: **0.8330 → 0.8667**
- Character-level precision: **0.8386 → 0.8703**
- Full CAPTCHA accuracy: **0.4005 → 0.4575**

---

## 4) Final CAPTCHA Assembly

Predicted character tokens were reordered by reading sequence and merged into the final CAPTCHA string.

This means our model solves both parts of the challenge:
- **Local recognition** (what each character is)
- **Global reconstruction** (the full CAPTCHA text)

---

## Key Takeaways

- Data cleaning was non-negotiable; removing faulty labels improved training reliability.
- Preprocessing quality directly affected tokenization quality.
- Better tokenization created cleaner supervision for the classifier.
- Batch normalization and early stopping improved both convergence and performance.

Overall, this project showed us that CAPTCHA recognition is not just a model problem — it is a **pipeline problem** where each stage compounds the next.


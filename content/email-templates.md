---
title: "Email Templates"
bg_image: "/images/events/default-event-banner.png"
image: "/images/events/default-event-banner.png"
summary: "Email templates for organizing Neurodata Without Borders (NWB) events."
draft: false
type: "training-and-event-resources"
---

<style>
.email-template {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
}

.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #114B7C;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.copy-btn:hover {
  background-color: #d17128;
}

.template-content {
  white-space: pre-wrap;
  font-family: "Inter", sans-serif;
  margin-top: 10px;
}
</style>

# Email Templates

This page provides email templates that can be used when organizing NWB events. These templates can be customized to fit your specific event needs. Click the "Copy" button to copy the entire template to your clipboard.

<script>
function copyToClipboard(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(function() {
    const btn = document.querySelector(`button[onclick="copyToClipboard('${id}')"]`);
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    setTimeout(function() {
      btn.innerText = originalText;
    }, 2000);
  }).catch(function(err) {
    console.error('Could not copy text: ', err);
  });
}
</script>

## Advertising Your Workshop

**Subject:** [Event name] at [Event location]

<div class="email-template">
  <button class="copy-btn" onclick="copyToClipboard('advertising-template')">Copy</button>
  <div id="advertising-template" class="template-content">

We have are excited to announce our upcoming [Event name]!

**Date:** [Event dates]
**Time:** [Event times]
**Format:** [Event format / location]

Please join us at [Event name], a free workshop where we will train members of the community on how to convert their data to NWB and publish it on the DANDI Archive. During this workshop, we will introduce multiple sets of tools with varying levels of flexibility for converting your data, including NWB GUIDE, a no-code user interface for data conversion.

**Who should attend?**
Researchers of all levels of coding experience interested in converting their data and/or publishing data to DANDI.

**How to participate:**
Please register at [Registration form link] and see the [Event Webpage] for more details.

Let us know if you have any questions!

Best,
[Sender name]</div>
</div>

## Invitation to Presenters

**Subject:** Invitation to present at [Event Name] on [Event Date]

<div class="email-template">
  <button class="copy-btn" onclick="copyToClipboard('invitation-template')">Copy</button>
  <div id="invitation-template" class="template-content">
  
Hi [Presenter name],

We would like to invite you or a representative from your team to present [Tool/Topic/Dataset] at our [Event name] on [Event dates / times]. The aim of this virtual event is to promote secondary analysis of open neurophysiology data in NWB and on DANDI, as well as open-source tools for neurophysiology data analysis and the NWB ecosystem. This event is virtual and open to anyone, please see the [Event Webpage] for more details.

Presentation details: [Provide information about presentation format or required materials]

If you are interested in presenting, please sign up for this event using [Presenter registration form], and we will provide you with further details and updates leading up to the event.

If you are interested in attending the event without presenting, please sign up using this [Attendee registration form] to receive updates about the event.

Please do not hesitate to reach out to us if you have any questions.

Best,
[Sender name]</div>
</div>

## Pre-Workshop Email Template

**Subject:** Information for [Event Name] on [Event Date]

<div class="email-template">
  <button class="copy-btn" onclick="copyToClipboard('pre-workshop-template')">Copy</button>
  <div id="pre-workshop-template" class="template-content">
  
Dear workshop attendees,

We are looking forward to seeing you on [Date] at the [Event Name / Webpage link] at [Location / Virtual information].
 
If you have not already, please complete the items below: 
- Follow the installation instructions for NWB GUIDE and PyNWB/MatNWB on the "what to bring" section of the workshop website.
- Register for DANDI Hub.
- Join the workshop slack channel. We will use slack for general communications during the workshop.
- Add a data conversion project to this [Projects Google Doc link]. If you are planning to convert your data (or have any other NWB-related project you would like to work on), please add a short description to the doc using the template provided. This will help us better support your data conversion projects and facilitate collaboration among attendees.

Let us know if you have any questions!

Best,
[Sender name]</div>
</div>

## Post-Workshop Email Template

**Subject:** Information for [Event Name] on [Event Date]

<div class="email-template">
  <button class="copy-btn" onclick="copyToClipboard('post-workshop-template')">Copy</button>
  <div id="post-workshop-template" class="template-content">

Hi everyone,

Thank you for attending the [Event name]! We hope that, from the event, you have learned more about the NWB software ecosystem, made great progress on your projects, and had engaging discussions with fellow attendees.

Your feedback is extremely valuable to us to help improve our future events. If you have already filled out our survey, thank you! If you have not, please fill out [Post-Workshop Survey Link]. It takes only a couple minutes.

Also, please spend a couple minutes to update your project progress in the [Projects Google Doc link]. This helps us write a report for our funders and supporters. We encourage you to continue to use the workshop slack channel for any follow up questions or project updates.

Thank you, and we hope to see you again at the next NWB event.

Best,
[Sender name]</div>
</div>

---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
endDate: {{ .Date }}
location: ""
eventType: "Hackathon" # or Workshop, Conference, etc.
image: "/images/events/default-event-banner.png"
weight: {{ dateFormat "20060102" .Date }} # YYYYMMDD format for sorting
summary: ""
draft: false
organizers:
  - "Organizer 1"
  - "Organizer 2"
registration: "Registration details here"
resources:
  "Resource 1": "https://example.com"
  "Resource 2": "https://example.com"
---

Event content goes here. This will be displayed on the event page.

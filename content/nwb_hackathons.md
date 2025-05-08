---
title: "NWB Hackathons"
url: "/nwb_hackathons/"
layout: "page/redirect"
---

<meta http-equiv="refresh" content="0;url=/events/">
<link rel="canonical" href="/events/">
<script>
    (function() {
        // Get the current path
        var path = window.location.pathname;

        // Extract the part after /nwb_hackathons/
        var match = path.match(/\/nwb_hackathons\/(.*)/);

        if (match && match[1]) {
            // We have a subpath
            var subpath = match[1];

            // Convert from format like HCK22_2025_DataConversion_Remote to hck22-2025-dataconversion-remote
            var newSubpath = subpath.toLowerCase().replace(/_/g, '-');

            // Redirect to the new URL
            window.location.href = "/events/" + newSubpath;
        } else {
            // No subpath, redirect to the main events page
            window.location.href = "/events";
        }
    })();
</script>

<h1>Redirecting...</h1>
<p>The NWB Hackathons page has moved to <a href="/events">/events</a>.</p>
<p>If you are not redirected automatically, please click the link above.</p>

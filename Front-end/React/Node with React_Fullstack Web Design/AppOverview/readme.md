# Application Overview
## What will this app look like?
* goal: allow our customer to send emails requesting feedback to their customers and give them feedbacks
* A feedback application

## Application Structures break down and Tech skills
* Users will need to Sign ups - (Google OAuth) - Express server + MongoDB + PassportJS
* Users will pary for email creaits - (Stripe) - Stripe +MongoDB
* Users will create a new campaign/event - React + Redux
* Users will enter list of emails to send survey to - React + Redux + Redux Form
* we send email to list of surveyees - Email Provider
* surveyees click on link in email to provide feedback - Email Provider + Express + Mongo
* We tabulate feedbacks - Mongo?
* user can see the report of all survey response - Mongo + React + Redux

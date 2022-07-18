## Financial statement generator ##
 > Generate Financial statement from Trial balance

## Summary ##
  > User can input trial balance number in FS Gen to generate Financial statement in CSV format. FS gen comes with an easy interface to help you group financial statement element. Moreover, you can come back to your previous version anytime).

## Problem ##
  > Calculations and page layout settings in a spreadsheet are prone to manual error, especially if the spreadsheet are used by multiple user or amateur.

## Solution ##
  > Calculations and page layout will be automatically set, so you don't need to worry about someone accidentally delete important calculation, or any unexpected change in page layout.

## Quote from You ##
  > Now you can scale your clients' base!

## Installation ##
  1. clone down the project
  2. go the terminal, inside the current repository
  3. run `npm run build`
  4. run `npm start`
  5. start mongodb, and create database
  6. connect to MongoDB in database.js line 4

## How to Get Started ##
  1. go to page "/uploadTB" then input Company name, year, details, and trial balance numbers.
  2. click save!
  3. in "/GroupTB" page, use dropdown options to choose a group for all accounts shown on this page.
  4. click save!
  5. in "/FS" page, you can go back, download file, or save.
  6. if you want to come back to previously saved FS, Go to "/open".

## Customer Quote ##
- "This is really easy to use!"
- "Good for auditors"
- "This saved me tons of time. I had been spending a lot of time just adjusting the margin, and make the financial statement look nice. Now I can focus on auditing."

## Feature ##
  ### Grouping feature - Input
  ![Grouping feature - Input](https://github.com/neenachcha/hr-rpp33-mvp/blob/master/readmePhoto/grouping%20input.png)

  ### Grouping feature - Output
  ![Grouping feature - Output](https://github.com/neenachcha/hr-rpp33-mvp/blob/master/readmePhoto/grouping%20output.png)

  ### Save / reopen from database


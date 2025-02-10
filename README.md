# Bottled Clarity

A demo mental wellness web app.

## Features

- Collects visitor waitlist sign-ups and stores them in a Google Sheet. View the sheet [here](https://docs.google.com/spreadsheets/d/1wFibVlBKCKHhwUyidUO6C_luxrYvJ0kAQT1LPUfMi-E/edit?gid=0#gid=0).
- Collects newsletter subscriptions and stores them in a Google Sheet. View the sheet [here](https://docs.google.com/spreadsheets/d/1wFibVlBKCKHhwUyidUO6C_luxrYvJ0kAQT1LPUfMi-E/edit?gid=874858054#gid=874858054).

## How It Works

The form data is written to a Google Sheet using Apps Script commands. After receiving the user-entered email, a POST request is sent to the Apps Script app ID. The correct sheet is identified, and the email is saved in a new row along with a 'Created At' timestamp.

## Run Locally

1. Clone the repository.
2. Install dependencies:
   ```sh
   yarn
   ```
3. Start the development server:
   ```sh
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.
5. Setup Google App Script to hook up the frontend to the Google Sheet.

## Setting up App Scripts

1. Create a new Google Sheet at [https://docs.google.com/spreadsheets](https://docs.google.com/spreadsheets)
2. On the toolbar, go to 'Extensions' > 'App Script'
3. In the App Script editor, update the Code.gs file to include

   ```js
   const sheetName = 'Sheet1';
   const scriptProp = PropertiesService.getScriptProperties();

   function initialSetup() {
     const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
     scriptProp.setProperty('key', activeSpreadsheet.getId());
   }

   function doPost(e) {
     const lock = LockService.getScriptLock();
     lock.tryLock(10000);

     try {
       const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
       const sheet = doc.getSheetByName(sheetName);

       const headers = sheet
         .getRange(1, 1, 1, sheet.getLastColumn())
         .getValues()[0];
       const nextRow = sheet.getLastRow() + 1;

       const newRow = headers.map(function (header) {
         return header === 'Date' ? new Date() : e.parameter[header];
       });

       sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

       return ContentService.createTextOutput(
         JSON.stringify({ result: 'success', row: nextRow }),
       ).setMimeType(ContentService.MimeType.JSON);
     } catch (e) {
       Logger.log('Error: ' + e.message);
       return ContentService.createTextOutput(
         JSON.stringify({ result: 'error', error: e }),
       ).setMimeType(ContentService.MimeType.JSON);
     } finally {
       lock.releaseLock();
     }
   }
   ```

4. Save and run the file successfully
5. From the side menu, go to Triggers to add a new trigger
   - the function to run is 'doPost'
   - which runs at deployment is 'Head'
   - the event source is 'From spreadsheet'
   - the event type is 'On form submit'
6. At the top of the page, click on 'Deploy' > 'New deployment'
   - add a description of the script
   - set 'Execute as' to 'Me (your_email_address)'
   - set 'Who has access' to 'Anyone'
7. Copy the Deployment ID and Web app URL for your fetch function on the frontend
8. create a `.env.local` file and add `NEXT_PUBLIC_GOOGLE_WAITLIST_SHEET_ID=<YOUR_DEPLOYMENT_ID>`
9. Congrats 🎉, you have successfully set it up.

#### Additional forms

10. To hook up another form to a different sheet in the same Google Sheet file,

    - go the the App Scripts Overview page, make a copy of the project and rename it
    - in the Editor, update the first line of the Code.gs file to

      ```js
      const sheetName = 'Sheet2';
      ```

    - save and run the file successfully
    - go to the Google Sheet file and create a new sheet. Make sure it is titled 'Sheet2'
    - repeat steps 5 through 8, with an additional env `NEXT_PUBLIC_GOOGLE_NEWSLETTER_SHEET_ID=<YOUR_SECOND_DEPLOYMENT_ID>`

## Remarks

This was a relatively simple task, though not without its challenges. There were layout shifts when the images in the 'How it works' section loaded, and CSS styling alone did not help. To fix it, I had to wrap the image in a container that controlled the width and height, and pass the nextjs/image fill property to the image.

One thing I didn't include is testing, which would be a valuable addition.

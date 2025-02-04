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
5. View submissions:
   - Waitlist sign-ups: [here](https://docs.google.com/spreadsheets/d/1wFibVlBKCKHhwUyidUO6C_luxrYvJ0kAQT1LPUfMi-E/edit?gid=0#gid=0)
   - Newsletter subscriptions: [here](https://docs.google.com/spreadsheets/d/1wFibVlBKCKHhwUyidUO6C_luxrYvJ0kAQT1LPUfMi-E/edit?gid=874858054#gid=874858054)

## Remarks

This was a relatively simple task, though not without its challenges. The Next.js Image component, when used with Tailwind, causes some unusual behavior, leading to layout shifts on larger viewports.

One thing I didn't include is testing, which would be a valuable addition.

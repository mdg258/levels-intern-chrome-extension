### README for **Levels.fyi Internship Scraper Extension**

---

#### **Overview**
This is a browser extension designed to scrape internship information from [levels.fyi/internships](https://www.levels.fyi/internships/) and download the data as a CSV file. The extension is built using Manifest V3 and works exclusively on the specified internships page.

---

#### **Files**

1. **manifest.json**
   - Defines the extension's metadata and permissions.
   - Limits the extension to the `https://www.levels.fyi/internships/` URL.
   - Specifies the popup HTML file and the icon for the extension.

   **Important Entries**:
   - `"host_permissions": ["https://www.levels.fyi/internships/"]`: Ensures the extension only works on the internships page.
   - `"default_popup": "popup.html"`: Specifies the HTML file that provides the user interface for the extension.
   - `"default_icon": "icon.png"`: Points to the icon for the extension.

   [See manifest.json](79)

2. **popup.html**
   - The HTML file that defines the interface for the extension.
   - Contains a button labeled "Download CSV" that triggers the scraping process when clicked.

   **Structure**:
   - A simple layout with a header (`Internship Scraper`) and a button to initiate the data scraping process.
   - The button triggers the script located in `script.js` to start scraping the data and download it as a CSV file.

   [See popup.html](80)

3. **script.js**
   - Contains the logic for scraping internship data from the levels.fyi page and downloading it as a CSV.
   - Scrapes the company name, location, monthly rate, application status (e.g., "Apply" or "Not Open"), and the corresponding links from the page.
   - Ensures the extension only works on the `https://www.levels.fyi/internships/` URL.
   - After scraping, it compiles the data into a CSV format and downloads it automatically when the user clicks the "Download CSV" button.

   **Scraped Fields**:
   - Company Name
   - Location
   - Monthly Rate
   - Application Status (Apply/Not Open)
   - Application Links

   **Functionality**:
   - The script first checks if the user is on the correct page. If so, it gathers the necessary data and formats it as CSV, which is then downloaded.

   [See script.js](79)

4. **icon.png**
   - A simple icon representing the scraping functionality, with a document and arrows to indicate data extraction.
   - Used as the extension's icon in the browser.

   [See icon.png](79)

---

#### **How to Use**

1. **Install the Extension**
   - Open `chrome://extensions/` (or the equivalent in other browsers).
   - Enable "Developer mode".
   - Click "Load unpacked" and select the folder containing the `manifest.json` file.

2. **Scrape Internship Data**
   - Navigate to `https://www.levels.fyi/internships/`.
   - Click the extension icon in the toolbar.
   - In the popup, click the **Download CSV** button.
   - The data will be scraped from the page and automatically downloaded as a CSV file.

---

#### **How to Modify**
- To change the scraping logic, you can edit the `script.js` file.
- To customize the appearance of the popup, you can modify the `popup.html` and `style` section inside it.
- The `manifest.json` file defines the permissions and behavior of the extension.

---

Feel free to reach out if you encounter any issues or need further customizations!

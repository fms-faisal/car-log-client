## To Run the Project Locally, Follow These Steps

1. Clone the repository

    ```
    git clone https://github.com/fms-faisal/car-log-client.git
    ```
2. Navigate to the project directory
    ```
    cd car-log-client
    ```

3. Install dependencies
    ```
     npm install
    ```

4. Run the project
   ```
     npm run dev
   ```
5. Replace environmental variables

   Create **.env.local** file and add the following environment variables
   ```
    VITE_API_URL='https://your-server-link.com'  # Replace with server link
   ```

   Firebase configuration
   ```
    VITE_APIKEY='YOUR_API_KEY'
    VITE_AUTHDOMAIN='YOUR_AUTH_DOMAIN'
    VITE_PROJECTID='YOUR_PROJECT_ID'
    VITE_STORAGEBUCKET='YOUR_STORAGE_BUCKET'
    VITE_MESSAGINGSENDERID='YOUR_MESSAGING_SENDER_ID'
    VITE_APPID='YOUR_APP_ID'
   ```

## **CarLog - A Comprehensive Car Info Hub**

## Overview
**CarLog** is a fullstack, single-page application designed to provide users with comprehensive car information. Users can search, filter, categorize, and sort car listings, making it easier to find the perfect car based on various criteria.

### Functionalities
1. **Sorting**:
   - Sort by Price (Low to High, High to Low) and Date Added (Newest first, Oldest first).

2. **Searching**:
   - Search for products based on car name.

3. **Categorization**:
   - Filter products by Brand Name, Category Name, and Price Range.
   - Users can apply single or multiple filters simultaneously.

4. **Pagination**:
   - Page numbers and navigation buttons (Next, Previous) on the frontend.

**All the functionalities have been implemented on the backend.**

**Additional**:
   - Google Authentication using Firebase.
   - Email and Password Authentication using Firebase.

## **Live Demo**
- **CarLog Live Site**: [Live Link](https://car-log-40ff4.web.app/)

## **Repository Links**
- **Server Side GitHub Repository**: [Server Repository](https://github.com/fms-faisal/car-log-server)

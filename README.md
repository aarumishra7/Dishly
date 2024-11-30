# **Dishly: AI Recipe Generator Web Application**

## **Overview**  
The AI Recipe Generator is a cutting-edge web application that leverages AI and third-party APIs to create highly personalized recipes based on user-defined criteria. By incorporating dietary preferences, allergies, cooking methods, and more, the app delivers customized meal ideas with dynamic ingredient scaling and nutritional insights. 

Users can explore recipes, save them to their profile, and share them with a growing community. The AI-driven solution ensures flexibility and adaptability, offering an enhanced culinary experience.

---

## **Features**
- **AI-Powered Recipe Generation:** Personalized recipes based on user inputs such as cuisine type, meal type, allergies, and nutritional goals.
- **Dynamic Ingredient Scaling:** Adjust ingredient quantities automatically when changing the number of servings.
- **Nutritional Breakdown:** Provides calorie and macronutrient details for each recipe.
- **Community Recipe Sharing:** Users can share, save, and rate recipes within the community.
- **Download & Print Options:** Download recipes as PDFs or print them for offline use.
- **User-Friendly Interface:** A clean, intuitive interface that presents recipes in card format with detailed instructions.

---

## **AI Working Principle**  

The AI Recipe Generator employs a multi-step process combining natural language processing (NLP), external API integration, and mathematical scaling to deliver personalized recipes.

### **Step 1: User Input Handling**  
1. **Inputs:** Users select parameters such as:  
   - **Cuisine Type:** (e.g., Italian, Indian)  
   - **Meal Type:** (Breakfast, Lunch, Dinner)  
   - **Dietary Preferences:** (Vegan, Vegetarian, Keto)  
   - **Allergies:** (Nut-free, Gluten-free)  
   - **Cooking Time:** (Quick meals under 15 minutes)  
   - **Difficulty Level:** (Easy, Medium, Hard)  
   - **Nutritional Goal:** (High protein, Low carb)  
   - **Cooking Method:** (Stovetop, Oven)  
   - **Budget Level:** (Low-cost, Moderate)

2. **Query Construction:** A query is dynamically generated and sent to the **GPT API** for recipe idea generation and the **Spoonacular API** for real-time recipe data.

---

### **Step 2: Recipe Generation Logic**  
- **GPT API Integration:**  
   - The system uses GPT to interpret user input, create recipe prompts, and suggest creative, customized recipes.
   - Example prompt:  
   *“Create a high-protein vegan breakfast recipe that’s nut-free, takes less than 15 minutes, and uses a stovetop.”*

- **Spoonacular API Integration:**  
   - The Spoonacular API fetches relevant recipes based on user filters, providing detailed instructions, ingredients, and nutritional data.  
   - **Endpoint Used:**  
   `https://api.spoonacular.com/recipes/complexSearch`

---

### **Step 3: Dynamic Scaling and Nutritional Calculations**  
- **Ingredient Scaling:**  
   - The app dynamically adjusts ingredient quantities based on the desired number of servings. This is achieved using a mathematical scaling formula applied to the original recipe data.  

   ### New Quantity=( Original Servings / New Servings)×Original Quantity

- **Nutritional Adjustments:**  
   - Nutritional values (calories, macronutrients) are recalculated based on the scaled ingredient quantities, ensuring accurate nutritional insights for the adjusted recipe.

---

### **Step 4: Recipe Display and User Interaction**  
1. **Recipe Cards:**  
   - The app displays recipes as interactive cards with images, cooking time, and difficulty level.
  
2. **Detailed View:**  
   - Users can click on a recipe card to access a detailed view, including step-by-step instructions, a list of ingredients, and nutritional information.

3. **Customization:**  
   - Users can modify the number of servings, and the app will automatically update ingredient quantities and nutritional details.

---

## **Contributing**  
Contributions are welcome! Fork the repository, create a new branch, and submit a pull request. Ensure your changes adhere to the coding guidelines and are well-documented.



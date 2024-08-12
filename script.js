function calculateBMI() {
    // Get input values
    const weight = parseFloat(document.getElementById('w').value);
    const heightCm = parseFloat(document.getElementById('h').value);

    // Check if inputs are valid
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById('bmiResult').textContent = 'Please enter valid positive numbers for weight and height.';
        document.getElementById('status').textContent = '';
        document.getElementById('dietButton').style.display = 'none';
        return;
    }

    // Convert height to meters
    const heightM = heightCm / 100;

    // Calculate BMI
    const bmi = weight / (heightM * heightM);

    // Determine BMI category
    let category = '';
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        color = 'orange';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        color = 'green';
    } else if (bmi >= 24.9 && bmi < 30) {
        category = 'Overweight';
        color = 'yellow';
    } else {
        category = 'Obesity';
        color = 'red';
    }

    // Display the result
    document.getElementById('bmiResult').textContent = `Your BMI is ${bmi.toFixed(2)}`;
    document.getElementById('status').textContent = `${category}`;
    document.getElementById('status').style.color = color;

    // Show the diet button
    document.getElementById('dietButton').style.display = 'block';
}

function showDietRecommendations() {
    const category = document.getElementById('status').textContent;

    let recommendations = '';

    switch (category) {
        case 'Underweight':
            recommendations = `
                Diet Plan for Underweight:
                Increase caloric intake with healthy, calorie-dense foods. Frequent small meals can help. Include protein-rich foods like lean meats, dairy, legumes, and nuts. Incorporate healthy fats such as avocados and olive oil.

                Breakfast: Oatmeal with nuts and fruits, a glass of whole milk.
                Lunch: Chicken or tofu stir-fry with vegetables and brown rice.
                Snack: Greek yogurt with honey and granola.
                Dinner: Baked salmon with quinoa and a side of steamed vegetables.
                Snack: Peanut butter smoothie with banana and almond milk.
            `;
            break;
        case 'Normal weight':
            recommendations = `
                Diet Plan for Normal Weight:
                Maintain a balanced diet with a variety of nutrients. Portion control and hydration are key to maintaining your weight.

                Breakfast: Whole grain toast with avocado, scrambled eggs, and a fruit.
                Lunch: Turkey and vegetable wrap with a side salad.
                Snack: A handful of almonds or a piece of fruit.
                Dinner: Grilled chicken with a side of roasted sweet potatoes and mixed greens.
                Snack: A small bowl of mixed berries.
            `;
            break;
        case 'Overweight':
            recommendations = `
                Diet Plan for Overweight:
                Focus on reducing calorie intake while maintaining nutrition. High-fiber foods and lean proteins can help with satiety. Avoid sugary drinks and snacks.

                Breakfast: Smoothie with spinach, berries, and protein powder.
                Lunch: Grilled chicken salad with a variety of vegetables and a light vinaigrette.
                Snack: Carrot sticks with hummus.
                Dinner: Baked cod with a side of steamed broccoli and brown rice.
                Snack: An apple with a small amount of almond butter.
            `;
            break;
        case 'Obesity':
            recommendations = `
                Diet Plan for Obesity:
                Implement a comprehensive weight management plan that includes a caloric deficit, balanced meals, and regular physical activity. Consult a healthcare provider for personalized guidance.

                Breakfast: Greek yogurt with chia seeds and a small handful of berries.
                Lunch: Quinoa salad with chickpeas, cucumbers, tomatoes, and a lemon dressing.
                Snack: A small handful of mixed nuts or a piece of fruit.
                Dinner: Grilled turkey or tofu with a side of roasted Brussels sprouts and a small serving of brown rice.
                Snack: A few slices of cucumber with a squeeze of lemon.
            `;
            break;
        default:
            recommendations = 'No recommendations available.';
    }

    alert(recommendations);
}

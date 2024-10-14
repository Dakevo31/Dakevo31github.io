// List of words for password generation
const words = [
    "apple", "orange", "banana", "grape", "peach", "cherry", "lemon", "berry", "mango", "melon",
    "kiwi", "lime", "plum", "coconut", "date", "fig", "olive", "pear", "nut", "squash",
    "carrot", "lettuce", "tomato", "potato", "onion", "garlic", "pepper", "celery", "spinach", "broccoli",
    "cabbage", "corn", "bean", "lentil", "pumpkin", "beet", "radish", "mushroom", "artichoke", "zucchini",
    "asparagus", "eggplant", "pea", "turnip", "parsley", "basil", "chive", "dill", "mint", "thyme",
    "rosemary", "sage", "lavender", "oregano", "ginger", "cinnamon", "vanilla", "nutmeg", "almond", "walnut",
    "peanut", "hazelnut", "cashew", "pecan", "coconut", "pistachio", "sunflower", "pumpkin", "sesame", "chia",
    "flax", "quinoa", "rice", "barley", "oats", "wheat", "corn", "millet", "spelt", "rye",
    "beans", "lentils", "tofu", "tempeh", "cheese", "yogurt", "milk", "butter", "cream", "eggs",
    "bread", "biscuit", "cookie", "cake", "pie", "muffin", "brownie", "pancake", "waffle", "doughnut",
    "bagel", "tortilla", "pasta", "noodle", "sushi", "curry", "stew", "salad", "soup", "sauce",
    "dip", "salsa", "ketchup", "mustard", "vinegar", "oil", "honey", "syrup", "jam", "jelly",
    "pickle", "relish", "salsa", "chutney", "smoothie", "juice", "soda", "coffee", "tea", "milkshake",
    "cocktail", "lemonade", "water", "lemonade", "mint", "strawberry", "blueberry", "raspberry", "cranberry", "blackberry",
    "kiwi", "passionfruit", "pomegranate", "guava", "lychee", "persimmon", "starfruit", "dragonfruit", "jackfruit", "papaya",
    "tamarind", "sapote", "sour", "sweet", "spicy", "savory", "tangy", "creamy", "crunchy", "soft",
    "chewy", "flaky", "tender", "juicy", "fresh", "dried", "roasted", "grilled", "baked", "boiled",
    "steamed", "fried", "sautéed", "toasted", "seared", "marinated", "seasoned", "flavored", "spiced", "herbal",
    "bright", "vibrant", "colorful", "earthy", "nutty", "smoky", "rich", "mild", "strong", "flavorful",
    "aromatic", "zesty", "tart", "sour", "bitter", "hot", "cold", "warm", "cool", "tasty",
    "delicious", "scrumptious", "delectable", "mouthwatering", "satisfying", "filling", "hearty", "light", "refreshing", "energizing",
    "energizing", "fulfilling", "indulgent", "refreshing", "wholesome", "nutritious", "balanced", "satisfying", "comforting", "gourmet",
    "casual", "fancy", "elegant", "simple", "quick", "easy", "homemade", "crafted", "artisanal", "authentic",
    "classic", "traditional", "modern", "contemporary", "fusion", "exotic", "international", "regional", "local", "seasonal",
    "fresh", "organic", "sustainable", "fairtrade", "raw", "vegan", "vegetarian", "gluten-free", "low-carb", "low-fat",
    "low-sugar", "keto", "paleo", "Mediterranean", "Asian", "Mexican", "Italian", "French", "American",
    "Indian", "Chinese", "Japanese", "Thai", "Vietnamese", "Greek", "Moroccan", "Caribbean", "Spanish", "Portuguese",
    "German", "British", "Russian", "Scandinavian", "Middle Eastern", "African", "Pacific", "Tropical", "Southern", "Northern",
    "Western", "Eastern", "Central", "Coastal", "Mountain", "Urban", "Rural", "Suburban", "Industrial",
    "Natural", "Cultural", "Historical", "Artistic", "Musical", "Theatrical", "Cinematic", "Literary", "Poetic", "Creative",
    "Imaginative", "Innovative", "Visionary", "Inspiring", "Motivational", "Encouraging", "Supportive", "Thoughtful", "Caring", "Kind",
    "Friendly", "Welcoming", "Generous", "Helpful", "Respectful", "Honest", "Trustworthy", "Reliable", "Dependable", "Responsible",
    "Loyal", "Devoted", "Passionate", "Dedicated", "Ambitious", "Determined", "Driven", "Focused", "Goal-oriented", "Hardworking",
    "Persistent", "Resilient", "Courageous", "Brave", "Adventurous", "Curious", "Open-minded", "Flexible", "Adaptable", "Creative",
    "Innovative", "Resourceful", "Visionary", "Intuitive", "Insightful", "Perceptive", "Observant", "Thoughtful", "Reflective",
    "Analytical", "Critical", "Strategic", "Practical", "Logical", "Rational", "Realistic", "Grounded", "Balanced", "Centered",
    "Stable", "Secure", "Safe", "Protected", "Defended", "Empowered", "Enabled", "Capable", "Strong", "Healthy",
    "Fit", "Active", "Energized", "Vibrant", "Radiant", "Glowing", "Shining", "Brilliant", "Dazzling", "Luminous",
    "Illuminated", "Bright", "Cheerful", "Happy", "Joyful", "Content", "Peaceful", "Calm", "Serene", "Tranquil",
    "Relaxed", "Rested", "Refreshed", "Renewed", "Rejuvenated", "Restored", "Balanced", "Harmonious", "Unified", "Connected",
    "Supported", "Encouraged", "Nurtured", "Guided", "Mentored", "Coached", "Trained", "Developed", "Educated", "Learned",
    "Skilled", "Talented", "Gifted", "Expert", "Masterful", "Proficient", "Capable", "Qualified", "Experienced", "Knowledgeable",
    "Informed", "Aware", "Insightful", "Wise", "Sage", "Astute", "Sharp", "Smart", "Intelligent", "Clever",
    "Resourceful", "Inventive", "Creative", "Artistic", "Expressive", "Imaginative", "Innovative", "Original", "Unique", "Distinctive",
    "Exceptional", "Outstanding", "Remarkable", "Extraordinary", "Incredible", "Fantastic", "Wonderful", "Awesome", "Amazing", "Fabulous",
    "Magnificent", "Stunning", "Breathtaking", "Impressive", "Jaw-dropping", "Astounding", "Spectacular", "Dazzling", "Radiant", "Brilliant",
    "Gorgeous", "Lovely", "Beautiful", "Attractive", "Charming", "Enchanting", "Captivating", "Alluring", "Seductive", "Magnetic",
    "Striking", "Bold", "Vivid", "Dramatic", "Dynamic", "Lively", "Vibrant", "Energetic", "Passionate", "Fiery",
    "Zealous", "Ardent", "Fervent", "Eager", "Enthusiastic", "Excited", "Animated", "Vivacious", "Spirited", "Chipper",
    "Perky", "Peppy", "Cheerful", "Joyful", "Jubilant", "Elated", "Exuberant", "Radiant", "Bright", "Sunny",
    "Optimistic", "Hopeful", "Inspired", "Motivated", "Encouraged", "Empowered", "Supported", "Cared", "Nurtured", "Loved",
    "Cherished", "Valued", "Treasured", "Adored", "Admired", "Respected", "Honored", "Celebrated", "Commended", "Praised",
    "Appreciated", "Acknowledged", "Recognized", "Distinguished", "Acclaimed", "Famed", "Renowned", "Prominent", "Illustrious", "Notable",
    "Eminent", "Esteemed", "Revered", "Lauded", "Hailed", "Saluted", "Bowed", "Applauded", "Cheered", "Acclaimed",
    "Commended", "Applauded", "Honored", "Recognized", "Celebrated", "Fêted", "Exalted", "Magnified", "Praised", "Acclaimed",
    "Adored", "Cherished", "Revered", "Beloved", "Venerated", "Respected", "Esteemed", "Regarded", "Valued", "Treasured",
    "Worshiped", "Honored", "Admired", "Applauded", "Praised", "Celebrated", "Recognized", "Commended", "Exalted", "Saluted",
    "Acclaimed", "Hailed", "Esteemed", "Revered", "Lauded", "Admired", "Cherished", "Treasured", "Appreciated", "Recognized",
    "Valued", "Loved", "Esteemed", "Respected", "Praised", "Commended", "Applauded", "Celebrated", "Recognized", "Honored",
    "Valued", "Treasured", "Cherished", "Respected", "Admired", "Revered", "Regarded", "Worshipped", "Adored", "Appreciated",
    "Distinguished", "Acclaimed", "Notable", "Prominent", "Illustrious", "Famed", "Renowned", "Eminent", "Exceptional", "Remarkable",
    "Outstanding", "Extraordinary", "Incredible", "Amazing", "Wonderful", "Fabulous", "Fantastic", "Stunning", "Breathtaking",
    "Astounding", "Spectacular", "Dazzling", "Brilliant", "Radiant", "Gorgeous", "Lovely", "Beautiful", "Attractive", "Charming",
    "Enchanting", "Captivating", "Alluring", "Seductive", "Magnetic", "Striking", "Bold", "Vivid", "Dramatic", "Dynamic",
    "Lively", "Energetic", "Passionate", "Fiery", "Zealous", "Ardent", "Fervent", "Eager", "Enthusiastic", "Excited",
    "Animated", "Vivacious", "Spirited", "Chipper", "Perky", "Peppy", "Cheerful", "Joyful", "Jubilant", "Elated",
    "Exuberant", "Radiant", "Bright", "Sunny", "Optimistic", "Hopeful", "Inspired", "Motivated", "Encouraged", "Empowered",
    "Supported", "Cared", "Nurtured", "Loved", "Cherished", "Valued", "Treasured", "Adored", "Admired", "Respected",
    "Honored", "Celebrated", "Commended", "Praised", "Appreciated", "Acknowledged", "Recognized", "Distinguished", "Acclaimed",
    "Famed", "Renowned", "Prominent", "Illustrious", "Notable", "Eminent", "Esteemed", "Revered", "Lauded", "Hailed",
    "Saluted", "Bowed", "Applauded", "Cheered", "Acclaimed", "Commended", "Applauded", "Honored", "Recognized", "Celebrated",
    "Fêted", "Exalted", "Magnified", "Praised", "Acclaimed", "Adored", "Cherished", "Revered", "Beloved", "Venerated",
    "Respected", "Esteemed", "Regarded", "Valued", "Treasured", "Worshiped", "Honored", "Admired", "Applauded", "Praised",
    "Celebrated", "Recognized", "Commended", "Exalted", "Saluted", "Acclaimed", "Hailed", "Esteemed", "Revered", "Lauded",
    "Admired", "Cherished", "Treasured", "Appreciated", "Recognized", "Valued", "Loved", "Esteemed", "Respected", "Praised",
    "Commended", "Applauded", "Celebrated", "Recognized", "Honored", "Valued", "Treasured", "Cherished", "Respected", "Admired",
    "Revered", "Regarded", "Worshipped", "Adored", "Appreciated", "Distinguished", "Acclaimed", "Notable", "Prominent", "Illustrious",
    "Famed", "Renowned", "Eminent", "Exceptional", "Remarkable", "Outstanding", "Extraordinary", "Incredible", "Amazing",
    "Wonderful", "Fabulous", "Fantastic", "Stunning", "Breathtaking", "Astounding", "Spectacular", "Dazzling", "Brilliant",
    "Radiant", "Gorgeous", "Lovely", "Beautiful", "Attractive", "Charming", "Enchanting", "Captivating", "Alluring", "Seductive",
    "Magnetic", "Striking", "Bold", "Vivid", "Dramatic", "Dynamic", "Lively", "Energetic", "Passionate", "Fiery",
    "Zealous", "Ardent", "Fervent", "Eager", "Enthusiastic", "Excited", "Animated", "Vivacious", "Spirited", "Chipper",
    "Perky", "Peppy", "Cheerful", "Joyful", "Jubilant", "Elated", "Exuberant", "Radiant", "Bright", "Sunny",
    "Optimistic", "Hopeful", "Inspired", "Motivated", "Encouraged", "Empowered", "Supported", "Cared", "Nurtured", "Loved",
    "Cherished", "Valued", "Treasured", "Adored", "Admired", "Respected", "Honored", "Celebrated", "Commended", "Praised",
    "Appreciated", "Acknowledged", "Recognized", "Distinguished", "Acclaimed", "Famed", "Renowned", "Prominent", "Illustrious",
    "Notable", "Eminent", "Esteemed", "Revered", "Lauded", "Hailed", "Saluted", "Bowed", "Applauded", "Cheered",
    "Acclaimed", "Commended", "Applauded", "Honored", "Recognized", "Celebrated", "Fêted", "Exalted", "Magnified", "Praised",
    "Acclaimed", "Adored", "Cherished", "Revered", "Beloved", "Venerated", "Respected", "Esteemed", "Regarded", "Valued",
    "Treasured", "Worshiped", "Honored", "Admired", "Applauded", "Praised", "Celebrated", "Recognized", "Commended", "Exalted",
    "Saluted", "Acclaimed", "Hailed", "Esteemed", "Revered", "Lauded", "Admired", "Cherished", "Treasured", "Appreciated",
    "Recognized", "Valued", "Loved", "Esteemed", "Respected", "Praised", "Commended", "Applauded", "Celebrated", "Recognized",
    "Honored", "Valued", "Treasured", "Cherished", "Respected", "Admired", "Revered", "Regarded", "Worshipped", "Adored",
    "Appreciated", "Distinguished", "Acclaimed", "Notable", "Prominent", "Illustrious", "Famed", "Renowned", "Eminent", "Exceptional",
    "Remarkable", "Outstanding", "Extraordinary", "Incredible", "Amazing", "Wonderful", "Fabulous", "Fantastic", "Stunning",
    "Breathtaking", "Astounding", "Spectacular", "Dazzling", "Brilliant", "Radiant", "Gorgeous", "Lovely", "Beautiful", "Attractive",
    "Charming", "Enchanting", "Captivating", "Alluring", "Seductive", "Magnetic", "Striking", "Bold", "Vivid", "Dramatic",
    "Dynamic", "Lively", "Energetic", "Passionate", "Fiery", "Zealous", "Ardent", "Fervent", "Eager", "Enthusiastic",
    "Excited", "Animated", "Vivacious", "Spirited", "Chipper", "Perky", "Peppy", "Cheerful", "Joyful", "Jubilant",
    "Elated", "Exuberant", "Radiant", "Bright", "Sunny", "Optimistic", "Hopeful", "Inspired", "Motivated", "Encouraged",
    "Empowered", "Supported", "apple", "ball", "car", "dog", "cat", "house", "tree", "book", "chair", "cup", 
  "table", "sun", "moon", "star", "river", "ocean", "beach", "boat", "road", "cloud", 
  "bed", "clock", "door", "phone", "bike", "shirt", "hat", "fish", "bird", "flower", 
  "garden", "horse", "lake", "mountain", "river", "city", "farm", "boat", "plane", "train", 
  "street", "shoe", "sock", "cup", "key", "lamp", "computer", "mouse", "desk", "window",
  
  // Verbs
  "run", "jump", "walk", "sit", "stand", "swim", "drive", "fly", "read", "write",
  "talk", "listen", "sing", "dance", "cook", "eat", "drink", "play", "draw", "build",
  "paint", "wash", "clean", "sleep", "wake", "laugh", "cry", "smile", "think", "learn", 
  "teach", "help", "give", "take", "buy", "sell", "love", "hate", "hug", "kiss", 
  "shout", "whisper", "watch", "find", "lose", "send", "receive", "jump", "lift", "throw"
    // Add more words if needed
];

// Function to generate a random password
function generatePassword() {
    const minLength = 12; // Minimum length is now 12
    const maxLength = 14; // Maximum length is 14

    // Define the character sets
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '#$%*';
    
    // Choose 2 random words
    const word1 = words[Math.floor(Math.random() * words.length)];
    const word2 = words[Math.floor(Math.random() * words.length)];

    // Combine words and capitalize the first letter of the first word
    let password = word1.charAt(0).toUpperCase() + word1.slice(1) + word2; 

    // Add 2 to 3 random numbers
    const numberCount = Math.floor(Math.random() * 2) + 2; // 2 or 3 numbers
    for (let i = 0; i < numberCount; i++) {
        password += Math.floor(Math.random() * 10); // Add a random number
    }

    // Add a random special character
    const randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    password += randomSpecial;

    // Ensure the password length is within limits
    if (password.length < minLength) {
        // Fill with random lowercase letters if necessary
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        while (password.length < minLength) {
            password += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
        }
    }

    // Trim the password if it exceeds the maximum length
    if (password.length > maxLength) {
        password = password.substring(0, maxLength);
    }

    // Ensure that we have at least one special character
    if (!/[@#$%&*]/.test(password)) {
        password += randomSpecial; // Ensure at least one special character is included
    }

    // Store the generated password
    currentPassword = password; 
    document.getElementById("passwordDisplay").textContent = currentPassword; // Display the password

    // Clear the "Copied" message when generating a new password
    document.getElementById('copyMessage').textContent = ""; 
}

// Function to copy the password to clipboard
function copyToClipboard() {
    const password = document.getElementById('passwordDisplay').textContent;

    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => {
                document.getElementById('copyMessage').textContent = "Copied";
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    } else {
        alert('No password generated to copy.');

    }
}


// Event listeners for buttons
document.getElementById('generatePassword').addEventListener('click', generatePassword);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);
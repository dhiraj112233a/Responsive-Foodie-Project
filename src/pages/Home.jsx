import { Link } from "react-router-dom";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "Pizza", emoji: "🍕" },
    { name: "Burger", emoji: "🍔" },
    { name: "Biryani", emoji: "🍛" },
    { name: "Chinese", emoji: "🍜" },
    { name: "Desserts", emoji: "🍰" },
    { name: "Drinks", emoji: "🥤" },
  ];

  const categoryItems = {
    Pizza: [
      {
        name: "Margherita Pizza",
        description: "Classic pizza with tomato, mozzarella and basil.",
        price: "₹299",
        image:
          "https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg",
      },
      {
        name: "Pepperoni Pizza",
        description: "Delicious pizza with pepperoni and cheese.",
        price: "₹349",
        image:
          "https://images.pexels.com/photos/37417637/pexels-photo-37417637.jpeg",
      },
      {
        name: "Vegetarian Pizza",
        description: "Fresh vegetables on crispy crust.",
        price: "₹279",
        image:
          "https://images.pexels.com/photos/5175513/pexels-photo-5175513.jpeg",
      },
      {
        name: "BBQ Chicken Pizza",
        description: "Tender chicken with smoky BBQ sauce.",
        price: "₹399",
        image:
          "https://images.pexels.com/photos/14906564/pexels-photo-14906564.jpeg",
      },
      {
        name: "Paneer Pizza",
        description: "Indian style pizza with creamy paneer.",
        price: "₹329",
        image:
          "https://images.pexels.com/photos/19081126/pexels-photo-19081126.jpeg",
      },
      {
        name: "Deluxe Pizza",
        description: "All toppings loaded pizza.",
        price: "₹449",
        image:
          "https://images.pexels.com/photos/19786235/pexels-photo-19786235.jpeg",
      },
    ],

    Burger: [
      {
        name: "Cheese Burger",
        description: "Juicy beef burger with cheese and fresh vegetables.",
        price: "₹199",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
      },
      {
        name: "Chicken Burger",
        description: "Crispy fried chicken with spicy mayo.",
        price: "₹229",
        image:
          "https://images.pexels.com/photos/17300434/pexels-photo-17300434.jpeg",
      },
      {
        name: "Double Patty Burger",
        description: "Two beef patties with double cheese.",
        price: "₹299",
        image:
          "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=400&fit=crop",
      },
      {
        name: "Paneer Burger",
        description: "Grilled paneer with Indian spices.",
        price: "₹249",
        image:
          "https://images.pexels.com/photos/31109615/pexels-photo-31109615.jpeg",
      },
      {
        name: "Spicy Burger",
        description: "Extra hot with jalapeños and chili sauce.",
        price: "₹219",
        image:
          "https://images.pexels.com/photos/9207056/pexels-photo-9207056.jpeg",
      },
      {
        name: "Classic Burger",
        description: "Simple yet delicious with fresh lettuce.",
        price: "₹179",
        image:
          "https://images.pexels.com/photos/10701947/pexels-photo-10701947.jpeg",
      },
    ],

    Biryani: [
      {
        name: "Chicken Biryani",
        description: "Aromatic basmati rice cooked with delicious chicken.",
        price: "₹249",
        image:
          "https://images.pexels.com/photos/16020573/pexels-photo-16020573.jpeg",
      },
      {
        name: "Mutton Biryani",
        description: "Tender mutton with fragrant basmati rice.",
        price: "₹329",
        image:
          "https://images.pexels.com/photos/9609856/pexels-photo-9609856.jpeg",
      },
      {
        name: "Vegetable Biryani",
        description: "Mixed vegetables with aromatic spices.",
        price: "₹199",
        image:
          "https://images.pexels.com/photos/9738983/pexels-photo-9738983.jpeg",
      },
      {
        name: "Prawn Biryani",
        description: "Fresh prawns cooked with basmati rice.",
        price: "₹399",
        image:
          "https://images.pexels.com/photos/22435655/pexels-photo-22435655.jpeg",
      },
      {
        name: "Egg Biryani",
        description: "Soft boiled eggs with fried rice.",
        price: "₹189",
        image:
          "https://images.pexels.com/photos/9609853/pexels-photo-9609853.jpeg",
      },
      {
        name: "Hyderabadi Biryani",
        description: "Traditional Hyderabadi style biryani.",
        price: "₹289",
        image:
          "https://images.pexels.com/photos/37883423/pexels-photo-37883423.jpeg",
      },
    ],

    Chinese: [
      {
        name: "Chinese Noodles",
        description: "Tasty noodles with fresh vegetables and sauces.",
        price: "₹179",
        image:
          "https://images.pexels.com/photos/14457500/pexels-photo-14457500.jpeg",
      },
      {
        name: "Chow Mein",
        description: "Stir-fried noodles with chicken and soy sauce.",
        price: "₹219",
        image:
          "https://images.pexels.com/photos/24738507/pexels-photo-24738507.jpeg",
      },
      {
        name: "Fried Rice",
        description: "Golden fried rice with eggs and vegetables.",
        price: "₹189",
        image:
          "https://images.pexels.com/photos/8992927/pexels-photo-8992927.jpeg",
      },
      {
        name: "Hakka Noodles",
        description: "Crispy noodles with spicy sauce.",
        price: "₹199",
        image:
          "https://images.pexels.com/photos/2764905/pexels-photo-2764905.jpeg",
      },
      {
        name: "Vegetable Manchurian",
        description: "Cauliflower in tangy manchurian sauce.",
        price: "₹249",
        image:
          "https://images.pexels.com/photos/28674530/pexels-photo-28674530.jpeg",
      },
      {
        name: "Schezwan Noodles",
        description: "Extra spicy noodles with schezwan sauce.",
        price: "₹209",
        image:
          "https://images.pexels.com/photos/12737812/pexels-photo-12737812.jpeg",
      },
    ],

    Desserts: [
      {
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake slice.",
        price: "₹149",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop",
      },
      {
        name: "Cheesecake",
        description: "Creamy cheesecake with fruit toppings.",
        price: "₹179",
        image:
          "https://images.pexels.com/photos/38495630/pexels-photo-38495630.jpeg",
      },
      {
        name: "Gulab Jamun",
        description: "Traditional Indian sweet dumplings.",
        price: "₹129",
        image:
          "https://images.pexels.com/photos/15014918/pexels-photo-15014918.jpeg",
      },
      {
        name: "Brownie",
        description: "Fudgy chocolate brownie.",
        price: "₹139",
        image:
          "https://images.pexels.com/photos/15106329/pexels-photo-15106329.jpeg",
      },
      {
        name: "Tiramisu",
        description: "Italian dessert with mascarpone cream.",
        price: "₹189",
        image:
          "https://images.pexels.com/photos/37934621/pexels-photo-37934621.jpeg",
      },
      {
        name: "Ice Cream",
        description: "Assorted flavors of premium ice cream.",
        price: "₹119",
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=400&fit=crop",
      },
    ],

    Drinks: [
      {
        name: "Coca-Cola",
        description: "Refreshing cola drink.",
        price: "₹49",
        image:
          "https://images.pexels.com/photos/38102363/pexels-photo-38102363.jpeg",
      },
      {
        name: "Fresh Orange Juice",
        description: "Freshly squeezed orange juice.",
        price: "₹89",
        image:
          "https://images.pexels.com/photos/10277954/pexels-photo-10277954.jpeg",
      },
      {
        name: "Mango Smoothie",
        description: "Delicious mango smoothie with yogurt.",
        price: "₹99",
        image:
          "https://images.pexels.com/photos/14930476/pexels-photo-14930476.jpeg",
      },
      {
        name: "Iced Tea",
        description: "Chilled tea with lemon and mint.",
        price: "₹59",
        image:
          "https://images.pexels.com/photos/6680479/pexels-photo-6680479.jpeg",
      },
      {
        name: "Milkshake",
        description: "Creamy vanilla milkshake.",
        price: "₹79",
        image:
          "https://images.pexels.com/photos/6463666/pexels-photo-6463666.jpeg",
      },
      {
        name: "Lassi",
        description: "Traditional yogurt drink with spices.",
        price: "₹69",
        image:
          "https://images.pexels.com/photos/31490093/pexels-photo-31490093.jpeg",
      },
    ],
  };

  const popularFoods = [
    {
      name: "Cheese Burger",
      description: "Juicy beef burger with cheese and fresh vegetables.",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
    },
    {
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella and basil.",
      price: "₹299",
      image:
        "https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg",
    },
    {
      name: "Chicken Biryani",
      description: "Aromatic basmati rice cooked with delicious chicken.",
      price: "₹249",
      image:
        "https://images.pexels.com/photos/16020573/pexels-photo-16020573.jpeg",
    },
    {
      name: "Schezwan Noodles",
      description: "Extra spicy noodles with schezwan sauce.",
      price: "₹209",
      image:
        "https://images.pexels.com/photos/12737812/pexels-photo-12737812.jpeg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">Delicious food delivered to you</p>

          <h1>
            Your favourite food,
            <br />
            <span>delivered fast.</span>
          </h1>

          <p className="hero-description">
            Discover delicious meals from your favourite restaurants and get
            them delivered right to your doorstep.
          </p>

          <div className="hero-buttons">
            <a href="#popular" className="primary-btn">
              Explore Food
            </a>

            <Link to="/register" className="secondary-btn">
              Join Foodie
            </Link>
          </div>
        </div>

        <div className="hero-food">
          <div className="food-circle">🍕</div>

          <div className="floating-card card-one">⭐ 4.8 Rating</div>

          <div className="floating-card card-two">🚴 Fast Delivery</div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section" id="categories">
        <div className="section-heading">
          <p>WHAT ARE YOU CRAVING?</p>
          <h2>
            Explore <span>Categories</span>
          </h2>
        </div>

        <div className="categories">
          {categories.map((category, index) => (
            <div
              className={`category-card ${
                selectedCategory === category.name ? "active" : ""
              }`}
              key={index}
              onClick={() => setSelectedCategory(category.name)}
            >
              <div className="category-icon">{category.emoji}</div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Category Items Section */}
      {selectedCategory && (
        <section className="category-items-section">
          <div className="section-heading">
            <h2>
              <span>{selectedCategory}</span> Items
            </h2>

            <button
              className="back-btn"
              onClick={() => setSelectedCategory(null)}
            >
              ← Back to Categories
            </button>
          </div>

          <div className="food-grid">
            {categoryItems[selectedCategory]?.map((item, index) => (
              <div className="food-card" key={index}>
                <div className="food-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>

                <div className="food-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <div className="food-bottom">
                    <strong>{item.price}</strong>
                    <button>+ Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Popular Foods */}
      {!selectedCategory && (
        <section className="popular-section" id="popular">
          <div className="section-heading">
            <p>OUR TOP SELLERS</p>
            <h2>
              Popular <span>Foods</span>
            </h2>
          </div>

          <div className="food-grid">
            {popularFoods.map((food, index) => (
              <div className="food-card" key={index}>
                <div className="food-image">
                  <img src={food.image} alt={food.name} loading="lazy" />
                </div>

                <div className="food-info">
                  <h3>{food.name}</h3>
                  <p>{food.description}</p>

                  <div className="food-bottom">
                    <strong>{food.price}</strong>
                    <button>+ Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-section">
        <div>
          <p>READY TO ORDER?</p>

          <h2>
            Good food is just
            <br />
            one click away!
          </h2>

          <p>FOOD DELIVER IN JUST 15 MINS 🚚</p>
          <br />

          <Link to="/register" className="cta-btn">
            Get Started →
          </Link>
        </div>

        <div className="cta-emoji">🍕</div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div>
            <h2>🍔 Foodie</h2>
            <p>Delicious food delivered to your doorstep.</p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <Link to="/">Home -</Link>
            <Link to="/login">Login -</Link>
            <Link to="/register">Register</Link>
          </div>

          <div>
            <h3>Contact</h3>
            <p>📧 dhiraj45@gmail.com</p>
            <p>📞 +91 7057491939</p>
          </div>

          <div>
            <h3>Connect Us</h3>

            <div className="social-media">
              <a
                href="https://www.instagram.com/b4u_.quotes?igsh=Nzd0dmZwZXcyZDV4&igsi=Nzd0dmZwZXcyZDV4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">© 2026 Foodie. All Rights Reserved.</div>
      </footer>
    </div>
  );
}

export default Home;

import Button from "./common/Button";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "./ui/accordion";

const items = [
  {
    value: "a",
    question: "Q: What makes XYZ Company's products so unique?",
    answer:
      "A: At XYZ Company, we pride ourselves on innovation and cutting-edge technology. " +
      "Our products blend creativity and functionality, setting them apart from competitors. " +
      "We continuously push boundaries to deliver an exceptional user experience.",
  },
  {
    value: "b",
    question:
      "Q: How does XYZ Company contribute to sustainability and environmental conservation?",
    answer:
      "A: XYZ Company is dedicated to environmental responsibility. We implement eco-friendly " +
      "practices from material sourcing to manufacturing. Beyond our products, we engage in " +
      "initiatives that reduce our carbon footprint, promoting a greener future.",
  },
  {
    value: "c",
    question:
      "Q: What kind of support can customers expect from XYZ Company's customer service team?",
    answer:
      "A: Customer satisfaction is our top priority at XYZ Company. Our support team is available 24/7 " +
      "to address inquiries or concerns, offering assistance with product usage, troubleshooting, " +
      "and general information. Our friendly representatives are always ready to provide prompt support.",
  },
  {
    value: "d",
    question: "Q: How does XYZ Company stay ahead of industry trends?",
    answer:
      "A: We stay at the forefront of industry trends through continuous research and development. " +
      "XYZ Company invests heavily in monitoring market dynamics and seeks customer feedback. " +
      "By embracing innovation and agility, we ensure our products evolve to meet customer needs.",
  },
  {
    value: "e",
    question:
      "Q: Can you tell us about XYZ Company's commitment to community involvement?",
    answer:
      "A: XYZ Company is committed to giving back to the community. We support local charities and " +
      "projects, and encourage employees to participate in volunteer programs. By fostering social " +
      "responsibility, we aim to positively impact beyond our products and services.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq">
      <h1>FAQ (คำถามที่พบบ่อย)</h1>
      <div>
        <AccordionRoot collapsible defaultValue={["a"]}>
          {items.map((item, index) => (
            <AccordionItem key={index} value={item.value}>
              <AccordionItemTrigger>{item.question}</AccordionItemTrigger>
              <AccordionItemContent>{item.answer}</AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <div>
      <footer>
        <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">🚀 XYZ CORP</div>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export const MainContent = () => {
  return (
    <div>
      <main>
        <div className="company-detail-left">
          <h1>Welcome to XYZ Corp</h1>
          <p>Your Trusted Partner in Excellence</p>
          <img src="https://placehold.co/300x300" />
        </div>
        <div className="company-detail-right">
          <h2>About Our Company</h2>
          <p>
            Welcome to XYZ Corp, where excellence meets innovation. We are a
            passionate team dedicated to providing high-quality solutions for
            the technology industry. With a track record of 10 years of success,
            we have become a trusted partner for clients worldwide.
          </p>
          <p>
            Our mission is to empower businesses through cutting-edge
            technology. We believe in integrity, collaboration, and innovation,
            and we strive to make a positive impact on businesses and
            communities alike.
          </p>
          <p>
            At XYZ Corp, we take pride in our commitment to staying at the
            forefront of technological advancements. Our team of experts is
            ready to collaborate with you to tackle your most complex challenges
            and drive your success.
          </p>
          <Button buttonText="Learn More" buttonStyle="learn-button" />
        </div>
      </main>
    </div>
  );
};

export const ProductSection = () => {
  return (
    <div>
      <section className="product-section">
        <div className="product-section-container">
          <h2 className="product-featured-heading">Featured Products</h2>
          <div className="product-card-list">
            <div className="product-card">
              <img
                src="https://placehold.co/300x300"
                alt="The Lorem Ipsum for photos."
              />
              <h3>Premium Bluetooth Headphones</h3>
              <p className="product-price">2,400 Baht</p>
              <Button
                buttonText="Add to Cart"
                buttonStyle="add-to-cart-button"
              />
            </div>
            <div className="product-card">
              <img
                src="https://placehold.co/300x300"
                alt="The Lorem Ipsum for photos."
              />
              <h3>Classic Leather Watch</h3>
              <p className="product-price">4,000 Baht</p>
              <Button
                buttonText="Add to Cart"
                buttonStyle="add-to-cart-button"
              />
            </div>
            <div className="product-card">
              <img
                src="https://placehold.co/300x300"
                alt="The Lorem Ipsum for photos."
              />
              <h3>Organic Green Tea</h3>
              <p className="product-price">79.99 Baht</p>
              <Button
                buttonText="Add to Cart"
                buttonStyle="add-to-cart-button"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

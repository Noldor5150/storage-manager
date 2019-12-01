import React from "react";
import "./index.scss";

function Home() {
  return (
    <div className="Home">
      <h1>Greetings fellow Humans</h1>
      <p>
        With this app You can manage a warehouse. You can Create, Update, Delete
        products. Products have a few description fields. Create a list of
        products (that can be any products you imagine). In the product list
        view You can disable / enable product. LocalStorage will be Your
        database to save and get Your items. When editing record, data will be
        saved only when SAVE action is called. It is possible to manage stock
        amount and price by using input fields. They are added to every item in
        the list. Saved results will be displayed in another routes. Content is
        not editable in preview route. In preview section, all products that
        have a quantity of 0 will be highlighted.
      </p>
      <p>
        In preview section is a tab system which has 3 tabs: “Product details",
        “Price history”, “Quantity History”. Price history shows the last 5
        changes that were made to prices and time when those changes were made.
        Quantity history shows the last 5 changes that were made to Quantity
        (added or removed) and time when those changes were made. Both history
        items uses{" "}
        <a
          href="https://www.highcharts.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.highcharts.com
        </a>{" "}
        to display history. So please create Your products and enjoy this app
        (also there are some validations)."See" You in the next one 😱!
      </p>
    </div>
  );
}

export default Home;

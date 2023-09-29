export default function Total({ bill, tip }) {
  // Tip is average between you and friend

  // example bill is 100

  // If you choose 10% then your tip will be 5% = $5
  // If you friend choose 20%, your friend's tip will be 10% = $10

  // Finally >> You pay $115 ($100 + $15 tip)

  return (
    <div>
      <h3>
        You pay {bill + tip}฿ ({bill}฿ + {tip}฿ tip)
      </h3>
    </div>
  );
}

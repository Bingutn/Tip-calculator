export default function Bill({ bill, onSetBill }) {
  return (
    <p>
      <span>
        How much was the bill?
        <input
          type="text"
          value={bill}
          placeholder="Bill value"
          onChange={(e) => onSetBill(Number(e.target.value))}
        />
      </span>
    </p>
  );
}

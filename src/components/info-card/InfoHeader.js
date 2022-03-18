export default function InfoHeader({ title, text }) {
  return (
    <h4 className="info-header">
      <strong>
        <u>{title}</u>
      </strong>{" "}
      {text}
    </h4>
  );
}

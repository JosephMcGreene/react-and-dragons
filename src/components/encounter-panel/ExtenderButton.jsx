export default function ExtenderButton({ panelExtended, setPanelExtended }) {
  return (
    <button
      className={
        panelExtended ? "extender-btn extender-extended" : "extender-btn"
      }
      onClick={() => setPanelExtended(!panelExtended)}
    >
      {panelExtended ? "<<" : "Encounter >>"}
    </button>
  );
}

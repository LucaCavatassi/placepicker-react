import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    // questa funzione è detta di cleanup parte dopo la funzione che gli mando nell'useEffect e viene sempre esguita dopo la prima funzione o prima che il componetne viene rimosso, 
    // la dipendenza è importante
    return () => {
      clearTimeout(timer);
    }
  }, [onConfirm]);


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}

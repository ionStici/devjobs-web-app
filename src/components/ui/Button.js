function Button({ text, styles, onClick }) {
  return (
    <button className={styles} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

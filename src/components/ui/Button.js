function Button({ text, styles, onClick, children }) {
  return (
    <button className={styles} onClick={onClick}>
      {text}
      {children}
    </button>
  );
}

export default Button;

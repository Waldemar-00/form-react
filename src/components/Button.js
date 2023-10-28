export default function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
    >
      {children}
    </button>
  )
}
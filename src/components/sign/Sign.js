const Label = ({ title, className }) => {
  return (
    <>
      <label className={className}>{title}</label>
    </>
  )
}

const Input = (props) => {
  return (
    <>
      <input {...props} />
    </>
  )
}

export { Label, Input }

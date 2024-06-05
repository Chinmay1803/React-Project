function DynamicComponent(props) {

  const { titleValue, textValue } = props;
  console.log("Props - ", props);

  return (
    <div>
      <h1>{titleValue}</h1>

      <p> {textValue}</p>
    </div>
  );
}

export default DynamicComponent;

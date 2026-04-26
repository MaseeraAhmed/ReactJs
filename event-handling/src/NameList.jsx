export const NameList = () => {
  const namelist = ["Maseera", "Saad", "Shifa", "Madiha"];

  const nameList = namelist.map((name, index) => <h2 key={index}>{index} {name}</h2>);

  return <div>{nameList}</div>;
};

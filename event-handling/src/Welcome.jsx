//! Props :- How components talk to each other

export const Welcome = ({ name, alias }) => {
  console.log();
  return (
    <h2>
      Welcome, {name} aka {alias} !
    </h2>
  );
};

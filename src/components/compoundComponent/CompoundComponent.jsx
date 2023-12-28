import Counter from "./Counter";

function CompoundComponent() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>

      <Counter>
        <Counter.Label>My Super Flexible Counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
    </div>
  );
}

export default CompoundComponent;

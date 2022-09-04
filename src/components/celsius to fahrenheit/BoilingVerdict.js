export default function Verdict({celsius=0}) {
  if (celsius >= 100) return <p> Water would boil </p>;

  return <p> Water wouldn 't boil</p>;
}

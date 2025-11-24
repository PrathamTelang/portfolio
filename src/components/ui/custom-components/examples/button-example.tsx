import Button from "../Button";


export default function Example() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button>Delete</Button>
    </div>
  );
}

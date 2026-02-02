import ExampleApplications from "./components/home/section/ExampleApplications";
import KeyCharacteristics from "./components/home/section/KeyCharacteristics";
import PartitionCages from "./components/home/section/PartitionCages";
import Services from "./components/home/section/Services";

export default function Home() {
  return (
    <div className="bg-white mx-auto">
      <PartitionCages />
      <KeyCharacteristics />
      <ExampleApplications />
      <Services />
    </div>
  );
}

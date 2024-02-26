import games_data from "@/data/dataSource/games";
import Filters from "@/components/filters";
import Structure from "@/components/structure";

export default function Games() {
  return (
    <div className="layout">
      <Filters filters={games_data} />

      <Structure
        heading="Games"
        description="Ever heard of 'All work and no play makes the developer dull'? Here's
        your chance to mix some play into your work!"
        layout={games_data}
      />
    </div>
  );
}

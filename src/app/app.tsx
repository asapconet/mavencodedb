import Card from "components/organisms/card";
import { DashboardLayout } from "../layouts/dashboardLayout";
import { cardData } from "../data/cardData";
import { DevActivities } from "./features/developmentActivities";
import { SubCharts } from "./features/subCharts/indexs";

function App() {
  return (
    <main>
      <DashboardLayout>
        <div className="px-4 lg:px-16">
          <p className="text-3xl font-semibold capitalize text-neu-2 py-6">
            dashboard
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {cardData.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                description={data.description}
                growthRate={data.growthRate}
              />
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 min-h-96 px-4 lg:px-16 mt-8">
          <DevActivities />
          <SubCharts />
        </div>
      </DashboardLayout>
    </main>
  );
}

export default App;

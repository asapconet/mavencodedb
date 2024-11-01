import Card from "components/organisms/card";
import { DashboardLayout } from "../layouts/dashboardLayout";
import { cardData } from "../data/cardData";

function App() {
  return (
    <main>
      <DashboardLayout>
        <div className="px-4 lg:px-16">
          <p className="text-3xl font-semibold capitalize text-neu-2 py-10">
            dashboard
          </p>
          <div className="grid grid-cols-6 gap-8">
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
      </DashboardLayout>
    </main>
  );
}

export default App;

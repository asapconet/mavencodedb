import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "components/organisms/card";
import { DashboardLayout } from "../layouts/dashboardLayout";
import { DevActivities } from "../components/features/developmentActivities";
import { SubCharts } from "../components/features/subCharts";
import { ProtectedRoute } from "../routes";
import { selectCard, selectIsLoading } from "../modules/dashboard/selectors";
import { getDashboardData } from "../modules/dashboard/dataSlice";

function Home() {
  const dispatch = useDispatch();

  const cardData = useSelector(selectCard);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  return (
    <ProtectedRoute>
      <main>
        <DashboardLayout>
          {isLoading ? (
            <div className="flex items-center justify-center text-3xl font-semibold h-[70vh]">
              Loading...
            </div>
          ) : (
            <>
              <div className="px-4 lg:px-16">
                <p className="text-3xl font-semibold capitalize text-neu-2 py-6">
                  dashboard
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                  {cardData.map((data: any, index: number) => (
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
            </>
          )}
        </DashboardLayout>
      </main>
    </ProtectedRoute>
  );
}

export default Home;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "components/organisms/card";
import { DashboardLayout } from "../layouts/dashboardLayout";
import { DevActivities } from "../components/features/developmentActivities";
import { SubCharts } from "../components/features/subCharts";
import { ProtectedRoute } from "../routes";
import {
  selectCard,
  selectIsLoading,
  selectError,
} from "../modules/dashboard/selectors";
import { getDashboardData } from "../modules/dashboard/dataSlice";
import { Spinner } from "@chakra-ui/react";

function Home() {
  const dispatch = useDispatch();
  const cardData = useSelector(selectCard);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  console.log("card data:", cardData);
  console.log("isLoading:", isLoading);
  console.log("isError:", error);

  return (
    <ProtectedRoute>
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
            


 <Spinner color="teal.500" size="lg" />


          </div>
          <div className="grid lg:grid-cols-2 gap-8 min-h-96 px-4 lg:px-16 mt-8">
            <DevActivities />
            <SubCharts />
          </div>
        </DashboardLayout>
      </main>
    </ProtectedRoute>
  );
}

export default Home;

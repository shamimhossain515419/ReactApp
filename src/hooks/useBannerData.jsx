import useServer from "./useServer";
import { useQuery } from "react-query";

const useBannerData = () => {
  const { serverRequest } = useServer();
  // load banner data
  const { data: bannersData = {} } = useQuery({
    queryKey: ["bannersDate", serverRequest],
    queryFn: async () => {
      const res = await serverRequest.get("/banners");
      return res.data[0];
    },
  });

  return bannersData;
};

export default useBannerData;

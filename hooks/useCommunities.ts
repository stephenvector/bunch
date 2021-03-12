import { useContext } from "react";
import CommunitiesContext from "./CommunitiesContext";

export default function useCommunities() {
  return useContext(CommunitiesContext);
}

import { REGIONS_REDUCER_NAME } from "@/pages/regions-page/redux/constants";

export type Region = {
    active: boolean;
    id: number;
    imageUri: string;
    name: string;
};

export type RegionsState = {
    isLoading: boolean;
    items: Region[];
}

export type RegionsStore = { [REGIONS_REDUCER_NAME]: RegionsState};
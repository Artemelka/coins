import { REGIONS_REDUCER_NAME } from "@/pages/regions-page/redux/constants";

export type Region = {
    active: boolean;
    id: number;
    imageUri: string;
    name: string;
};

export type Country = {
    active: boolean;
    name: string;
    description: string;
    id: number;
    imageUri: string;
    regionId: number;
};

export type RegionsState = {
    isLoading: boolean;
    items: Array<Region>;
    countries: Array<Country>;
    activeRegionId: number;
}

export type RegionsStore = { [REGIONS_REDUCER_NAME]: RegionsState};
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
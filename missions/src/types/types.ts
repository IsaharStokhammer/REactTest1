export interface Mission{
    name: string;
    status: string;
    priority: string;
    description: string;
    _id : string
}

const exsampleMission = {
    name: "Mission 1",
    status: "In progress",
    priority: "Law",
    description: "Mission 1 description"
}
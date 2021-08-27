import { setup } from "./setup"
import { latest } from "./latest"
export async function update (data:any) {
    data = await setup(data);
    data = await setup(data);
    return data;
};


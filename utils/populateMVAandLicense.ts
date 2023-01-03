import { Vehicle } from "../models/Vehicle";

export const populateMVAAndLicense = (allVehicles: { [vehicleId: number]: Vehicle}) => {
    const mva: { [vehicleId: number]: string } = {};
    const license: {[vehicleId: number]: string } = {};
    for (const vehicleId in allVehicles) {
        const vehicleIdNum = Number.parseInt(vehicleId);
        const vehicle = allVehicles[vehicleIdNum]
        mva[vehicleIdNum] = vehicle.mva;
        license[vehicleIdNum] = vehicle.license;
    }
    return [mva, license]
}
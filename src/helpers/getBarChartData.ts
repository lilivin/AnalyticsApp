import userDevices from "../data/userDevices.json";
import userStorage from "../data/userStorage.json";
import visitorsGender from "../data/visitorsGender.json";
import usedStorage from "../data/usedStorage.json";

export function getUserDevicesData() {
  return userDevices.data;
}

export function getUserStorageData() {
  return userStorage.data;
}

export function getVisitorsGenderData() {
  return visitorsGender.data;
}

export function getUsedStorageData() {
  return usedStorage.data;
}
